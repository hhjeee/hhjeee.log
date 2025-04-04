import localFont from 'next/font/local';

import Header from '@/components/Header';

import './globals.css';

export const metadata = {
  metadataBase: new URL('https://hhjeee.com'),
  title: 'hhjeee.log',
  description:
    '개발을 통해 만난 도전과 배움, 그리고 여정을 기록하며 나만의 성장 이야기를 이어갑니다.',
  icons: '/favicon.ico',
};

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
      <body
        className={`${pretendard.className} h-full mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
