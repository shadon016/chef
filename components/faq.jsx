"use client";

import React from "react";

const Faq = () => {
  return (
    <div>
      <div className="w-full lg:w-[80%] mx-auto wrapper">
        <h2 className="heading py-12">সাধারণ জিজ্ঞাসা</h2>
        <div className="space-y-4">
          {[
            {
              question: "আপনারা কী ধরণের খাবার সরবরাহ করেন?",
              answer:
                "আমরা ঘরোয়া স্বাদের রান্না করা ভাত, তরকারি, মাছ, মাংস, ডাল, ভর্তা ইত্যাদি সরবরাহ করি। আমাদের মেনু প্রতিদিন পরিবর্তন হয়।",
            },

            {
              question: "অর্ডার দেওয়ার সময়সীমা কতটা আগে?",
              answer:
                "আমাদের সাধারণত অর্ডারের ৩–৪ ঘণ্টা আগে জানতে হবে। তবে লাঞ্চ বা ডিনারের জন্য সকালে অর্ডার করাই উত্তম।",
            },
            {
              question: "আপনারা কোন কোন এলাকায় ডেলিভারি দেন?",
              answer:
                "আমরা বর্তমানে [আপনার এলাকা লিখুন] সহ আশেপাশের এলাকাগুলোতে হোম ডেলিভারি দিচ্ছি।",
            },

            {
              question: "কি পেমেন্ট অপশন আছে?",
              answer:
                "আমরা নগদ টাকা (Cash on Delivery), বিকাশ/নগদ এবং অনলাইন পেমেন্ট গ্রহণ করি।",
            },

            {
              question: "কাস্টম মেনু বা পার্সোনালাইজড অর্ডার নেওয়া হয় কি?",
              answer:
                "হ্যাঁ, নির্দিষ্ট পরিমাণ বা রেগুলার কাস্টমারের জন্য আমরা পার্সোনাল মেনু তৈরি করি।",
            },
          ].map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                className="w-full flex justify-between items-center p-4 text-left text-lg font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
                onClick={(e) => {
                  const content = e.currentTarget.nextElementSibling;
                  content.style.maxHeight
                    ? (content.style.maxHeight = null)
                    : (content.style.maxHeight = content.scrollHeight + "px");
                }}
              >
                {faq.question}
                <span className="ml-2 text-gray-500">+</span>
              </button>
              <div
                className="overflow-hidden max-h-0 transition-all duration-300 ease-in-out"
                style={{ maxHeight: 0 }}
              >
                <p className="p-4 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
