
import "./globals.css";
import { Roboto } from "next/font/google";
import PageWrapper from '@/app/components/Utils/pagewrapper';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: ['--font-roboto'],
  display: 'swap',
})


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
          <PageWrapper>{children}</PageWrapper>
          </body>
    </html>
  );
}
