export default function EventsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex z-10 flex-col items-center justify-start w-full h-full gap-10">
      {children}
    </div>
  );
}
