'use client';

import React from 'react';
import { Heading } from '@/lib/rehypeExtractHeading';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const SideTableOfContents = ({ headings }: { headings: Heading[] }) => {
  const activeIds = useIntersectionObserver('h1, h2, h3');

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

  return (
    <nav className="absolute top-0 left-full w-[200px] h-full hidden lg:block">
      <div className="sticky ml-6 top-20 overflow-visible">
        {headings.map((heading: Heading) => {
          const marginLeft = heading.level * 2;
          return (
            <p key={heading.id} className={`ml-${marginLeft} my-1`}>
              <button
                onClick={() => handleClick(heading.id)}
                className={`text-gray2 no-underline hover:font-semibold text-sm text-start ${
                  activeIds.includes(heading.id.toString())
                    ? 'text-primary font-semibold'
                    : ''
                }`}
              >
                {heading.text}
              </button>
            </p>
          );
        })}
      </div>
    </nav>
  );
};

export default SideTableOfContents;
