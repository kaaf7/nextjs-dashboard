import '@/app/ui/global.css';
import { notinoSans } from '@/app/ui/fonts';
import SideNav from '@/app/ui/dashboard/sidenav';

export default function RootLayout({children}: {children: React.ReactNode;}) 
{
  return (
    <html lang="en">
      <body className={`${notinoSans.className} antialiased`}>{children}</body>
    </html>
  );
}
