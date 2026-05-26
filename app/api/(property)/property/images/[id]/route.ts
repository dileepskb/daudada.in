import { prisma } from "@/lib/prisma"

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  try {

    const { id } = await params

    const images = await prisma.propertyImage.findMany({
      where: {
        propertyId: Number(id),
      },

      orderBy: {
        id: "desc",
      },
    })

    return Response.json(images)

  } catch (error) {

    return Response.json(
      {
        error: "Failed to fetch images",
      },
      { status: 500 }
    )
  }
}