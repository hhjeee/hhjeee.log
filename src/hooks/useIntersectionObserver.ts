'use client';

import { useEffect, useState } from 'react';

export const useIntersectionObserver = (selector: string) => {
  const [activeIds, setActiveIds] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIds((prev) => [...prev, entry.target.id]);
          } else {
            setActiveIds((prev) => prev.filter((id) => id !== entry.target.id));
          }
        });
      },
      { rootMargin: '-64px 0px' }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [selector]);

  return activeIds;
};
