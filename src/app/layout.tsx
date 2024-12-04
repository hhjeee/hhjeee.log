// TODO metadata 수정
// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

import "./globals.css";
import Header from "@/components/Header";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <Header />
        <div className="pt-[4rem]">{children}</div>
      </body>
    </html>
  );
}
