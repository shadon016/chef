"use server";

import { signIn, signOut } from "@/auth.js";
import { redirect } from "next/navigation";

export const login = async (formData) => {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const logout = async () => {
  const signout = await signOut();
  if (signout) {
    redirect("/signin");
  }
};
