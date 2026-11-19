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
      {/* 상단 네비게이션: 뒤로가기 (각진 사각 링크) */}
      <div>
        <Link
          href="/#curriculum-section"
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#4E5C4E] hover:text-[#1E261E] font-medium transition-colors bg-white px-4 py-2 border border-[#D5DED5] hover:border-[#384E38]"
        >
          <span>←</span>
          <span>홈으로 (교육 체계 다이어그램)</span>
        </Link>
      </div>

      {/* 메인 상세 카드 (각진 모던 보더) */}
      <article className="bg-white p-6 sm:p-12 border border-[#D5DED5] space-y-8">
        {/* 헤더 영역 */}
        <header className="space-y-4 pb-6 border-b border-[#D5DED5]">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-semibold px-3 py-1 bg-[#EBF0EB] text-[#384E38] border border-[#D5DED5] uppercase tracking-wider">
              {data.tag}
            </span>
            <span className="text-xs text-[#768476] font-mono">
              CURRICULUM 0{currentIndex + 1}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#1E261E] tracking-tight">
            {data.title}
          </h1>
          <p className="text-xs sm:text-sm text-[#768476]">
            샬롬자유학교 교육 체계 상세 안내
          </p>
        </header>

        {/* 본문 설명 */}
        <section className="space-y-3">
          <h2 className="text-xs font-bold text-[#384E38] uppercase tracking-wider">
            핵심 내용 및 방향
          </h2>
          <p className="text-base sm:text-lg text-[#1E261E] leading-relaxed whitespace-pre-line">
            {data.desc}
          </p>
        </section>

        {/* 세부 활동 / 주요 실천 항목 (각진 태그) */}
        {data.items.length > 0 && (
          <section className="space-y-3 pt-6 border-t border-[#D5DED5]">
            <h2 className="text-xs font-bold text-[#384E38] uppercase tracking-wider">
              주요 배움 및 실천
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.items.map((item) => (
                <span
                  key={item}
                  className="text-xs sm:text-sm bg-[#F7F9F7] text-[#1E261E] border border-[#D5DED5] px-3.5 py-1.5 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* 연계 안내 박스 (각진 스타일) */}
        <div className="p-5 bg-[#EBF0EB] border border-[#D5DED5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-[#1E261E]">
              더 많은 학교생활 활동이 궁금하신가요?
            </h3>
            <p className="text-xs text-[#4E5C4E]">
              걷기 여행, 테마여행, 인턴십 등 5가지 대표 활동을 살펴보세요.
            </p>
          </div>
          <Link
            href="/school-life"
            className="px-4 py-2 bg-[#384E38] text-white text-xs font-semibold hover:bg-[#2D3F2D] transition-colors whitespace-nowrap border border-[#384E38]"
          >
            학교생활 보러가기 →
          </Link>
        </div>
      </article>

      {/* 이전 / 다음 항목 이동 네비게이션 (각진 박스) */}
      <nav className="grid grid-cols-2 gap-4">
        <Link
          href={`/curriculum/${prevItem.slug}`}
          className="bg-white p-4 sm:p-5 border border-[#D5DED5] hover:border-[#384E38] transition-all text-left space-y-1 group"
        >
          <span className="text-[11px] text-[#768476] block">← 이전</span>
          <span className="text-sm sm:text-base font-bold text-[#1E261E] group-hover:text-[#384E38] transition-colors block truncate">
            {prevItem.title}
          </span>
        </Link>

        <Link
          href={`/curriculum/${nextItem.slug}`}
          className="bg-white p-4 sm:p-5 border border-[#D5DED5] hover:border-[#384E38] transition-all text-right space-y-1 group"
        >
          <span className="text-[11px] text-[#768476] block">다음 →</span>
          <span className="text-sm sm:text-base font-bold text-[#1E261E] group-hover:text-[#384E38] transition-colors block truncate">
            {nextItem.title}
          </span>
        </Link>
      </nav>
    </div>
  );
}
