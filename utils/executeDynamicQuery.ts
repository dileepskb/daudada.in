import { prisma } from "@/lib/prisma"

export const executeDynamicQuery = async (query: string) => {
  try {
    const results = await prisma.$queryRawUnsafe<
      {
        value: string
        label: string
      }[]
    >(query)

    return results.map((item) => ({
      value: String(item.value),

      label: String(item.label),
    }))
  } catch (error) {
    console.error("Dynamic Query Error:", error)

    return []
  }
}
