import Link from "next/link";

interface Activity {
  emoji: string;
  name: string;
  description: string;
}

const activities: Activity[] = [
  {
    emoji: "🥾",
    name: "걷기 여행",
    description: "자연 속에서 나와 이웃을 돌아보는 순례",
  },
  {
    emoji: "🧭",
    name: "테마여행",
    description: "스스로 기획하고 떠나는 탐구 여행",
  },
  {
    emoji: "💼",
    name: "인턴십",
    description: "사회 속에서 배움을 삶과 연결하는 배움터",
  },
  {
    emoji: "🕊️",
    name: "비폭력대화",
    description: "서로의 마음을 잇고 평화를 배우는 소통",
  },
  {
    emoji: "🏡",
    name: "마을과 함께",
    description: "학교 울타리를 넘어 이웃과 만나는 배움",
  },
];

export default function SchoolLifePage() {
  return (
    <div className="space-y-10 sm:space-y-12">
      {/* 헤더 섹션 */}
      <section className="text-center space-y-3 pt-2 sm:pt-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FCEEE6] text-[#D4592E] text-xs sm:text-sm font-semibold">
          <span>🎒</span>
          <span>우리들의 배움터</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2C2623] tracking-tight">
          학교생활
        </h1>
        <p className="text-base sm:text-lg text-[#5A4B43] max-w-xl mx-auto leading-relaxed">
          샬롬자유학교에서 아이들이 스스로 부딪치고 배우며 자라나는 대표적인 5가지 활동입니다.
        </p>
      </section>

      {/* 5개 활동 카드 그리드 */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <div
            key={activity.name}
            className={`bg-white rounded-3xl p-6 sm:p-7 border border-[#EFE7DE] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 ${
              index === 4 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-[#FDF0E9] flex items-center justify-center text-3xl shadow-2xs">
                {activity.emoji}
              </div>
              <h2 className="text-xl font-bold text-[#2C2623]">
                {activity.name}
              </h2>
              <p className="text-sm sm:text-base text-[#5A4B43] leading-relaxed">
                {activity.description}
              </p>
            </div>

            <div className="pt-2 border-t border-[#F5EEE6] flex items-center justify-between text-xs text-[#8A7968]">
              <span>활동 {index + 1}</span>
              <span className="text-[#E07048] font-medium">샬롬자유학교</span>
            </div>
          </div>
        ))}
      </section>

      {/* 하단 이동 배너 */}
      <section className="bg-[#FDF0E9] rounded-3xl p-6 sm:p-8 border border-[#F6C5B2] text-center space-y-3">
        <h3 className="text-lg sm:text-xl font-bold text-[#2C2623]">
          샬롬자유학교의 따뜻한 여정을 함께 응원해 주세요
        </h3>
        <p className="text-sm text-[#5A4B43]">
          방명록에 전해주시는 따뜻한 말 한마디가 우리 학교에 큰 힘이 됩니다.
        </p>
        <div className="pt-2">
          <Link
            href="/guestbook"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-[#E07048] text-white font-semibold shadow-xs hover:bg-[#CF5E36] transition-colors"
          >
            <span>응원 방명록 남기러 가기</span>
            <span>💌</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
