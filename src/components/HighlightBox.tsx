import { ReactNode } from 'react';

import { StarIcon } from 'lucide-react';

const HighlightBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-2 bg-[#FAFAFA] pr-2 rounded-md">
      <div className="w-1.5 mr-2 rounded-l-md bg-[#FFD94D] h-auto"></div>
      <div className="font-semibold">{children}</div>
      <StarIcon size={28} className="mt-1 text-[#FFD94D] stroke-[2.5px]" />
    </div>
  );
};
export default HighlightBox;
