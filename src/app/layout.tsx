// TODO metadata 수정
// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }
import localFont from 'next/font/local';

import Header from '@/components/Header';

import './globals.css';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={`${pretendard.className} h-full`}>
        <Header />
        <div className="pt-[4rem] h-full scrollbar overflow-y-scroll">
          {children}
        </div>
      </body>
    </html>
  );
}
