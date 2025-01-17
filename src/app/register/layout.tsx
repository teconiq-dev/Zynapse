import Image from "next/image";

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full min-h-screen bg-background py-20 px-2 md:px-6 lg:px-14">
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/register_bg.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality="100"
        />
      </div>
      {children}
    </div>
  );
}
