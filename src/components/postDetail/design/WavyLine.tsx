import { ReactNode } from 'react';

const WavyLine = ({
  children,
  color,
}: {
  children: ReactNode;
  color?: string;
}) => {
  return (
    <span
      style={{
        textDecorationLine: 'underline',
        textDecorationStyle: 'wavy',
        textDecorationColor: color || '#48D1CC',
      }}
    >
      {children}
    </span>
  );
};
export default WavyLine;
