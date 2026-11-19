import Link from "next/link";
import { notFound } from "next/navigation";
import {
  curriculumList,
  getCurriculumBySlug,
  type CurriculumData,
} from "@/data/curriculum";

export function generateStaticParams() {
  return curriculumList.map((item) => ({
    slug: item.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CurriculumDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const data: CurriculumData | undefined = getCurriculumBySlug(slug);

  if (!data) {
    notFound();
  }

  // 현재 노드의 인덱스와 이전/다음 항목
  const currentIndex = curriculumList.findIndex((item) => item.slug === slug);
  const prevItem =
    curriculumList[(currentIndex - 1 + curriculumList.length) % curriculumList.length];
  const nextItem =
    curriculumList[(currentIndex + 1) % curriculumList.length];

  return (
    <div className="max-w-3xl mx-auto space-y-10 sm:space-y-12 py-4">
      {/* 상단 네비게이션: 뒤로가기 */}
      <div>
        <Link
          href="/#curriculum-section"
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#7D7063] hover:text-[#E07048] font-medium transition-colors bg-white px-4 py-2 rounded-full border border-[#EFE7DE] shadow-2xs"
        >
          <span>←</span>
          <span>홈으로 (교육 체계 다이어그램)</span>
        </Link>
      </div>

      {/* 메인 상세 카드 */}
      <article className="bg-white rounded-3xl p-6 sm:p-12 border border-[#EFE7DE] shadow-xs space-y-8">
        {/* 헤더 영역 */}
        <header className="space-y-4 pb-6 border-b border-[#F5EEE6]">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-semibold px-3.5 py-1 rounded-full bg-[#FCEEE6] text-[#D4592E] border border-[#F6C5B2] uppercase">
              {data.tag}
            </span>
            <span className="text-3xl sm:text-4xl">{data.emoji}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2C2623] tracking-tight">
            {data.title}
          </h1>
          <p className="text-xs sm:text-sm text-[#8A7968]">
            샬롬자유학교 교육 체계 상세 안내
          </p>
        </header>

        {/* 본문 설명 */}
        <section className="space-y-4">
          <h2 className="text-sm font-bold text-[#D4592E] uppercase tracking-wider">
            핵심 내용 및 방향
          </h2>
          <p className="text-base sm:text-lg text-[#4A3E38] leading-relaxed whitespace-pre-line">
            {data.desc}
          </p>
        </section>

        {/* 세부 활동 / 주요 실천 항목 */}
        {data.items.length > 0 && (
          <section className="space-y-3 pt-4 border-t border-[#F8F4EE]">
            <h2 className="text-sm font-bold text-[#2C2623]">
              주요 배움 및 실천
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {data.items.map((item) => (
                <span
                  key={item}
                  className="text-xs sm:text-sm bg-[#FAF7F2] text-[#2C2623] border border-[#E8DDD1] px-4 py-2 rounded-2xl font-medium shadow-2xs"
                >
                  🌱 {item}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* 연계 안내 박스 */}
        <div className="p-5 rounded-2xl bg-[#FDF0E9] border border-[#F6C5B2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-[#2C2623]">
              더 많은 학교생활 활동이 궁금하신가요?
            </h3>
            <p className="text-xs text-[#5A4B43]">
              걷기 여행, 테마여행, 인턴십 등 5가지 대표 활동을 살펴보세요.
            </p>
          </div>
          <Link
            href="/school-life"
            className="px-4 py-2 rounded-xl bg-[#E07048] text-white text-xs font-semibold hover:bg-[#CF5E36] transition-colors whitespace-nowrap"
          >
            학교생활 보러가기 🎒
          </Link>
        </div>
      </article>

      {/* 이전 / 다음 항목 이동 네비게이션 */}
      <nav className="grid grid-cols-2 gap-4">
        <Link
          href={`/curriculum/${prevItem.slug}`}
          className="bg-white p-4 sm:p-5 rounded-2xl border border-[#EFE7DE] shadow-2xs hover:border-[#E07048] hover:shadow-xs transition-all text-left space-y-1 group"
        >
          <span className="text-[11px] text-[#8A7968] block">← 이전</span>
          <span className="text-sm sm:text-base font-bold text-[#2C2623] group-hover:text-[#E07048] transition-colors block truncate">
            {prevItem.title}
          </span>
        </Link>

        <Link
          href={`/curriculum/${nextItem.slug}`}
          className="bg-white p-4 sm:p-5 rounded-2xl border border-[#EFE7DE] shadow-2xs hover:border-[#E07048] hover:shadow-xs transition-all text-right space-y-1 group"
        >
          <span className="text-[11px] text-[#8A7968] block">다음 →</span>
          <span className="text-sm sm:text-base font-bold text-[#2C2623] group-hover:text-[#E07048] transition-colors block truncate">
            {nextItem.title}
          </span>
        </Link>
      </nav>
    </div>
  );
}
