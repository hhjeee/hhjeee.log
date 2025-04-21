import { ReactNode } from 'react';

const ErrorBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-4 bg-[#FF3333] bg-opacity-5 pr-2 rounded-l-md">
      <div className="w-1.5 rounded-l-md bg-[#FF3333] bg-opacity-90 h-auto"></div>
      <div className="flex-1">{children}</div>
    </div>
  );
};
export default ErrorBox;
