import Link from "next/link";
import CurriculumDiagram from "@/components/CurriculumDiagram";

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. 히어로 섹션 (각진 모던 에디토리얼 스타일) */}
      <section className="text-center pt-8 sm:pt-16 pb-12 sm:pb-20 space-y-6 min-h-[65vh] flex flex-col justify-center items-center">
        {/* 인사말 배지 (각진 사각 박스) */}
        <div className="inline-block px-4 py-1.5 bg-[#EBF0EB] border border-[#D5DED5] text-[#384E38] text-xs sm:text-sm font-semibold tracking-wide">
          이왕이면 샬자
        </div>

        {/* 학교명 */}
        <h1 className="text-4xl sm:text-6xl font-bold text-[#1E261E] tracking-tight">
          샬롬자유학교
        </h1>

        {/* 한 줄 소개 */}
        <p className="text-xl sm:text-2xl font-medium text-[#384E38] max-w-2xl mx-auto leading-relaxed pt-1">
          &ldquo;하나님의 형상을 회복하고 삶의 힘을 기르는 교육&rdquo;
        </p>

        {/* 안내 문구 */}
        <p className="text-sm sm:text-base text-[#4E5C4E] max-w-xl mx-auto leading-relaxed pt-2">
          샬롬자유학교에 관심을 가져주신 모든 분들을 진심으로 환영합니다.
          <br className="hidden sm:inline" />
          아이들이 스스로 선택하고 책임지며 삶의 주인이 되는 배움의 터전입니다.
        </p>

        {/* 바로가기 버튼 그룹 (각진 사각 버튼) */}
        <div className="flex flex-wrap justify-center gap-3 pt-6">
          <Link
            href="/school-life"
            className="px-6 py-3.5 bg-[#384E38] text-white font-semibold hover:bg-[#2D3F2D] transition-colors text-sm sm:text-base border border-[#384E38]"
          >
            학교생활 둘러보기 →
          </Link>
          <Link
            href="/guestbook"
            className="px-6 py-3.5 bg-white text-[#1E261E] border border-[#D5DED5] font-semibold hover:bg-[#EBF0EB] hover:border-[#384E38] transition-colors text-sm sm:text-base"
          >
            응원 방명록 남기기
          </Link>
        </div>

        {/* 스크롤 유도 힌트 */}
        <div className="pt-10 flex flex-col items-center gap-1.5 text-xs text-[#768476]">
          <span>스크롤하여 교육 체계 살펴보기</span>
          <span>↓</span>
        </div>
      </section>

      {/* 2. 교육 체계 다이어그램 섹션 (스크롤 3번 위치) */}
      <section className="pt-6 sm:pt-10 scroll-mt-20">
        <CurriculumDiagram />
      </section>

      {/* 3. 1년의 배움 흐름 섹션 (각진 3단계 박스) */}
      <section className="bg-white p-6 sm:p-10 border border-[#D5DED5] space-y-8 max-w-3xl mx-auto">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold tracking-wider text-[#768476] uppercase">
            Curriculum Flow
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E261E]">
            1년의 배움 흐름
          </h2>
          <p className="text-sm text-[#4E5C4E]">
            기초를 다지고 방향을 정하여 대안을 살아가는 3학기제 흐름입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 1학기: 기초 */}
          <div className="p-6 bg-[#F7F9F7] border border-[#D5DED5] text-center space-y-3 flex flex-col items-center">
            <span className="text-xs font-bold text-[#384E38] px-2.5 py-1 bg-[#EBF0EB] border border-[#D5DED5]">
              STEP 01
            </span>
            <h3 className="text-lg font-bold text-[#1E261E]">1학기: 기초</h3>
            <p className="text-xs sm:text-sm text-[#4E5C4E] leading-relaxed">
              배움과 공동체의 든든한 밑바탕을 다지는 시기
            </p>
          </div>

          {/* 2학기: 방향 */}
          <div className="p-6 bg-[#F7F9F7] border border-[#D5DED5] text-center space-y-3 flex flex-col items-center">
            <span className="text-xs font-bold text-[#384E38] px-2.5 py-1 bg-[#EBF0EB] border border-[#D5DED5]">
              STEP 02
            </span>
            <h3 className="text-lg font-bold text-[#1E261E]">2학기: 방향</h3>
            <p className="text-xs sm:text-sm text-[#4E5C4E] leading-relaxed">
              자신의 관심과 배움의 길을 찾아 탐색하는 시기
            </p>
          </div>

          {/* 3학기: 대안 */}
          <div className="p-6 bg-[#F7F9F7] border border-[#D5DED5] text-center space-y-3 flex flex-col items-center">
            <span className="text-xs font-bold text-[#384E38] px-2.5 py-1 bg-[#EBF0EB] border border-[#D5DED5]">
              STEP 03
            </span>
            <h3 className="text-lg font-bold text-[#1E261E]">3학기: 대안</h3>
            <p className="text-xs sm:text-sm text-[#4E5C4E] leading-relaxed">
              배운 것을 바탕으로 삶 속에서 실천하는 시기
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
