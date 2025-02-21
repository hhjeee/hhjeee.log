import { ReactNode } from 'react';

const ErrorBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-2 bg-[#FF3333] bg-opacity-10 pr-2 rounded-md">
      <div className="w-1.5 mr-2 rounded-l-md bg-[#FF3333] h-auto"></div>
      <div className="font-semibold">{children}</div>
    </div>
  );
};
export default ErrorBox;
