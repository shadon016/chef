import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div className="wrapper flex my-16">
      <div className="flex-1">
        <div>
          <h2 className="text-3xl font-extrabold py-2">আহার</h2>
          <p>আমরা বিশ্বাস করি — ভালো খাবার শুধু পেট না, মনও ভরায়।</p>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} আহার. সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
      <div className="flex-1">
        <h2>সামাজিক যোগাযোগ মাধ্যম</h2>
        <div className="flex gap-4 py-4">
          <Facebook />
          <Instagram />
          <Youtube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
