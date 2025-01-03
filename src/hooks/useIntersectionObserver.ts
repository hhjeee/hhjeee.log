'use client';

import { useEffect, useState } from 'react';

export const useIntersectionObserver = (selector: string) => {
  const [activeIds, setActiveIds] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleIds: string[] = [];

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleIds.push(entry.target.id);
          }
        });

        if (visibleIds.length > 0) {
          setActiveIds(visibleIds);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.5 }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [selector]);

  return activeIds;
};
