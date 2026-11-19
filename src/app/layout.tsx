import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "샬롬자유학교 소개",
  description: "하나님의 형상을 회복하고 삶의 힘을 기르는 교육 - 샬롬자유학교",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col bg-[#F7F9F7] text-[#1E261E] antialiased">
        {/* 공통 상단 네비게이션 */}
        <header className="sticky top-0 z-50 bg-[#F7F9F7]/95 backdrop-blur-sm border-b border-[#D5DED5]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
            {/* 학교 로고 & 이름 */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-hidden"
            >
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 overflow-hidden border border-[#D5DED5] bg-white flex items-center justify-center">
                <Image
                  src="/logo.jpg"
                  alt="샬롬자유학교 로고"
                  fill
                  sizes="44px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-[#1E261E] group-hover:text-[#384E38] transition-colors">
                  샬롬자유학교
                </span>
                <span className="text-[11px] sm:text-xs text-[#768476]">
                  이왕이면 샬자
                </span>
              </div>
            </Link>

            {/* 3개 메뉴 네비게이션 (각진 디자인) */}
            <nav className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base font-medium">
              <Link
                href="/"
                className="px-3.5 py-2 text-[#4E5C4E] hover:text-[#1E261E] hover:bg-[#EBF0EB] border border-transparent hover:border-[#D5DED5] transition-colors"
              >
                홈
              </Link>
              <Link
                href="/school-life"
                className="px-3.5 py-2 text-[#4E5C4E] hover:text-[#1E261E] hover:bg-[#EBF0EB] border border-transparent hover:border-[#D5DED5] transition-colors"
              >
                학교생활
              </Link>
              <Link
                href="/guestbook"
                className="px-3.5 py-2 text-[#4E5C4E] hover:text-[#1E261E] hover:bg-[#EBF0EB] border border-transparent hover:border-[#D5DED5] transition-colors"
              >
                방명록
              </Link>
            </nav>
          </div>
        </header>

        {/* 본문 콘텐츠 영역 */}
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {children}
        </main>

        {/* 공통 하단 푸터 (각진 모던 스타일) */}
        <footer className="border-t border-[#D5DED5] bg-[#EBF0EB] py-8 text-center text-xs sm:text-sm text-[#4E5C4E]">
          <div className="max-w-5xl mx-auto px-4 space-y-2">
            <p className="font-normal">
              학생 실습으로 만든 사이트예요 (공식 홈페이지 아님) · 공식 홈페이지:{" "}
              <a
                href="https://www.shalomfree.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#384E38] transition-colors font-medium"
              >
                shalomfree.kr
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
