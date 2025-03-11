import localFont from 'next/font/local';

import Header from '@/components/Header';

import './globals.css';

export const metadata = {
  metadataBase: new URL('https://hhjeee-log.vercel.app'),
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
      <body className={`${pretendard.className} h-full`}>
        <Header />
        <div className="pt-[3.5rem] h-full">{children}</div>
      </body>
    </html>
  );
}
