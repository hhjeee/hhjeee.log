import { ReactNode } from 'react';

const Highlighter = ({
  children,
  color,
}: {
  children: ReactNode;
  color?: string;
}) => {
  return (
    <span style={{ backgroundColor: color || '#fff5b1' }}>{children}</span>
  );
};
export default Highlighter;
