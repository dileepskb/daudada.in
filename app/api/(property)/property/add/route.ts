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
      specifications,
      amenities,
      propertyCategory,
    } = body

    console.log(description)

    const property = await prisma.property.create({
      data: {
        title,
        description,
        price,
        location,
        propertyType,

        createdById: 1, // ✅ correct field
        propertyCategory: {
          create: propertyCategory.map((item: string) => ({
            name: item,
          })),
        },
        specification: {
          create: specifications,
        },

        propertyAmenity: {
          create: amenities.map((id: number) => ({
            amenity: {
              connect: { id },
            },
          })),
        },
      },
    })

    return NextResponse.json(property)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
