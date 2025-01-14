export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-background z-10 flex-col items-center justify-start w-full h-full min-h-screen gap-10 bg-base-100 py-20 md:py-24">
      {children}
    </div>
  );
}
