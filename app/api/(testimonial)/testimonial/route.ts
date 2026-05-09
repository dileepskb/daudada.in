import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const testimonial = await prisma.testimonial.findMany({})
    return NextResponse.json(testimonial)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}