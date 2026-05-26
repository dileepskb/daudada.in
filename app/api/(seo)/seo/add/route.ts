import { prisma } from "@/lib/prisma"

export async function POST(
  req: Request
) {

  try {

    const body = await req.json()

    const { data } = body


    const seo = await prisma.seo.create({
      data,
    })

    return Response.json({
      success: true,
      data: seo,
    })

  } catch (error) {

    console.log(error)

    return Response.json(
      {
        success: false,
        error: "Failed to create SEO",
      },
      {
        status: 500,
      }
    )
  }
}