import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Logo from "./logo.jsx";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-100 h-20 backdrop-blur bg-black/30">
      <div className="h-full flex justify-between items-center wrapper">
        <div>
          <Logo />
        </div>
        <ul className="hidden lg:flex gap-6 ">
          <div>
            <Link href="/">হোম</Link>
          </div>
          <div>
            <Link href="/">সার্ভিস</Link>
          </div>
          <div>
            <Link href="/packages">সকল প্যাকেজ</Link>
          </div>
          <div>
            <Link href="/">আমাদের সম্পর্কে</Link>
          </div>
          <div>
            <Link href="/">সাধারণ জিজ্ঞাসা</Link>
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
