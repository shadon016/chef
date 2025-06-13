"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function SignupForm() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const username = formData.get("username");
      const email = formData.get("email");
      const password = formData.get("password");
      const phone = formData.get("phone");
      const address = formData.get("address");
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          phone,
          address,
        }),
      });
      res.status === 201 && router.push("/signin");
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <p>{error && error}</p>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="user name" name="username" />
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <input type="phone" placeholder="phone" name="phone" />
        <input type="adress" placeholder="address" name="address" />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          sign in
        </button>
      </form>
    </>
  );
}

export default SignupForm;
