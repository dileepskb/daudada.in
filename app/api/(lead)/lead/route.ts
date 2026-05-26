import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {

  try {

    const lead = await prisma.lead.findMany({})

    return Response.json({
      success: true,
      data: lead,
    })

  } catch (error) {

    console.log("CREATE LEAD ERROR:", error)

    return Response.json(
      {
        success: false,
        error: "Failed to create lead",
      },
      {
        status: 500,
      }
    )
  }
}