import '@/app/ui/global.css';
import { notinoSans } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notinoSans.className} antialiased`}>{children}</body>
    </html>
  );
}
