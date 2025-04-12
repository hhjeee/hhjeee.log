import { ReactNode } from 'react';

const InlineCodeBlock = ({ children }: { children: ReactNode }) => {
  return (
    <span className="bg-gray1 rounded w-fit p-1 font-medium">{children}</span>
  );
};
export default InlineCodeBlock;
