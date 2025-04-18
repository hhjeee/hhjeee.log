'use client';

import { Heading } from '@/lib/rehypeExtractHeading';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import useMediaQuery from '@/hooks/useMediaQuery';

const TableOfContents = ({ headings }: { headings: Heading[] }) => {
  const activeIds = useIntersectionObserver('h1, h2, h3');
  const isBelowXL = useMediaQuery(1280);

  const handleClick = (id: number) => {
    const element = document.getElementById(id.toString());
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const renderHeadings = (headings: Heading[]) =>
    headings.map((heading) => {
      const marginLeft = heading.level * 2;
      return (
        <p key={heading.id} className={`ml-${marginLeft} my-1`}>
          <button
            onClick={() => handleClick(heading.id)}
            className={`text-gray2 no-underline hover:font-semibold ${
              isBelowXL ? 'text-base' : 'text-sm'
            } text-start ${
              activeIds.includes(heading.id.toString())
                ? 'text-primary font-semibold'
                : ''
            }`}
          >
            {heading.text}
          </button>
        </p>
      );
    });

  if (headings.length === 0) return null;
  return isBelowXL ? (
    <nav className="xl:hidden">
      {renderHeadings(headings)}
      <hr className="my-[1rem] h-0.5 bg-gray1" />
    </nav>
  ) : (
    <nav className="absolute top-0 left-full w-[30%] h-full hidden xl:block">
      <div className="sticky ml-6 top-20 overflow-visible">
        {renderHeadings(headings)}
      </div>
    </nav>
  );
};

export default TableOfContents;
