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
    } = body

    const property = await prisma.property.create({
      data: {
        title,
        description,
        price,
        location,
        propertyType,

        createdById: 1, // ✅ correct field

        specification: {
          create: specifications,
        },

        propertyAmenity: {
          create: amenities.map((id: number) => ({
            amenity: {
              connectOrCreate: {
                where: { id }, // ⚠️ works only if id known
                create: {
                  name: `Amenity-${id}`,
                },
              },
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
