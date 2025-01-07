'use client';

import React, { useEffect, useState } from 'react';
import { Heading } from '@/lib/rehypeExtractHeading';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const TableOfContents = ({ headings }: { headings: Heading[] }) => {
  const activeIds = useIntersectionObserver('h1, h2, h3');
  const [isBelowLg, setIsBelowLg] = useState(false);

  useEffect(() => {
    const updateIsBelowLg = () => {
      setIsBelowLg(window.innerWidth < 1024); // lg breakpoint 기준
    };

    updateIsBelowLg();
    window.addEventListener('resize', updateIsBelowLg);
    return () => window.removeEventListener('resize', updateIsBelowLg);
  }, []);

  const handleClick = (id: number) => {
    const element = document.getElementById(id.toString());
    if (element) {
      const offset = 80; // header 4rem + a
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
              isBelowLg ? 'text-base' : 'text-sm'
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
  return isBelowLg ? (
    <nav className="lg:hidden">
      {renderHeadings(headings)}
      <hr className="my-[1rem] h-0.5 bg-gray1" />
    </nav>
  ) : (
    <nav className="absolute top-0 left-full w-[200px] h-full hidden lg:block">
      <div className="sticky ml-6 top-20 overflow-visible">
        {renderHeadings(headings)}
      </div>
    </nav>
  );
};

export default TableOfContents;
