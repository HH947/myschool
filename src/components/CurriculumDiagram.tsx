"use client";

import { useState } from "react";

interface CurriculumItem {
  title: string;
  shortLabel: string;
  tag: string;
  desc: string;
  items: string[];
}

const contentData: CurriculumItem[] = [
  {
    title: "자유의 맛",
    shortLabel: "자유의 맛",
    tag: "교육 철학",
    desc: "자유란 자신을 예속시키는 요소들로부터 벗어나며, 무언가를 향해 나아갈 자유를 발견함으로 삶의 주체가 되는 것을 의미합니다. 학교는 학생들이 안전하게 실수하고, 끊임없이 이 선택과 책임을 연습할 수 있는 공간을 제공합니다.",
    items: [],
  },
  {
    title: "삶의 기초를 세우는 교육 (1학기)",
    shortLabel: "삶의 기초를\n세우는",
    tag: "교육 과정",
    desc: "1학기에는 살면서 필요한 건강한 체력, 생활, 소통능력 향상 등 기초 교육을 집중적으로 진행합니다.",
    items: ["비폭력 대화(NVC)", "세계시민교육", "걷기여행"],
  },
  {
    title: "대안의 삶",
    shortLabel: "대안의 삶",
    tag: "교육 철학",
    desc: "학교에서의 배움을 바탕으로 자신만의 삶의 대안을 찾는 것은 교육의 궁극적인 목표입니다. 졸업 이후 각기 다른 대안의 삶을 선택하더라도, 그 핵심은 학생 시절의 배움이 삶과 일치하는 것에 있습니다.",
    items: [],
  },
  {
    title: "삶의 방향을 탐색하는 교육 (2학기)",
    shortLabel: "삶의 방향을\n탐색하는",
    tag: "교육 과정",
    desc: "2학기에는 학교 내부와 외부에서 학생들은 나를 찾고, 사회를 배워 삶의 방향을 찾는 교육을 합니다.",
    items: [
      "몰입주간(중등과정)",
      "인턴십(마을·세미·정식)",
      "사회예비취업과정",
      "콩네상점(학생 작업장)",
    ],
  },
  {
    title: "사랑의 멋",
    shortLabel: "사랑의 멋",
    tag: "교육 철학",
    desc: "사랑은 하나님 사랑, 자기 사랑, 이웃 사랑, 자연 사랑을 모두 포함합니다. 샬롬자유학교는 학생들이 참여하는 모든 활동에 사랑이 기반이 됩니다.",
    items: [],
  },
];

// 정오각형 5개 노드 좌표
const nodePositions = [
  { top: "0%", left: "50%", transform: "translate(-50%, 0%)" },
  { top: "28%", left: "88%", transform: "translate(-50%, -50%)" },
  { top: "78%", left: "73%", transform: "translate(-50%, -50%)" },
  { top: "78%", left: "27%", transform: "translate(-50%, -50%)" },
  { top: "28%", left: "12%", transform: "translate(-50%, -50%)" },
];

export default function CurriculumDiagram() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = contentData[activeIndex];

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-12 border border-[#EFE7DE] shadow-xs space-y-10">
      {/* 상단 타이틀 */}
      <div className="text-center space-y-2">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#D4592E] bg-[#FCEEE6] px-3.5 py-1 rounded-full border border-[#F6C5B2] inline-block">
          Philosophy &amp; Curriculum
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2C2623] tracking-tight">
          샬롬자유학교 교육 체계
        </h2>
        <p className="text-xs sm:text-sm text-[#7D7063]">
          원형 노드를 클릭하여 교육 철학과 학기별 교육 과정을 살펴보세요.
        </p>
      </div>

      {/* 오비탈 다이어그램 인터랙션 영역 */}
      <div className="relative w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] mx-auto select-none my-4">
        {/* 원형 궤도 가이드 라인 (연한 대시선) */}
        <div className="absolute inset-4 sm:inset-6 rounded-full border-2 border-dashed border-[#EFE7DE] pointer-events-none" />

        {/* 5개 주변 순환 노드 */}
        {contentData.map((node, i) => {
          const isActive = i === activeIndex;
          const pos = nodePositions[i];
          return (
            <button
              key={node.title}
              type="button"
              onClick={() => setActiveIndex(i)}
              style={pos}
              className={`absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-center p-2 text-xs sm:text-sm font-semibold whitespace-pre-line transition-all duration-300 z-10 cursor-pointer ${
                isActive
                  ? "bg-[#E07048] text-white border-2 border-[#E07048] shadow-lg scale-105"
                  : "bg-white text-[#4A3E38] border border-[#E8DDD1] hover:border-[#E07048] hover:bg-[#FDF0E9] shadow-xs"
              }`}
            >
              {node.shortLabel}
            </button>
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

      {/* 하단 상세 설명 카드 */}
      <div className="border-t border-[#EFE7DE] pt-6 sm:pt-8 text-left transition-all duration-300 space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h4 className="text-xl sm:text-2xl font-bold text-[#2C2623] tracking-tight">
            {current.title}
          </h4>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FCEEE6] text-[#D4592E] border border-[#F6C5B2] uppercase">
            {current.tag}
          </span>
        </div>

        <p className="text-sm sm:text-base text-[#5A4B43] leading-relaxed">
          {current.desc}
        </p>

        {current.items.length > 0 && (
          <div className="pt-2">
            <span className="text-xs font-bold text-[#8A7968] block mb-2">
              주요 교육 활동:
            </span>
            <ul className="flex flex-wrap gap-2">
              {current.items.map((item) => (
                <li
                  key={item}
                  className="text-xs sm:text-sm bg-[#FAF7F2] text-[#2C2623] border border-[#E8DDD1] px-3.5 py-1.5 rounded-xl font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
