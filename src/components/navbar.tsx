"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SigninButton from "./backend/signin";
import ScrollProgress from "@/components/ui/scroll-progress";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full z-50 fixed top-0">
          <ScrollProgress className="top-[70px] md:top-[80px]" />
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 justify-between px-2">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={40} height={40} />
            </Link>
            <div className="inline-block lg:hidden">
              <SigninButton />
            </div>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal space-x-2">
              <li>
                <Link href="/" className="p-0">
                  <button
                    className={`btn btn-xs btn-link sm:btn-sm md:btn-md ${pathname === "/" && "btn-disabled"}`}
                  >
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/hackathon" className="p-0">
                  <button
                    className={`btn btn-xs btn-link sm:btn-sm md:btn-md ${pathname === "/hackathon" && "btn-disabled"}`}
                  >
                    Hackathon
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/competitions" className="p-0">
                  <button
                    className={`btn btn-xs btn-link sm:btn-sm md:btn-md ${pathname === "/competitions" && "btn-disabled"}`}
                  >
                    Competitions
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="p-0">
                  <button
                    className={`btn btn-xs btn-link sm:btn-sm md:btn-md ${pathname === "/workshops" && "btn-disabled"}`}
                  >
                    Workshops
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/register" className="p-0">
                  <button className="btn btn-xs btn-link sm:btn-sm md:btn-md">
                    Register
                  </button>
                </Link>
              </li>
              <SigninButton />
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="bg-base-200 min-h-full w-56 p-4 flex items-start justify-center">
          <ul className="menu w-full space-y-2">
            {/* Sidebar content here */}
            <li>
              <Link href="/">
                <button
                  className="btn btn-outline sm:btn-md lg:btn-lg w-40"
                  onClick={() =>
                    ((
                      document.getElementById("my-drawer-3") as HTMLInputElement
                    ).checked = false)
                  }
                >
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link href="/hackathon">
                <button
                  className="btn btn-outline sm:btn-md lg:btn-lg w-40"
                  onClick={() =>
                    ((
                      document.getElementById("my-drawer-3") as HTMLInputElement
                    ).checked = false)
                  }
                >
                  Hackathon
                </button>
              </Link>
            </li>
            <li>
              <Link href="/competitions">
                <button
                  className="btn btn-outline sm:btn-md lg:btn-lg w-40"
                  onClick={() =>
                    ((
                      document.getElementById("my-drawer-3") as HTMLInputElement
                    ).checked = false)
                  }
                >
                  Competitions
                </button>
              </Link>
            </li>
            <li>
              <Link href="/workshops">
                <button
                  className="btn btn-outline sm:btn-md lg:btn-lg w-40"
                  onClick={() =>
                    ((
                      document.getElementById("my-drawer-3") as HTMLInputElement
                    ).checked = false)
                  }
                >
                  Workshops
                </button>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <button
                  className="btn btn-outline sm:btn-md lg:btn-lg w-40"
                  onClick={() =>
                    ((
                      document.getElementById("my-drawer-3") as HTMLInputElement
                    ).checked = false)
                  }
                >
                  Register
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
