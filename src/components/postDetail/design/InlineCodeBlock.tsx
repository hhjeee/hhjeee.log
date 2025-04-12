import { ReactNode } from 'react';

const InlineCodeBlock = ({ children }: { children: ReactNode }) => {
  return <span className="bg-gray1 rounded w-fit px-1 py-0.5">{children}</span>;
};
export default InlineCodeBlock;
