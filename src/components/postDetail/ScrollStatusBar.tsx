'use client';

import React, { useEffect, useState } from 'react';

const ScrollStatusBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const updateScrollStatus = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollPercentage(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollStatus);
    return () => {
      window.removeEventListener('scroll', updateScrollStatus);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray1 z-50">
      <div
        className="h-full bg-primary"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default ScrollStatusBar;
