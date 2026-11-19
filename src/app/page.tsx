import Link from "next/link";
import CurriculumDiagram from "@/components/CurriculumDiagram";

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. 히어로 섹션 */}
      <section className="text-center pt-8 sm:pt-16 pb-12 sm:pb-20 space-y-6 min-h-[65vh] flex flex-col justify-center items-center">
        {/* 인사말 배지 */}
        <div className="inline-block px-4 py-1.5 bg-[#EBF3EB] border border-[#CCE0CC] text-[#5C8A5C] text-xs sm:text-sm font-semibold tracking-wide">
          이왕이면 샬자
        </div>

        {/* 학교명 */}
        <h1 className="text-4xl sm:text-6xl font-bold text-[#1D261D] tracking-tight">
          샬롬자유학교
        </h1>

        {/* 한 줄 소개 */}
        <p className="text-xl sm:text-2xl font-medium text-[#527E52] max-w-2xl mx-auto leading-relaxed pt-1">
          &ldquo;하나님의 형상을 회복하고 삶의 힘을 기르는 교육&rdquo;
        </p>

        {/* 안내 문구 */}
        <p className="text-sm sm:text-base text-[#465E46] max-w-xl mx-auto leading-relaxed pt-2">
          샬롬자유학교에 관심을 가져주신 모든 분들을 진심으로 환영합니다.
          <br className="hidden sm:inline" />
          아이들이 스스로 선택하고 책임지며 삶의 주인이 되는 배움의 터전입니다.
        </p>

        {/* 바로가기 버튼 그룹 */}
        <div className="flex flex-wrap justify-center gap-3 pt-6">
          <Link
            href="/school-life"
            className="px-6 py-3.5 bg-[#5C8A5C] text-white font-semibold hover:bg-[#4D754D] transition-colors text-sm sm:text-base border border-[#5C8A5C]"
          >
            학교생활 둘러보기 →
          </Link>
          <Link
            href="/guestbook"
            className="px-6 py-3.5 bg-white text-[#1D261D] border border-[#CCE0CC] font-semibold hover:bg-[#EBF3EB] hover:border-[#5C8A5C] transition-colors text-sm sm:text-base"
          >
            응원 방명록 남기기
          </Link>
        </div>

        {/* 스크롤 유도 힌트 */}
        <div className="pt-10 flex flex-col items-center gap-1.5 text-xs text-[#6B856B]">
          <span>스크롤하여 교육 체계 살펴보기</span>
          <span>↓</span>
        </div>
      </section>

      {/* 2. 교육 체계 다이어그램 섹션 */}
      <section className="pt-6 sm:pt-10 scroll-mt-20">
        <CurriculumDiagram />
      </section>

      {/* 3. 1년의 배움 흐름 섹션 */}
      <section className="bg-white p-6 sm:p-10 border border-[#CCE0CC] space-y-8 max-w-3xl mx-auto">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold tracking-wider text-[#6B856B] uppercase">
            Curriculum Flow
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1D261D]">
            1년의 배움 흐름
          </h2>
          <p className="text-sm text-[#465E46]">
            기초를 다지고 방향을 정하여 대안을 살아가는 3학기제 흐름입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 1학기: 기초 */}
          <div className="p-6 bg-[#FAFCFA] border border-[#CCE0CC] text-center space-y-3 flex flex-col items-center">
            <span className="text-xs font-bold text-[#5C8A5C] px-2.5 py-1 bg-[#EBF3EB] border border-[#CCE0CC]">
              STEP 01
            </span>
            <h3 className="text-lg font-bold text-[#1D261D]">1학기: 기초</h3>
            <p className="text-xs sm:text-sm text-[#465E46] leading-relaxed">
              배움과 공동체의 든든한 밑바탕을 다지는 시기
            </p>
          </div>

          {/* 2학기: 방향 */}
          <div className="p-6 bg-[#FAFCFA] border border-[#CCE0CC] text-center space-y-3 flex flex-col items-center">
            <span className="text-xs font-bold text-[#5C8A5C] px-2.5 py-1 bg-[#EBF3EB] border border-[#CCE0CC]">
              STEP 02
            </span>
            <h3 className="text-lg font-bold text-[#1D261D]">2학기: 방향</h3>
            <p className="text-xs sm:text-sm text-[#465E46] leading-relaxed">
              자신의 관심과 배움의 길을 찾아 탐색하는 시기
            </p>
          </div>

          {/* 3학기: 대안 */}
          <div className="p-6 bg-[#FAFCFA] border border-[#CCE0CC] text-center space-y-3 flex flex-col items-center">
            <span className="text-xs font-bold text-[#5C8A5C] px-2.5 py-1 bg-[#EBF3EB] border border-[#CCE0CC]">
              STEP 03
            </span>
            <h3 className="text-lg font-bold text-[#1D261D]">3학기: 대안</h3>
            <p className="text-xs sm:text-sm text-[#465E46] leading-relaxed">
              배운 것을 바탕으로 삶 속에서 실천하는 시기
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
