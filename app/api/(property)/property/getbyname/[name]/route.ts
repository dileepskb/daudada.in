import { prisma } from "@/lib/prisma"

export async function GET(
  req: Request,
  { params }: { params: Promise<{ name: string }> }
) {

  const { name } = await params

  console.log(name)

  const property = await prisma.property.findFirst({
    where: {
      slug: decodeURIComponent(name),
    },

    include: {
      images:true,
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