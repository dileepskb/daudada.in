import { prisma } from "@/lib/prisma"

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

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

  await prisma.property.update({
    where: {
      id: Number(id),
    },

    data: {
      title,
      description,
      price,
      location,
      propertyType,

      propertyCategory: {
        deleteMany: {},
        create: propertyCategory.map((item: string) => ({
          name: item,
        })),
      },

      specification: {
        deleteMany: {},

        create: specifications.map(
          ({ key, value }: { key: string; value: string }) => ({
            key,
            value,
          })
        ),
      },

      propertyAmenity: {
        deleteMany: {},
        create: amenities.map((id: number) => ({
          amenity: {
            connect: { id },
          },
        })),
      },
    },
  })

  return Response.json({
    success: true,
  })
}
