import { ReactNode } from 'react';

import { TriangleAlertIcon } from 'lucide-react';

const ErrorBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-2 bg-[#FAFAFA] pr-2 rounded-md">
      <div className="w-1.5 mr-2 rounded-l-md bg-[#FF3333] h-auto"></div>
      <div className="font-semibold">{children}</div>
      <TriangleAlertIcon
        size={28}
        className="mt-1 text-[#FF3333] stroke-[2.5px]"
      />
    </div>
  );
};
export default ErrorBox;
