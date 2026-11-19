"use client";

import { useEffect, useState } from "react";
import type { GuestbookEntry } from "@/app/api/guestbook/route";

export default function GuestbookPage() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // 방명록 목록 불러오기 (서버 API에서 조회)
  const fetchEntries = async () => {
    try {
      const res = await fetch("/api/guestbook", { cache: "no-store" });
      if (res.ok) {
        const data: GuestbookEntry[] = await res.json();
        setEntries(data);
      }
    } catch {
      setErrorMessage("방명록을 불러오는 데 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let ignore = false;
    const loadInitialEntries = async () => {
      try {
        const res = await fetch("/api/guestbook", { cache: "no-store" });
        if (res.ok && !ignore) {
          const data: GuestbookEntry[] = await res.json();
          setEntries(data);
        }
      } catch {
        if (!ignore) {
          setErrorMessage("방명록을 불러오는 데 실패했습니다.");
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    };

    loadInitialEntries();
    return () => {
      ignore = true;
    };
  }, []);

  // 방명록 작성 제출
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim() || !message.trim()) {
      setErrorMessage("닉네임과 응원 글을 모두 입력해 주세요.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickname, message }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "등록에 실패했습니다.");
      }

      const updatedEntries: GuestbookEntry[] = await res.json();
      setEntries(updatedEntries);
      setNickname("");
      setMessage("");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("방명록 등록 중 문제가 발생했습니다.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* 헤더 섹션 */}
      <section className="text-center space-y-3 pt-2 sm:pt-4">
        <div className="inline-block px-3 py-1 bg-[#EBF0EB] text-[#384E38] text-xs font-semibold uppercase tracking-wider border border-[#D5DED5]">
          Guestbook
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1E261E] tracking-tight">
          응원 방명록
        </h1>
        <p className="text-base sm:text-lg text-[#4E5C4E] max-w-xl mx-auto leading-relaxed">
          샬롬자유학교의 아이들과 선생님, 학교를 향한 따뜻한 응원의 한마디를 남겨주세요.
        </p>
      </section>

      {/* 방명록 작성 폼 (각진 사각 박스) */}
      <section className="max-w-2xl mx-auto bg-white p-6 sm:p-8 border border-[#D5DED5]">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="pb-3 border-b border-[#D5DED5]">
            <h2 className="text-base font-bold text-[#1E261E]">
              응원 글 남기기
            </h2>
          </div>

          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm">
              {errorMessage}
            </div>
          )}

          {/* 닉네임 입력 (각진 인풋) */}
          <div className="space-y-1.5">
            <label
              htmlFor="nickname"
              className="block text-xs font-bold text-[#1E261E] uppercase tracking-wider"
            >
              닉네임 (최대 20자)
            </label>
            <input
              id="nickname"
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="예: 샬자 친구, 응원하는 이웃"
              maxLength={20}
              required
              className="w-full px-4 py-2.5 border border-[#D5DED5] bg-[#F7F9F7] text-[#1E261E] placeholder-[#768476] focus:outline-hidden focus:border-[#384E38] focus:bg-white text-sm sm:text-base transition-colors"
            />
          </div>

          {/* 응원 글 입력 (각진 텍스트에어리어) */}
          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="block text-xs font-bold text-[#1E261E] uppercase tracking-wider"
            >
              응원 글 (최대 200자)
            </label>
            <textarea
              id="message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="샬롬자유학교를 향한 따뜻한 응원의 말을 적어주세요."
              maxLength={200}
              required
              className="w-full px-4 py-2.5 border border-[#D5DED5] bg-[#F7F9F7] text-[#1E261E] placeholder-[#768476] focus:outline-hidden focus:border-[#384E38] focus:bg-white text-sm sm:text-base transition-colors resize-none"
            />
            <div className="text-right text-xs text-[#768476]">
              {message.length} / 200자
            </div>
          </div>

          {/* 등록 버튼 (각진 사각 버튼) */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 bg-[#384E38] text-white font-semibold hover:bg-[#2D3F2D] transition-colors border border-[#384E38] disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            {isSubmitting ? "등록 중..." : "응원 글 남기기"}
          </button>
        </form>
      </section>

      {/* 방명록 목록 섹션 */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#D5DED5]">
          <h2 className="text-lg font-bold text-[#1E261E] flex items-center gap-2">
            <span>함께 나눈 응원들</span>
            <span className="text-xs font-semibold px-2 py-0.5 bg-[#EBF0EB] text-[#384E38] border border-[#D5DED5]">
              {entries.length}개
            </span>
          </h2>
          <button
            onClick={fetchEntries}
            type="button"
            className="text-xs text-[#4E5C4E] hover:text-[#1E261E] underline transition-colors"
          >
            새로고침
          </button>
        </div>

        {isLoading ? (
          <div className="py-12 text-center text-sm text-[#768476]">
            방명록을 불러오고 있습니다...
          </div>
        ) : entries.length === 0 ? (
          <div className="py-12 text-center text-sm text-[#768476] bg-white border border-[#D5DED5]">
            첫 번째 응원의 한마디를 남겨주세요.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="bg-white p-5 border border-[#D5DED5] hover:border-[#384E38] transition-colors flex flex-col justify-between space-y-4"
              >
                <p className="text-sm sm:text-base text-[#1E261E] leading-relaxed whitespace-pre-line">
                  {entry.message}
                </p>
                <div className="pt-3 border-t border-[#D5DED5] flex items-center justify-between text-xs text-[#768476]">
                  <span className="font-semibold text-[#384E38]">
                    {entry.nickname}
                  </span>
                  <span>{entry.createdAt}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
