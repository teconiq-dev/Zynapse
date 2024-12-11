import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="relative z-50 mx-7 flex max-lg:flex-col justify-between py-6 border-b border-white/60 pointer-events-auto">
      <Image src="/logo.png" alt="logo" width={150} height={350} />
    </header>
  );
};
