import { prisma } from "@/lib/prisma"

export async function POST(
  req: Request 
) {



  const property = await prisma.property.findMany({
    // where: {
    //   id: Number(id),
    // },

    include: {
      propertyCategory: true,
      images:true,
      propertyAmenity: {
        include: {
          amenity: true,
        },
      },
      specification: true,
    },
  })

  return Response.json(property)
}