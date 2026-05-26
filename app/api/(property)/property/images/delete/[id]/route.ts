import { prisma } from "@/lib/prisma"

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params

    console.log(id)

    const deleteImage = await prisma.propertyImage.delete({
      where: { id: Number(id) }
    })

    return Response.json({
      success: true,
      data: deleteImage
    })

  } catch (error) {
    console.error("DELETE MARKSHEET ERROR:", error)

    return Response.json(
      { error: "Failed to delete marksheet" },
      { status: 500 }
    )
  }
}