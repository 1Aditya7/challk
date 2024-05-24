

import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
import { NextRequest } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import User from "../../../../../models/user";


export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { name, email, password } = await req.json();
    // const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ name, email, password});

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}