"use client";
import React, { useState } from "react";
import CustomPackege from "./customPackege";
import AllPackege from "./allPackege";
import Link from "next/link";

const PackegeWrapper = () => {
  const [customPack, setCustomPack] = useState(false);
  return (
    <div>
      <div className="flex justify-center py-12">
        <button
          className="px-12 py-2 bg-red-400"
          onClick={() => setCustomPack((prev) => !prev)}
        ></button>
      </div>
      <div className="">
        {customPack && <CustomPackege />}
        {!customPack && <AllPackege />}
      </div>
    </div>
  );
};

export default PackegeWrapper;
