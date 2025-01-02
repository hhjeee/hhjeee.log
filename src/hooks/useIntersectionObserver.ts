import { useEffect, useState } from 'react';

export const useIntersectionObserver = (selector: string) => {
  const [activeIds, setActiveIds] = useState<string[]>([]);
  const [lastActiveId, setLastActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visibleIds: string[] = [];

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleIds.push(entry.target.id);
        }
      });

      if (visibleIds.length > 0) {
        setActiveIds(visibleIds);
        setLastActiveId(visibleIds[visibleIds.length - 1]);
      } else if (lastActiveId) {
        setActiveIds([lastActiveId]);
      }
    });

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.observe(el));
    };
  }, [selector, lastActiveId]);

  return activeIds;
};
