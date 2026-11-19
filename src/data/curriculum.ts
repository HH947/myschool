export interface CurriculumData {
  slug: string;
  title: string;
  shortLabel: string;
  tag: "교육 철학" | "교육 과정";
  emoji: string;
  desc: string;
  items: string[];
  detailedContent?: string;
}

export const curriculumList: CurriculumData[] = [
  {
    slug: "taste-of-freedom",
    title: "자유의 맛",
    shortLabel: "자유의 맛",
    tag: "교육 철학",
    emoji: "🌱",
    desc: "자유란 자신을 예속시키는 요소들로부터 벗어나며, 무언가를 향해 나아갈 자유를 발견함으로 삶의 주체가 되는 것을 의미합니다. 학교는 학생들이 안전하게 실수하고, 끊임없이 이 선택과 책임을 연습할 수 있는 공간을 제공합니다.",
    items: ["선택과 책임의 연습", "안전한 실수의 공간", "삶의 주체성 회복"],
  },
  {
    slug: "semester-1",
    title: "삶의 기초를 세우는 교육 (1학기)",
    shortLabel: "삶의 기초를\n세우는",
    tag: "교육 과정",
    emoji: "👣",
    desc: "1학기에는 살면서 필요한 건강한 체력, 생활, 소통능력 향상 등 기초 교육을 집중적으로 진행합니다.",
    items: ["비폭력 대화(NVC)", "세계시민교육", "걷기여행"],
  },
  {
    slug: "alternative-life",
    title: "대안의 삶",
    shortLabel: "대안의 삶",
    tag: "교육 철학",
    emoji: "🧭",
    desc: "학교에서의 배움을 바탕으로 자신만의 삶의 대안을 찾는 것은 교육의 궁극적인 목표입니다. 졸업 이후 각기 다른 대안의 삶을 선택하더라도, 그 핵심은 학생 시절의 배움이 삶과 일치하는 것에 있습니다.",
    items: ["앎과 삶의 일치", "자기만의 대안 모색", "더불어 살아가는 배움"],
  },
  {
    slug: "semester-2",
    title: "삶의 방향을 탐색하는 교육 (2학기)",
    shortLabel: "삶의 방향을\n탐색하는",
    tag: "교육 과정",
    emoji: "💼",
    desc: "2학기에는 학교 내부와 외부에서 학생들은 나를 찾고, 사회를 배워 삶의 방향을 찾는 교육을 합니다.",
    items: [
      "몰입주간(중등과정)",
      "인턴십(마을·세미·정식)",
      "사회예비취업과정",
      "콩네상점(학생 작업장)",
    ],
  },
  {
    slug: "beauty-of-love",
    title: "사랑의 멋",
    shortLabel: "사랑의 멋",
    tag: "교육 철학",
    emoji: "🧡",
    desc: "사랑은 하나님 사랑, 자기 사랑, 이웃 사랑, 자연 사랑을 모두 포함합니다. 샬롬자유학교는 학생들이 참여하는 모든 활동에 사랑이 기반이 됩니다.",
    items: ["하나님 사랑", "자기 사랑", "이웃 사랑", "자연 사랑"],
  },
];

export function getCurriculumBySlug(slug: string): CurriculumData | undefined {
  return curriculumList.find((item) => item.slug === slug);
}
