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

      const safeName = fileName
 .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")

      const filePath = path.join(process.cwd(), "public/uploads", safeName)

      await writeFile(filePath, buffer)

      await prisma.propertyImage.create({
        data: {
          url: `/uploads/${safeName}`,

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
