// app/api/properties/route.ts

import {
  NextRequest,
  NextResponse,
} from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(
  req: NextRequest
) {
  try {
    const body =
      await req.json();

    const {
      category,
      city,
      location,
      type,
    } = body;

    /**
     * Dynamic where
     */

    const where: any = {
      status: "AVAILABLE",
    };

    /**
     * Category
     */

    if (category) {
      where.propertyType = {
        equals: category,

        mode: "insensitive",
      };
    }

    /**
     * City
     */

    if (city) {
      where.city = {
        equals: city,

        mode: "insensitive",
      };
    }

    /**
     * Location
     */

    if (location) {
       where.location = {
        equals: location,

        mode: "insensitive",
      };
    }

    /**
     * Type
     */

    if (type) {
      where.propertyCategory = {
        equals: type,

        mode: "insensitive",
      };
    }

    console.log(
      "WHERE =>",
      where
    );

    /**
     * Fetch properties
     */

    const properties =
      await prisma.property.findMany(
        {
          where,

          orderBy: {
            id: "desc",
          },
        }
      );

    return NextResponse.json({
      success: true,

      filters: {
        category,
        city,
        location,
        type,
      },

      data: properties,
    });
  } catch (error) {
    console.error(
      "PROPERTIES_API_ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        message:
          "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}