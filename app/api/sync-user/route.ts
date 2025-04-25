import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST () {
  const user = await currentUser();

  if (!user) return NextResponse.json({message: "Not authenticated"}, {status: 401})

  const existingUser = await db.user.findUnique({
    where: {
      clerUserId: user.id
    }
  })

  if (existingUser) return NextResponse.json({message: "User exists", user: existingUser});

  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
      email: user.emailAddresses[0].emailAddress,
      imageUrl: user.imageUrl,
    },
  })

  return NextResponse.json({message: "User created", user: newUser})
}