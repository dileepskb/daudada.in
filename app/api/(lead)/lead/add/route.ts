import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {

  try {

    const body = await req.json()

    const {
      data
    } = body

    console.log("dileep----------------", data)

    const lead = await prisma.lead.create({
      data: {...data,  createdById: 1,},
      include: {
        department: true,
        createdBy: true,
        assignedTo: true,
      },
    })

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