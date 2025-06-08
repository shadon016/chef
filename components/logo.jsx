import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex justify-center items-center gap-2 shadow shadow-sm-gray-800 px-4 py-2 rounded-sm">
      <Image
        src="/cooking.png"
        height="100"
        width="100"
        alt="cooking"
        className="h-8 w-8 "
      />
      <h2 className="font-extrabold">আহার</h2>
    </div>
  );
};

export default Logo;
