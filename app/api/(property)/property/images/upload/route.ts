import { prisma } from "@/lib/prisma"
import { writeFile } from "fs/promises"
import path from "path"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const propertyId = formData.get("propertyId")
    const image_type = formData.get("image_type") as string

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

      // const fileName = `${Date.now()}-${image.name}`

      const ext = image.name.split(".").pop()

const baseName = image.name
  .replace(/\.[^/.]+$/, "")
  .toLowerCase()
  .replace(/\s+/g, "-")
  .replace(/[^a-z0-9-]/g, "")

const safeName =
  `${Date.now()}-${baseName}.${ext}`

      const filePath = path.join(process.cwd(), "public/uploads", safeName)

      await writeFile(filePath, buffer)

      await prisma.propertyImage.create({
        data: {
          url: `/uploads/${safeName}`,
          image_type:image_type,
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
