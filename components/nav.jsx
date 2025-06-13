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
            <Link href="/#home">হোম</Link>
          </div>

          <div>
            <Link href="/packages">সকল প্যাকেজ</Link>
          </div>
          <div>
            <Link href="/customPack">একটি প্যাকেজ তৈরি করুন</Link>
          </div>

          <div>
            <Link href="/signin">লগইন</Link>
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
