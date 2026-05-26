import Hero from "@/components/my_ui/Hero/Hero"

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://daudada.in/#website",
      "name": "Dau Dada Properties",
      "url": "https://daudada.in/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://daudada.in/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://daudada.in/#webpage",
      "name": "Trusted Real Estate Consultant & Advisor | Dau Dada Properties",
      "url": "https://daudada.in/",
      "description": "Searching for real estate agents near Mathura? Dau Dada Properties provides safe investments, 30-yr title verification, & complete legal safety.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://daudada.in/#website"
      }
    },
    {
      "@type": ["RealEstateAgent", "LocalBusiness"],
      "@id": "https://daudada.in/#organization",
      "name": "Dau Dada Properties",
      "url": "https://daudada.in/",
      "logo": "https://daudada.in/assets/logo.png",
      "image": "https://daudada.in/assets/logo.png",
      "priceRange": "₹₹₹",
      "description": "Trusted Real Estate Consultant & Advisor | Searching for real estate agents near Mathura? Dau Dada Properties provides safe investments, 30-yr title verification, & complete legal safety.",
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Mathura"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Govardhan"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Jatipura"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Barsana"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Vrindavan"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "poochri -Jatipura ke beech mein, badi, Parikrama Marg, opposite luk luk dau ji ki saamne, Mahavidhya Colony, jatipura, Govind Nagar, Govardhan",
        "addressLocality": "Mathura",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "281001",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://daudada.in/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://daudada.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://daudada.in/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Consultancy",
          "item": "https://daudada.in/consultancy"
        }
      ]
    },
    {
      "@type": "ViewAction",
      "@id": "https://daudada.in/#viewaction",
      "name": "View Dau Dada Properties",
      "target": "https://daudada.in/",
      "object": {
        "@type": "RealEstateAgent",
        "name": "Dau Dada Properties"
      }
    }
  ]
}

export async function generateMetadata() {
  return {
    title: "Dau Dada Properties",
    description:
      "Looking for the best real estate consultancy? Dau Dada Properties offers expert advice and trusted property solutions for your dream home or investment.",
    keywords: "",
    openGraph: {
      title: "Dau Dada Properties",
      description:
        "Looking for the best real estate consultancy? Dau Dada Properties offers expert advice and trusted property solutions for your dream home or investment.",
      images: "",
      url: `https://daudada.in/`,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Dau Dada Properties",
      description:
        "Looking for the best real estate consultancy? Dau Dada Properties offers expert advice and trusted property solutions for your dream home or investment.",

      images: "",
    },
  }
}

export default function Page() {
  return (
    <>
    <script
            type="application/ld+json"

            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
      <Hero />
    </>
  )
}
