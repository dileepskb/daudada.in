import PropertyDetails from "@/components/my_ui/PropertyDetails/PropertyDetails"
import { getSeo } from "@/utils/getSeo"


type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(
  { params }: Props
) {

  const { slug } = await params

  const seo = await getSeo(slug)

  return {

    title:
      seo?.meta_title,

    description:
      seo?.meta_description,

    keywords:
      seo?.meta_keywords,

    openGraph: {

      title:
        seo?.og_title,

      description:
        seo?.og_description,

      images: [
        seo?.og_image || "",
      ],

      url:
        `https://daudada.in/properties/${slug}`,

      type: "website",
    },

    twitter: {

      card:
        "summary_large_image",

      title:
        seo?.twitter_title,

      description:
        seo?.twitter_description,

      images: [
        seo?.twitter_image || "",
      ],
    },

    robots:
      seo?.robots,
  }
}

export default async function Page(
  { params }: Props
) {

  const { slug } = await params

  const seo = await getSeo(slug)

  return (
    <>

      {
        seo?.schema && (

          <script
            type="application/ld+json"

            dangerouslySetInnerHTML={{
              __html: seo.schema,
            }}
          />

        )
      }

      <PropertyDetails />

    </>
  )
}