export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full bg-background py-14 px-2 md:px-6 lg:px-14">
      {children}
    </div>
  );
}
