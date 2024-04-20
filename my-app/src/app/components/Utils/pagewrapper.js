"use client"
import {ThemeProvider} from "next-themes"
import {NextUIProvider} from "@nextui-org/system";
import Header from "@/app/components/Header/header"
import Footer from "@/app/components/Footer/footer"
export default function PageWrapper({children}) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
     <ThemeProvider>
       <Header />
       {children}
       <Footer />
     </ThemeProvider>
    </NextUIProvider>
  );
}