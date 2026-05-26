import { prisma } from "@/lib/prisma";

export async function PUT(
  req: Request,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    const { id } =
      await params;

    const body =
      await req.json();

    const {
      title,
      description,
      price,
      address,
      location,
      city,
      propertyType,
      specifications = [],
      amenities = [],
      propertyCategory = [],
    } = body;

    /**
     * Slug
     */

    const slug = title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(
        /[^a-z0-9-]/g,
        ""
      )
      .replace(/-+/g, "-");

    /**
     * Ensure arrays
     */

    const safeCategories =
      Array.isArray(
        propertyCategory
      )
        ? propertyCategory
        : [];

    const safeAmenities =
      Array.isArray(
        amenities
      )
        ? amenities
        : [];

    const safeSpecifications =
      Array.isArray(
        specifications
      )
        ? specifications
        : [];

    /**
     * Remove old relations
     */

    await prisma.propertyCategory.deleteMany(
      {
        where: {
          propertyId:
            Number(id),
        },
      }
    );

    await prisma.specification.deleteMany(
      {
        where: {
          propertyId:
            Number(id),
        },
      }
    );

    await prisma.propertyAmenity.deleteMany(
      {
        where: {
          propertyId:
            Number(id),
        },
      }
    );

    /**
     * Update property
     */

    await prisma.property.update({
  where: {
    id: Number(id),
  },

  data: {
    title,
    description,
    price,
    address,
    location,
    city,
    propertyType,
    slug,

    /**
     * Categories
     */

    propertyCategory: {
      create:
        safeCategories.map(
          (
            item: string
          ) => ({
            name: item,
          })
        ),
    },

    /**
     * Specifications
     */

    specification: {
      create:
        safeSpecifications.map(
          (item: any) => ({
            key: item.key,

            value:
              item.value,
          })
        ),
    },

    /**
     * Amenities
     */

    propertyAmenity: {
      create:
        safeAmenities.map(
          (
            amenityId: number
          ) => ({
            amenity: {
              connect: {
                id: amenityId,
              },
            },
          })
        ),
    },
  },
});

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}