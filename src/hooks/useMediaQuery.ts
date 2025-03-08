import { useEffect, useState } from 'react';

const useMediaQuery = (maxWidth: number) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);
    const handleChange = () => setMatches(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [maxWidth]);

  return matches;
};

export default useMediaQuery;
