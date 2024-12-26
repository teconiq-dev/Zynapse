import Image from "next/image";
import Link from "next/link";
import { SignInWithGoogle } from "./backend/google-signin";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-screen-5 backdrop-blur-lg shadow-md mx-7 flex max-lg:flex-col justify-between py-6 border-b border-white/60 pointer-events-auto">
      <div className="flex w-full justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={150} height={350} />
        </Link>
        <div className="flex gap-5">
          <Link href="/events" className="border-b">
            Events
          </Link>
          <SignInWithGoogle />
        </div>
      </div>
    </nav>
  );
};
