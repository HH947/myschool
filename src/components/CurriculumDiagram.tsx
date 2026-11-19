"use client";

import Link from "next/link";
import { useState } from "react";
import { curriculumList } from "@/data/curriculum";

// 정오각형 5개 노드 좌표 (데스크탑 / 모바일 공통)
const nodePositions = [
  { top: "0%", left: "50%", transform: "translate(-50%, 0%)" },
  { top: "28%", left: "88%", transform: "translate(-50%, -50%)" },
  { top: "78%", left: "73%", transform: "translate(-50%, -50%)" },
  { top: "78%", left: "27%", transform: "translate(-50%, -50%)" },
  { top: "28%", left: "12%", transform: "translate(-50%, -50%)" },
];

export default function CurriculumDiagram() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      id="curriculum-section"
      className="w-full max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-12 border border-[#EFE7DE] shadow-xs space-y-8"
    >
      {/* 상단 타이틀 */}
      <div className="text-center space-y-2">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#D4592E] bg-[#FCEEE6] px-3.5 py-1 rounded-full border border-[#F6C5B2] inline-block">
          Philosophy &amp; Curriculum
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2C2623] tracking-tight">
          샬롬자유학교 교육 체계
        </h2>
        <p className="text-xs sm:text-sm text-[#7D7063]">
          원형 노드를 클릭하면 해당 교육 철학 및 과정의 **전용 상세 페이지**로 이동합니다.
        </p>
      </div>

      {/* 오비탈 다이어그램 인터랙션 영역 */}
      <div className="relative w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] mx-auto select-none my-6">
        {/* 원형 궤도 가이드 라인 (연한 대시선) */}
        <div className="absolute inset-4 sm:inset-6 rounded-full border-2 border-dashed border-[#EFE7DE] pointer-events-none" />

        {/* 5개 주변 순환 노드 (클릭 시 전용 상세 페이지로 이동) */}
        {curriculumList.map((node, i) => {
          const isHovered = hoveredIndex === i;
          const pos = nodePositions[i];
          return (
            <Link
              key={node.slug}
              href={`/curriculum/${node.slug}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={pos}
              className={`absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center text-center p-2 text-xs sm:text-sm font-semibold whitespace-pre-line transition-all duration-300 z-10 group shadow-xs ${
                isHovered
                  ? "bg-[#E07048] text-white border-2 border-[#E07048] shadow-lg scale-110 z-20"
                  : "bg-white text-[#4A3E38] border border-[#E8DDD1] hover:border-[#E07048] hover:bg-[#FDF0E9]"
              }`}
            >
              <span>{node.shortLabel}</span>
              <span
                className={`text-[10px] mt-0.5 transition-opacity ${
                  isHovered ? "opacity-100 text-white/90" : "opacity-0"
                }`}
              >
                상세보기 →
              </span>
            </Link>
          );
        })}

        {/* 중앙 코어 박스 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-48 sm:h-48 rounded-full border-2 border-[#E8C5B0] bg-[#FAF7F2] flex flex-col items-center justify-center p-4 text-center z-5 shadow-xs">
          <span className="text-base sm:text-lg mb-1">🌿</span>
          <h3 className="text-xs sm:text-sm font-bold leading-snug text-[#2C2623]">
            하나님의 형상을 회복하며
          </h3>
          <p className="text-[11px] sm:text-xs text-[#D4592E] font-medium mt-0.5">
            삶의 힘을 기르는 교육
          </p>
        </div>
      </div>

      {/* 하단 심플 안내 배너 */}
      <div className="pt-2 text-center">
        <p className="text-xs text-[#8A7968]">
          💡 궁금한 교육 가치나 학기 과정을 클릭하시면 자세한 이야기와 교육 활동을 확인하실 수 있습니다.
        </p>
      </div>
    </div>
  );
}
