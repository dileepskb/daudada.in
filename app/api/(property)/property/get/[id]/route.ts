import { prisma } from "@/lib/prisma"

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  const { id } = await params

  const property = await prisma.property.findUnique({
    where: {
      id: Number(id),
    },

    include: {
      propertyCategory: true,
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