import React, { useState, useEffect } from "react";
import {
  banglaToEnglishNumber,
  EnglishNumberToBangla,
} from "@/utils/numberConversion.js";

const foodMenu = [
  {
    name: "সাদা ভাত",
    type: "মূল খাবার",
    price: "৩০ টাকা",
    available: true,
    quantity: 0,
  },
  {
    name: "মুগ ডাল",
    type: "ডাল",
    price: "২৫ টাকা",
    available: true,
    quantity: 0,
  },
  {
    name: "আলু ভর্তা",
    type: "ভর্তা",
    price: "২০ টাকা",
    available: true,
    quantity: 0,
  },
  {
    name: "শাক ভাজি",
    type: "তরকারি",
    price: "৩০ টাকা",
    available: true,
    quantity: 0,
  },
  {
    name: "রুই মাছ ভাজি",
    type: "মাছ",
    price: "৬০ টাকা",
    available: false,
    quantity: 0,
  },
  {
    name: "চিকেন কারি",
    type: "মাংস",
    price: "১০০ টাকা",
    available: true,
    quantity: 0,
  },
  {
    name: "মাটন কারি",
    type: "মাংস",
    price: "১৪০ টাকা",
    available: false,
    quantity: 0,
  },
  {
    name: "ডিম কারি",
    type: "প্রোটিন",
    price: "৪০ টাকা",
    available: true,
    quantity: 0,
  },
  {
    name: "চাটনি",
    type: "সাইড",
    price: "১০ টাকা",
    available: true,
    quantity: 0,
  },
  {
    name: "পানি",
    type: "ড্রিংক",
    price: "১৫ টাকা",
    available: true,
    quantity: 0,
  },
];

const CustomPackege = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);

  const increment = (item) => {
    setQuantity((item.quantity += 1));
  };
  const decrement = (item) => {
    setQuantity((item.quantity = item?.quantity - 1));
  };

  const addToPackage = (item) => {
    setSelectedItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name);
      if (existingItem) {
        return prevItems.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const totalPrice = selectedItems.reduce((total, item) => {
    const itemPrice = banglaToEnglishNumber(String(item.price)).split(" ")[0]; // Extract numeric value from price
    return total + itemPrice * item.quantity;
  }, 0);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1 flex flex-wrap gap-6">
        {foodMenu?.map((item, index) => (
          <div key={index} className="p-4 shadow-2xl shadow-gray-800 w-32">
            <p>{item?.name}</p>
            <p>{item?.price}</p>
            <button onClick={() => addToPackage(item)}>যোগ করুন</button>
          </div>
        ))}
      </div>
      <div className="flex-1">
        <p>pacakger goes here</p>
        {selectedItems?.map((item, index) => (
          <div key={index} className="flex justify-between">
            {item?.quantity > 0 && (
              <div className="flex gap-4">
                <p>{item?.name}</p>
                <p>{EnglishNumberToBangla(String(item?.quantity))}</p>
                <p>{item?.price}</p>
                <div>
                  <hr />
                  <p>{EnglishNumberToBangla(String(totalPrice))}</p>
                </div>
              </div>
            )}
            {item?.quantity > 0 && (
              <div>
                <button
                  onClick={() => {
                    increment(item);
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    decrement(item);
                  }}
                >
                  -
                </button>
                <button>d</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomPackege;
