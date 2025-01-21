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
