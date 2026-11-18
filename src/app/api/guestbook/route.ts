import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export interface GuestbookEntry {
  id: string;
  nickname: string;
  message: string;
  createdAt: string;
}

interface DbGuestbookRow {
  id: string;
  nickname: string;
  message: string;
  created_at: string;
}

function mapRowToEntry(row: DbGuestbookRow): GuestbookEntry {
  const date = new Date(row.created_at);
  const formattedDate = `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

  return {
    id: row.id,
    nickname: row.nickname,
    message: row.message,
    createdAt: formattedDate,
  };
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("guestbook")
      .select("id, nickname, message, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase GET error:", error);
      return NextResponse.json(
        { error: "방명록을 불러오는 중 오류가 발생했습니다." },
        { status: 500 }
      );
    }

    const entries: GuestbookEntry[] = (data || []).map(mapRowToEntry);

    return NextResponse.json(entries, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (err) {
    console.error("Unexpected GET error:", err);
    return NextResponse.json(
      { error: "방명록을 불러오는 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const nickname = (body.nickname || "").trim();
    const message = (body.message || "").trim();

    if (!nickname || !message) {
      return NextResponse.json(
        { error: "닉네임과 응원 글을 모두 입력해 주세요." },
        { status: 400 }
      );
    }

    if (nickname.length > 20) {
      return NextResponse.json(
        { error: "닉네임은 20자 이하로 작성해 주세요." },
        { status: 400 }
      );
    }

    if (message.length > 200) {
      return NextResponse.json(
        { error: "응원 글은 200자 이하로 작성해 주세요." },
        { status: 400 }
      );
    }

    // Supabase DB에 삽입
    const { error: insertError } = await supabase
      .from("guestbook")
      .insert([{ nickname, message }]);

    if (insertError) {
      console.error("Supabase INSERT error:", insertError);
      return NextResponse.json(
        { error: "방명록 등록 중 오류가 발생했습니다." },
        { status: 500 }
      );
    }

    // 최신 목록 조회 후 반환
    const { data, error: selectError } = await supabase
      .from("guestbook")
      .select("id, nickname, message, created_at")
      .order("created_at", { ascending: false });

    if (selectError) {
      console.error("Supabase SELECT after insert error:", selectError);
      return NextResponse.json(
        { error: "방명록 목록을 새로고침하는 중 오류가 발생했습니다." },
        { status: 500 }
      );
    }

    const entries: GuestbookEntry[] = (data || []).map(mapRowToEntry);
    return NextResponse.json(entries, { status: 201 });
  } catch (err) {
    console.error("Unexpected POST error:", err);
    return NextResponse.json(
      { error: "방명록 등록 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
