import { ReactNode } from 'react';

const HighlightBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-2 bg-[#FFD94D] bg-opacity-5 pr-2 rounded-md">
      <div className="w-1.5 mr-2 rounded-l-md bg-[#FFD94D] h-auto"></div>
      <div className="font-semibold">{children}</div>
    </div>
  );
};
export default HighlightBox;
