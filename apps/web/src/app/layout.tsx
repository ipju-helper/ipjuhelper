import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'IpJuHelper',
  description: '점검 플랫폼',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
