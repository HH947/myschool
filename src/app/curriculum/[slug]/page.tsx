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
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#465E46] hover:text-[#1D261D] font-medium transition-colors bg-white px-4 py-2 border border-[#D3E0D3] hover:border-[#4A6B4A]"
        >
          <span>←</span>
          <span>홈으로 (교육 체계 다이어그램)</span>
        </Link>
      </div>

      {/* 메인 상세 카드 */}
      <article className="bg-white p-6 sm:p-12 border border-[#D3E0D3] space-y-8">
        {/* 헤더 영역 */}
        <header className="space-y-4 pb-6 border-b border-[#D3E0D3]">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-semibold px-3 py-1 bg-[#EBF2EB] text-[#4A6B4A] border border-[#D3E0D3] uppercase tracking-wider">
              {data.tag}
            </span>
            <span className="text-xs text-[#6F826F] font-mono">
              CURRICULUM 0{currentIndex + 1}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#1D261D] tracking-tight">
            {data.title}
          </h1>
          <p className="text-xs sm:text-sm text-[#6F826F]">
            샬롬자유학교 교육 체계 상세 안내
          </p>
        </header>

        {/* 본문 설명 */}
        <section className="space-y-3">
          <h2 className="text-xs font-bold text-[#4A6B4A] uppercase tracking-wider">
            핵심 내용 및 방향
          </h2>
          <p className="text-base sm:text-lg text-[#1D261D] leading-relaxed whitespace-pre-line">
            {data.desc}
          </p>
        </section>

        {/* 세부 활동 / 주요 실천 항목 */}
        {data.items.length > 0 && (
          <section className="space-y-3 pt-6 border-t border-[#D3E0D3]">
            <h2 className="text-xs font-bold text-[#4A6B4A] uppercase tracking-wider">
              주요 배움 및 실천
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.items.map((item) => (
                <span
                  key={item}
                  className="text-xs sm:text-sm bg-[#F9FAF9] text-[#1D261D] border border-[#D3E0D3] px-3.5 py-1.5 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* 연계 안내 박스 */}
        <div className="p-5 bg-[#EBF2EB] border border-[#D3E0D3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-[#1D261D]">
              더 많은 학교생활 활동이 궁금하신가요?
            </h3>
            <p className="text-xs text-[#465E46]">
              걷기 여행, 테마여행, 인턴십 등 5가지 대표 활동을 살펴보세요.
            </p>
          </div>
          <Link
            href="/school-life"
            className="px-4 py-2 bg-[#4A6B4A] text-white text-xs font-semibold hover:bg-[#3B583B] transition-colors whitespace-nowrap border border-[#4A6B4A]"
          >
            학교생활 보러가기 →
          </Link>
        </div>
      </article>

      {/* 이전 / 다음 항목 이동 네비게이션 */}
      <nav className="grid grid-cols-2 gap-4">
        <Link
          href={`/curriculum/${prevItem.slug}`}
          className="bg-white p-4 sm:p-5 border border-[#D3E0D3] hover:border-[#4A6B4A] transition-all text-left space-y-1 group"
        >
          <span className="text-[11px] text-[#6F826F] block">← 이전</span>
          <span className="text-sm sm:text-base font-bold text-[#1D261D] group-hover:text-[#4A6B4A] transition-colors block truncate">
            {prevItem.title}
          </span>
        </Link>

        <Link
          href={`/curriculum/${nextItem.slug}`}
          className="bg-white p-4 sm:p-5 border border-[#D3E0D3] hover:border-[#4A6B4A] transition-all text-right space-y-1 group"
        >
          <span className="text-[11px] text-[#6F826F] block">다음 →</span>
          <span className="text-sm sm:text-base font-bold text-[#1D261D] group-hover:text-[#4A6B4A] transition-colors block truncate">
            {nextItem.title}
          </span>
        </Link>
      </nav>
    </div>
  );
}
