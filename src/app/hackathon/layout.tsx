import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hack'n Tech",
  description:
    "This event is a 30 hour Hackathon organized by Zynapse national level tech fest on February 1 and 2 of 2025.",
};

export default function HackathonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-background flex-col items-center justify-start w-full h-full min-h-screen pt-8">
      {children}
    </div>
  );
}
