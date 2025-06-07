import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-100 h-20 backdrop-blur bg-black/30">
      <div className="h-full flex justify-between items-center wrapper">
        <div>
          <h2>logo</h2>
        </div>
        <ul className="hidden lg:flex gap-6 ">
          <div>
            <Link href="/">home</Link>
          </div>
          <div>
            <Link href="/">home</Link>
          </div>
          <div>
            <Link href="/">home</Link>
          </div>
          <div>
            <Link href="/">home</Link>
          </div>
        </ul>
        <div className="lg:hidden">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
