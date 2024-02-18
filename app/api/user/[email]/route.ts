import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: { email: string } }
) {
  const { email } = params;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  return NextResponse.json(user);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { email: string } }
) {
  const { email } = params;
  let user = await req.json();

  user = await prisma.user.update({
    where: {
      email,
    },
    data: user,
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(user);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { email: string } }
) {
  const { email } = params;

  const user = await prisma.user.delete({
    where: { email },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(user);
}
