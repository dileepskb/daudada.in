import { prisma } from "@/lib/prisma"
import { writeFile } from "fs/promises"
import path from "path"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const propertyId = formData.get("propertyId")

    const images = formData.getAll("images") as File[]

    if (!propertyId) {
      return Response.json(
        {
          error: "Property is required",
        },
        { status: 400 }
      )
    }

    for (const image of images) {
      const bytes = await image.arrayBuffer()

      const buffer = Buffer.from(bytes)

      const fileName = `${Date.now()}-${image.name}`

      const filePath = path.join(process.cwd(), "public/uploads", fileName)

      await writeFile(filePath, buffer)

      await prisma.propertyImage.create({
        data: {
          url: `/uploads/${fileName}`,

          propertyId: Number(propertyId),
        },
      })
    }

    return Response.json({
      success: true,
    })
  } catch (error) {
    console.log(error)

    return Response.json(
      {
        error: "Upload failed",
      },
      { status: 500 }
    )
  }
}
