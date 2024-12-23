import QuizReportContextProvider from "./context/quizReportContextProvider";
import { Poppins, PT_Sans } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";
import type { Metadata } from "next";



// const poppins = Poppins({
//   weight: "300",
//   style: "normal",
//   subsets: ["latin"],
// })

const PTSans = PT_Sans({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "ArkConnection | Alok Awasthi",
  description: "Alok Awasthi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QuizReportContextProvider>
    <html lang="en">
      <body
        className={PTSans.className}
      >
        {children}
        <Toaster />
      </body>
    </html>
    
    </QuizReportContextProvider>
  );
}
