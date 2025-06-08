import React from "react";
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import ItemCard from "./itemCard";

const Services = () => {
  return (
    <div className="py-8 wrapper">
      <h2 className="heading py-12">আমাদের সার্ভিসসমূহ</h2>
      <div className="flex gap-4 lg:gap-12 flex-wrap justify-center wrapper">
        <ItemCard
          img={"/fish.jpeg"}
          price={"১৫০ টাকা"}
          item={{
            name: "ঘরোয়া স্বাদ",
            description:
              "সুস্বাদু আর হালকা ঘরোয়া খাবার, যা আপনি সহজেই দুপুরে উপভোগ করতে পারবেন।",
            one: "ভাত",
            two: "ডাল",
            three: "দেশি মাছ (ঝোল)",
            four: "সবজি",
          }}
        />
        <ItemCard
          img={"/Chicken.jpg"}
          price={"২২০ টাকা"}
          item={{
            name: "মাংসের স্বাদ",
            description:
              "ঘরোয়ার স্বাদে মুরগির ঝোল, প্রতিদিনের খাবারে যোগ করে প্রাণ।",
            one: "ভাত",
            two: "ডাল",
            three: "মুরগির ঝোল",
            four: "সবজি",
          }}
        />
        <ItemCard
          img={"/mutton.jpg"}
          price={"৩২০ টাকা"}
          item={{
            name: "খাসি স্পেশাল",
            description:
              "বিশেষ দিনে একটু ভিন্ন স্বাদের জন্য এই প্যাকেজটি বেস্ট।",
            one: "ভাত",
            two: "ডাল",
            three: "খাসির মাংস ",
            four: "সবজি",
          }}
        />
      </div>
      <div className="flex justify-center py-8">
        <p className=" w-fit px-8 bg-red-400 py-2 rounded-xl">
          সকল প্যাকেজসমূহ
        </p>
      </div>
    </div>
  );
};

export default Services;
