import React from "react";
import { CircleCheck } from "lucide-react";
const Hero = () => {
  return (
    <div
      className="bg-[url('/hero.jpg')] h-[calc(100vh-80px)] bg-cover flex justify-center items-center"
      id="home"
    >
      <div className="backdrop-blur bg-black/30 flex flex-col items-center justify-center rounded-2xl text-center py-6  lg:p-12">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold md:leading-20 md:px-12">
          বাড়ির বাইরেও উপভোগ করুন
        </h1>
        <h2 className="text-xl md:text-3xl font-bold py-4">
          ঘরোয়া রান্নার স্বাদ
        </h2>
        <div className="flex flex-col gap-2 text-justify px-4">
          <p className="flex gap-2 items-center">
            <span>
              <CircleCheck size={16} />
            </span>
            উৎকৃষ্ট মানের কাঁচামাল ব্যবহার
          </p>
          <p className="flex gap-2 items-center">
            <span>
              <CircleCheck size={16} />
            </span>
            অভিজ্ঞ রাঁধুনি এবং পরিষ্কার পরিচ্ছন্ন পরিবেশ
          </p>
          <p className="flex gap-2 items-center">
            <span>
              <CircleCheck size={16} />
            </span>
            স্বাস্থ্যসম্মত তেল এবং উন্নত মানের মসলা ব্যবহার
          </p>
        </div>
        <p className="mt-8 bg-red-400 px-12 py-4 rounded-2xl">অর্ডার করুন</p>
      </div>
    </div>
  );
};

export default Hero;
