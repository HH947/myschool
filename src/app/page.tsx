import Link from "next/link";
import CurriculumDiagram from "@/components/CurriculumDiagram";

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. 히어로 섹션 (첫 화면을 넉넉하고 편안하게 채우는 환영 영역) */}
      <section className="text-center pt-8 sm:pt-16 pb-12 sm:pb-20 space-y-6 min-h-[65vh] flex flex-col justify-center items-center">
        {/* 인사말 배지 */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCEEE6] border border-[#F6C5B2] text-[#D4592E] text-sm sm:text-base font-semibold shadow-2xs">
          <span>🌿</span>
          <span>이왕이면 샬자~</span>
        </div>

        {/* 학교명 */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#2C2623] tracking-tight">
          샬롬자유학교
        </h1>

        {/* 한 줄 소개 */}
        <p className="text-xl sm:text-2xl font-medium text-[#5A4B43] max-w-2xl mx-auto leading-relaxed pt-1">
          &ldquo;하나님의 형상을 회복하고 삶의 힘을 기르는 교육&rdquo;
        </p>

        {/* 안내 문구 (입학 희망자 및 학부모를 위한 따뜻한 환영) */}
        <p className="text-sm sm:text-base text-[#7D7063] max-w-xl mx-auto leading-relaxed pt-2">
          샬롬자유학교에 관심을 가져주신 모든 분들을 진심으로 환영합니다.
          <br className="hidden sm:inline" />
          아이들이 스스로 선택하고 책임지며 삶의 주인이 되는 배움의 터전입니다.
        </p>

        {/* 바로가기 버튼 그룹 */}
        <div className="flex flex-wrap justify-center gap-3 pt-6">
          <Link
            href="/school-life"
            className="px-6 py-3.5 rounded-2xl bg-[#E07048] text-white font-semibold shadow-xs hover:bg-[#CF5E36] transition-all hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
          >
            학교생활 둘러보기 🎒
          </Link>
          <Link
            href="/guestbook"
            className="px-6 py-3.5 rounded-2xl bg-[#FFFFFF] text-[#4A3E38] border border-[#E8DDD1] font-semibold shadow-xs hover:bg-[#F3EDE2] transition-all hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
          >
            응원 방명록 남기기 💌
          </Link>
        </div>

        {/* 스크롤 유도 힌트 (스크롤을 2~3번 내리면 교육 체계가 나타남을 부드럽게 안내) */}
        <div className="pt-10 flex flex-col items-center gap-1.5 text-xs text-[#A49486] animate-pulse">
          <span>아래로 스크롤하여 교육 체계 살펴보기</span>
          <span>↓</span>
        </div>
      </section>

      {/* 2. 교육 체계 오비탈 다이어그램 섹션 (스크롤을 내리면 슬슬 보이기 시작하는 위치) */}
      <section className="pt-6 sm:pt-10 scroll-mt-20">
        <CurriculumDiagram />
      </section>

      {/* 3. 1년의 배움 흐름 섹션 */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EFE7DE] shadow-xs space-y-8 max-w-3xl mx-auto">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2C2623]">
            1년의 배움 흐름
          </h2>
          <p className="text-sm sm:text-base text-[#7D7063]">
            기초를 다지고 방향을 정하여 대안을 살아가는 3학기제 흐름입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
          {/* 1학기: 기초 */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#EFE7DE] text-center space-y-3 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#E07048] text-white flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="text-lg font-bold text-[#2C2623]">1학기</h3>
            <span className="inline-block px-3 py-1 rounded-full bg-[#FCEEE6] text-[#D4592E] font-semibold text-sm">
              기초
            </span>
            <p className="text-xs sm:text-sm text-[#7D7063]">
              배움과 공동체의 든든한 밑바탕을 다지는 시기
            </p>
          </div>

          {/* 2학기: 방향 */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#EFE7DE] text-center space-y-3 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#E07048] text-white flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="text-lg font-bold text-[#2C2623]">2학기</h3>
            <span className="inline-block px-3 py-1 rounded-full bg-[#FCEEE6] text-[#D4592E] font-semibold text-sm">
              방향
            </span>
            <p className="text-xs sm:text-sm text-[#7D7063]">
              자신의 관심과 배움의 길을 찾아 탐색하는 시기
            </p>
          </div>

          {/* 3학기: 대안 */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#EFE7DE] text-center space-y-3 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#E07048] text-white flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="text-lg font-bold text-[#2C2623]">3학기</h3>
            <span className="inline-block px-3 py-1 rounded-full bg-[#FCEEE6] text-[#D4592E] font-semibold text-sm">
              대안
            </span>
            <p className="text-xs sm:text-sm text-[#7D7063]">
              배운 것을 바탕으로 삶 속에서 실천하는 시기
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
