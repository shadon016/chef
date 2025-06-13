import { User } from "@/models/schemas/userSchema";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/config/mongo.js";

export const POST = async (request) => {
  const { username, email, password, phone, address } = await request.json();
  await dbConnect();

  const hashedPassword = await bcrypt.hash(password, 5);

  try {
    await User.create({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
    });
    return new NextResponse("user has been created", {
      status: 201,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
