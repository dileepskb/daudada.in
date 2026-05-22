// app/api/upload/route.ts

import { writeFile } from "fs/promises"
import path from "path"
export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = formData.get("file") as File
    if (!file) {
      return Response.json(
        {
          success: false,

          error: "File is required",
        },

        {
          status: 400,
        }
      )
    }
    // convert to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    // extension
    const ext = file.name.split(".").pop()
    // clean name
    const baseName = file.name
      .replace(/\.[^/.]+$/, "")
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
    // final file name

    const safeName = `${Date.now()}-${baseName}.${ext}`
    // path
    const filePath = path.join(
      process.cwd(),
      "public/uploads",
      safeName
    )
    // save
    await writeFile(filePath, buffer)
    // response
    return Response.json({
      success: true,

      url: `/uploads/${safeName}`,
    })
  } catch (error) {
    console.log(error)

    return Response.json(
      {
        success: false,

        error: "Upload failed",
      },

      {
        status: 500,
      }
    )
  }
}
