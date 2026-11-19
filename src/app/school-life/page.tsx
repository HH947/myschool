import Link from "next/link";

interface Activity {
  number: string;
  name: string;
  description: string;
}

const activities: Activity[] = [
  {
    number: "01",
    name: "걷기 여행",
    description: "자연 속에서 나와 이웃을 돌아보는 순례",
  },
  {
    number: "02",
    name: "테마여행",
    description: "스스로 기획하고 떠나는 탐구 여행",
  },
  {
    number: "03",
    name: "인턴십",
    description: "사회 속에서 배움을 삶과 연결하는 배움터",
  },
  {
    number: "04",
    name: "비폭력대화",
    description: "서로의 마음을 잇고 평화를 배우는 소통",
  },
  {
    number: "05",
    name: "마을과 함께",
    description: "학교 울타리를 넘어 이웃과 만나는 배움",
  },
];

export default function SchoolLifePage() {
  return (
    <div className="space-y-10 sm:space-y-12">
      {/* 헤더 섹션 */}
      <section className="text-center space-y-3 pt-2 sm:pt-4">
        <div className="inline-block px-3 py-1 bg-[#EBF0EB] text-[#384E38] text-xs font-semibold uppercase tracking-wider border border-[#D5DED5]">
          School Life
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1E261E] tracking-tight">
          학교생활
        </h1>
        <p className="text-base sm:text-lg text-[#4E5C4E] max-w-xl mx-auto leading-relaxed">
          샬롬자유학교에서 아이들이 스스로 부딪치고 배우며 자라나는 대표적인 5가지 활동입니다.
        </p>
      </section>

      {/* 5개 활동 카드 그리드 (각진 사각 카드) */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <div
            key={activity.name}
            className={`bg-white p-6 sm:p-7 border border-[#D5DED5] flex flex-col justify-between space-y-5 hover:border-[#384E38] transition-colors ${
              index === 4 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold text-[#384E38] tracking-widest block">
                ACTIVITY {activity.number}
              </span>
              <h2 className="text-xl font-bold text-[#1E261E]">
                {activity.name}
              </h2>
              <p className="text-sm sm:text-base text-[#4E5C4E] leading-relaxed">
                {activity.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[#D5DED5] flex items-center justify-between text-xs text-[#768476]">
              <span>샬롬자유학교</span>
              <span className="text-[#384E38] font-medium">활동 안내</span>
            </div>
          </div>
        ))}
      </section>

      {/* 하단 이동 배너 (각진 모던 스타일) */}
      <section className="bg-[#EBF0EB] p-6 sm:p-8 border border-[#D5DED5] text-center space-y-3">
        <h3 className="text-lg sm:text-xl font-bold text-[#1E261E]">
          샬롬자유학교의 따뜻한 여정을 함께 응원해 주세요
        </h3>
        <p className="text-sm text-[#4E5C4E]">
          방명록에 전해주시는 따뜻한 말 한마디가 우리 학교에 큰 힘이 됩니다.
        </p>
        <div className="pt-2">
          <Link
            href="/guestbook"
            className="inline-block px-6 py-2.5 bg-[#384E38] text-white font-semibold text-sm hover:bg-[#2D3F2D] transition-colors border border-[#384E38]"
          >
            응원 방명록 남기러 가기 →
          </Link>
        </div>
      </section>
    </div>
  );
}
