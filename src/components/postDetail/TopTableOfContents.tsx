'use client';

import React from 'react';
import { Heading } from '@/lib/rehypeExtractHeading';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const TopTableOfContents = ({ headings }: { headings: Heading[] }) => {
  const activeIds = useIntersectionObserver('h1, h2, h3');

  const handleClick = (id: number) => {
    const element = document.getElementById(id.toString());
    if (element) {
      const offset = 64; // header 4rem
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (headings.length === 0) return null;
  return (
    <nav className="lg:hidden xl:hidden">
      {headings.map((heading: Heading) => {
        const marginLeft = heading.level * 2;
        return (
          <p
            key={heading.id}
            className={`ml-${marginLeft} my-1.5 pl-2 border-l-4 ${
              activeIds.includes(heading.id.toString())
                ? 'border-primary text-gray3 font-semibold'
                : 'border-transparent'
            }`}
          >
            <button
              onClick={() => handleClick(heading.id)}
              className="text-gray2 no-underline hover:font-semibold text-base text-start"
            >
              {heading.text}
            </button>
          </p>
        );
      })}
      <hr className="my-[1rem] h-0.5 bg-gray1" />
    </nav>
  );
};

export default TopTableOfContents;
