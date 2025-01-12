export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-background z-10 flex-col items-center justify-start w-full h-full min-h-screen gap-10 bg-base-100 pt-20 md:pt-24 pb-5">
      {children}
    </div>
  );
}
