"use client";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { login } from "@/actions/index.js";

function LoginForm() {
  const [error, setError] = useState();
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await login(formData);
      if (!!response.error) {
        setError(response.error);
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      setError({
        message:
          "ইমেইল অথবা পাসওয়ার্ড সঠিক নয়। অনুগ্রহ করে আবার চেষ্টা করুন।",
      });
    }
  }
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center">
        {error && <p className="text-red-500">{error.message}</p>}
        <form
          className="max-w-xl mx-auto  p-6 rounded-lg shadow-md"
          onSubmit={onSubmit}
        >
          <h2 className="text-xl font-bold mb-6 px-6 text-white">
            একাউন্টে প্রবেশ করুন
          </h2>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              ইমেইল
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            প্রবেশ করুন
          </button>
        </form>
        <Link href="/signup">নতুন একাউন্ট তৈরি করুন</Link>
      </div>
    </>
  );
}

export default LoginForm;
