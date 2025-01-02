'use client';

import React, { useEffect, useState } from 'react';
import { Heading } from '@/lib/rehypeExtractHeading';

const TableOfContents = ({ headings }: { headings: Heading[] }) => {
  const [activeIds, setActiveIds] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setActiveIds((prev) => [...new Set([...prev, id])]);
          } else {
            setActiveIds((prev) => prev.filter((activeId) => activeId !== id));
          }
        });
      },
      {
        rootMargin: '0px 0px -20% 0px', //TODO 세부 조정
        threshold: 0.5,
      }
    );

    const elements = document.querySelectorAll('h1, h2, h3');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // const handleClick = (id: number) => {
  //   document
  //     .getElementById(id.toString())
  //     ?.scrollIntoView({ behavior: 'smooth' });
  // };

  const handleClick = (id: number) => {
    const element = document.getElementById(id.toString());
    if (element) {
      const offset = 80; // TODO 헤더 높이 맞춰 조정
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
