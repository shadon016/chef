import React from "react";
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";

const ItemCard = ({ img, price, item }) => {
  return (
    <div className="w-80 shadow shadow-black rounded-xl">
      <Image
        src={img}
        height={800}
        width={800}
        alt="pic"
        className="w-80 h-64 rounded-t-xl hover:scale-110 duration-[1s]"
      />
      <div className="p-4">
        <h3 className="py-2 flex justify-between items-center text-xl font-bold">
          {item?.name}{" "}
          <span className="bg-red-400 rounded-4xl px-4">{price}</span>
        </h3>

        <p className="flex items-center gap-2">
          <CircleCheckBig size="16" />
          {item?.one}
        </p>
        <p className="flex items-center gap-2">
          <CircleCheckBig size="16" />
          {item?.two}
        </p>
        <p className="flex items-center gap-2">
          <CircleCheckBig size="16" />
          {item?.three}
        </p>
        <p className="flex items-center gap-2">
          <CircleCheckBig size="16" />
          {item?.four}
        </p>
        <p className="py-2">{item?.description}</p>
      </div>
      <div className="p-4">
        <button className=" bg-red-400 py-2 w-full rounded-md">
          অর্ডার করুন
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
