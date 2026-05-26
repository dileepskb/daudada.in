import { prisma } from "@/lib/prisma"
export async function getSeo(slug: string) {

  return await prisma.seo.findFirst({
    where: {
      page_url: `/properties/${slug}`,
    },
  })
}