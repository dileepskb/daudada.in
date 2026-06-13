import { Metadata } from "next"
import { notFound } from "next/navigation"

import { prisma } from "@/lib/prisma"


const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://daudada.in"

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params

  const page = await prisma.page.findUnique({
    where: {
      slug,
      isPublished: true,
    },
  })

  if (!page) {
    return {}
  }

  const canonicalUrl =
    `${SITE_URL}/${page.slug}`

  return {
    title:
      page.meta_title ||
      page.title,

    description:
      page.meta_description || "",

    keywords:
      page.meta_keyword
        ?.split(",")
        .map((item) => item.trim()),

    authors: page.author
      ? [{ name: page.author }]
      : undefined,

    creator:
      page.twitter_creator ||
      undefined,

    publisher:
      page.copyright ||
      undefined,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title:
        page.fb_og_title ||
        page.meta_title ||
        page.title,

      description:
        page.fb_og_description ||
        page.meta_description ||
        "",

      url: canonicalUrl,

      siteName:
        page.og_site_name ||
        undefined,

      locale:
        page.og_locale ||
        "en_US",

      images:
        page.fb_og_image
          ? [
              {
                url:
                  page.fb_og_image,
              },
            ]
          : [],
    },

    twitter: {
      card: "summary_large_image",

      title:
        page.twitter_og_title ||
        page.meta_title ||
        page.title,

      description:
        page.twitter_og_description ||
        page.meta_description ||
        "",

      creator:
        page.twitter_creator ||
        undefined,

      site:
        page.twitter_site ||
        undefined,

      images:
        page.twitter_og_image
          ? [
              page.twitter_og_image,
            ]
          : [],
    },

    robots: {
      index:
        page.isPublished,
      follow:
        page.isPublished,
    },

    other: {
    ...(page.fb_admin && {
      "fb:admins":
        page.fb_admin,
    }),

    ...(page.og_locale_alternate && {
      "og:locale:alternate":
        page.og_locale_alternate,
    }),

    ...(page.og_update_time && {
      "og:updated_time":
        page.og_update_time,
    }),

    ...(page.geo_region && {
      "geo.region":
        page.geo_region,
    }),

    ...(page.dc_language && {
      "dc.language":
        page.dc_language,
    }),
  },
  }
}

export default async function Page({
  params,
}: Props) {
  const { slug } = await params

  const page = await prisma.page.findUnique({
    where: {
      slug,
      isPublished: true,
    },
  })

  if (!page) {
    notFound()
  }

  return (
    <>
  {
  page.facebook_pixel_header && (
    <div
      dangerouslySetInnerHTML={{
        __html:
          page.facebook_pixel_header,
      }}
    />
  )
}
{
  page.facebook_pixel_body && (
    <div
      dangerouslySetInnerHTML={{
        __html:
          page.facebook_pixel_body,
      }}
    />
  )
}
{
  page.google_tag_manager_tracking_header && (
    <div
      dangerouslySetInnerHTML={{
        __html:
          page.google_tag_manager_tracking_header,
      }}
    />
  )
}
{
  page.google_tag_manager_tracking_body && (
    <div
      dangerouslySetInnerHTML={{
        __html:
          page.google_tag_manager_tracking_body,
      }}
    />
  )
}
{
  page.other_code && (
    <div
      dangerouslySetInnerHTML={{
        __html: page.other_code,
      }}
    />
  )
}
  {
  page?.schema && (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          page.schema
        ),
      }}
    />
  )
}
    <main className="container mx-auto py-10">
      {/* <h1 className="mb-6 text-3xl font-bold">
        {page.title}
      </h1> */}

      <div
        dangerouslySetInnerHTML={{
          __html: page.content,
        }}
      />
    </main>
    </>
  )
}