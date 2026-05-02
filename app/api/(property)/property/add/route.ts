import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      title,
      description,
      price,
      location,
      propertyType,
      status,
    } = body

    const property = await prisma.property.create({
      data: {
        title,
        description,
        price:Number(price),
        location,
        propertyType,
        status,
        createdById: 1, // ⚠️ replace with auth user
      },
    })

    return NextResponse.json(property)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}