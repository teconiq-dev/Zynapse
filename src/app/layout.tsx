import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Audiowide, Exo_2, Gugi, Monoton } from "next/font/google";
import UserProvider from "@/components/context/userContext";

const audioWide = Audiowide({
  variable: "--font-audiowide",
  weight: "400",
  subsets: ["latin"],
});
const exo2 = Exo_2({ variable: "--font-exo-2", subsets: ["latin"] });
const gugi = Gugi({
  variable: "--font-gugi",
  weight: "400",
  subsets: ["latin"],
});
const monoton = Monoton({
  variable: "--font-monoton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Zynapse",
  description: "Tech fest BMC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${audioWide.variable} ${exo2.variable} ${gugi.variable} ${monoton.variable} font-gugi antialiased scroll-smooth`}
      >
        <div className="h-auto min-h-screen relative w-full overflow-hidden flex flex-col items-center justify-start rounded-lg">
          <div className="absolute inset-0 w-full h-screen bg-slate-900 z-0 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <UserProvider>
            <Navbar>{children}</Navbar>
          </UserProvider>
        </div>
      </body>
    </html>
  );
}
