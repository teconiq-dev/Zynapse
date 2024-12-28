import Image from "next/image";
import Link from "next/link";
import SigninButton from "./backend/signin";

export const Navbar = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-100 w-full z-10">
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
          <div className="mx-2 flex-1 px-2">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={150} height={350} />
            </Link>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal space-x-2">
              {/* Navbar menu content here */}
              <li>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                  <Link href="/">Home</Link>
                </button>
              </li>
              <li>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                  <Link href="/events">Events</Link>
                </button>
              </li>
              <li>
                <SigninButton />
              </li>
            </ul>
          </div>
        </div>

        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="bg-base-200 min-h-full w-64 p-4">
          <ul className="menu w-fit">
            {/* Sidebar content here */}
            <li>
              <SigninButton />
            </li>
            <li>
              <Link href="/events">
                <button className="btn sm:btn-md lg:btn-lg btn-primary">
                  Events
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
