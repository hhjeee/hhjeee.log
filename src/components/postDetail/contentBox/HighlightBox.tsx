import { ReactNode } from 'react';

const HighlightBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-4 bg-[#FFD94D] bg-opacity-5 pr-2 rounded-l-md">
      <div className="w-1.5 rounded-l-md bg-[#FFD94D] h-auto"></div>
      <div className="flex-1">{children}</div>
    </div>
  );
};
export default HighlightBox;
