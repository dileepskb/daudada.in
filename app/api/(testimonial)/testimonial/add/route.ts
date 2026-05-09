import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  const formData = await req.formData()

  const name = formData.get("name") as string
  const content = formData.get("content") as string
  const role = formData.get("role") as string
  const location = formData.get("location") as string
  const star = formData.get("star") as string

  const file = formData.get("image") as File | null

  let imageUrl = ""

  if (file) {
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const fileName = `${Date.now()}-${file.name}`

    // save locally (basic)
    const path = `./public/uploads/${fileName}`

    await import("fs/promises").then((fs) =>
      fs.writeFile(path, buffer)
    )

    imageUrl = `/uploads/${fileName}`
  }

  const testimonial = await prisma.testimonial.create({
    data: {
      name,
      content,
      role,
      location,
      star:Number(star),
      image: imageUrl,
    },
  })

  return Response.json(testimonial)
}