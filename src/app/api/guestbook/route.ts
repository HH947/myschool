import { NextResponse } from "next/server";

export interface GuestbookEntry {
  id: string;
  nickname: string;
  message: string;
  createdAt: string;
}

// Next.js 개발 서버 핫 리로딩 및 요청 간 메모리 유지를 위한 globalThis 패턴
declare global {
  // eslint-disable-next-line no-var
  var __GUESTBOOK_ENTRIES__: GuestbookEntry[] | undefined;
}

if (!globalThis.__GUESTBOOK_ENTRIES__) {
  globalThis.__GUESTBOOK_ENTRIES__ = [
    {
      id: "entry-1",
      nickname: "샬자 가족",
      message: "이왕이면 샬자! 스스로 선택하고 책임지는 멋진 배움을 늘 응원합니다 🌱",
      createdAt: "2026-11-11",
    },
    {
      id: "entry-2",
      nickname: "따뜻한 이웃",
      message: "마을과 함께 호흡하며 앎과 삶이 일치하는 샬롬자유학교, 참 따뜻합니다 🧡",
      createdAt: "2026-11-11",
    },
  ];
}

export async function GET() {
  const entries = globalThis.__GUESTBOOK_ENTRIES__ || [];
  return NextResponse.json(entries, {
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
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

    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(
      now.getMonth() + 1
    ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

    const newEntry: GuestbookEntry = {
      id: `entry-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      nickname,
      message,
      createdAt: formattedDate,
    };

    if (!globalThis.__GUESTBOOK_ENTRIES__) {
      globalThis.__GUESTBOOK_ENTRIES__ = [];
    }

    // 최신 글이 맨 위에 오도록 unshift
    globalThis.__GUESTBOOK_ENTRIES__.unshift(newEntry);

    return NextResponse.json(globalThis.__GUESTBOOK_ENTRIES__, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "방명록 등록 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
