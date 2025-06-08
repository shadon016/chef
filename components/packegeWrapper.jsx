"use client";
import React, { useState } from "react";
import CustomPackege from "./customPackege";
import AllPackege from "./allPackege";

const PackegeWrapper = () => {
  const [customPack, setCustomPack] = useState(false);
  return (
    <div>
      <div className="flex justify-end">
        <button onClick={() => setCustomPack((prev) => !prev)}>
          {customPack ? "প্যাকেজ" : "একটি প্যাকেজ তৈরি করুন"}
        </button>
      </div>

      <div className="">
        {customPack && <CustomPackege />}
        {!customPack && <AllPackege />}
      </div>
    </div>
  );
};

export default PackegeWrapper;
