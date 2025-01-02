'use client';

import React from 'react';
import { Heading } from '@/lib/rehypeExtractHeading';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const TableOfContents = ({ headings }: { headings: Heading[] }) => {
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

  return (
    <nav className="absolute top-0 left-full w-[200px] h-full hidden lg:block">
      <div className="sticky ml-6 top-20">
        {headings.map((heading) => (
          <p
            key={heading.id}
            className={`ml-${heading.level * 2} my-1 pl-2 border-l-4 ${
              activeIds.includes(heading.id.toString())
                ? 'border-primary text-darkGray font-semibold'
                : 'border-transparent'
            }`}
          >
            <button
              onClick={() => handleClick(heading.id)}
              className="text-lightGray no-underline hover:font-semibold text-sm text-start"
            >
              {heading.text}
            </button>
          </p>
        ))}
      </div>
    </nav>
  );
};

export default TableOfContents;
