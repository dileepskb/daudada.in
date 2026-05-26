// context/PropertyContext.tsx

"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  usePathname,
} from "next/navigation";

interface PropertyContextType {
  properties: any[];

  loading: boolean;

  filters: {
    category: string;

    city: string;

    location: string;

    type: string;
  };

  refreshProperties: () => void;
}

const PropertyContext =
  createContext<
    PropertyContextType | undefined
  >(undefined);

/**
 * Property categories
 */

const propertyCategories: Record<
  string,
  string[]
> = {
  residential: [
    "Apartment",
    "Villa",
    "House",
    "Plot",
    "Land",
  ],

  commercial: [
    "Shop",
    "Office",
    "Showroom",
    "Warehouse",
    "Commercial Plot",
  ],

  agricultural: [
    "Land",
    "Farm Land",
    "Agricultural Land",
    "Orchard Land",
  ],
};

const cities = [
  "mathura",
];

const locations = [
  "jatipura",
  "govardhan",
];

export function PropertyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname =
    usePathname();

  /**
   * States
   */

  const [properties, setProperties] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(false);

  /**
   * Parse URL
   */

  const pathArray =
    pathname
      .split("/")
      .filter(Boolean);

  /**
   * Remove properties
   */

  const slugs =
    pathArray.slice(1);

  /**
   * Filters
   */

  let category = "";

  let city = "";

  let location = "";

  let type = "";

  /**
   * Category
   */

  if (slugs[0]) {
    category = slugs[0];
  }

  /**
   * Remaining slugs
   */

  const remaining =
    slugs.slice(1);

  remaining.forEach((slug) => {
    /**
     * City
     */

    if (
      cities.includes(slug)
    ) {
      city = slug;

      return;
    }

    /**
     * Location
     */

    if (
      locations.includes(slug)
    ) {
      location = slug;

      return;
    }

    /**
     * Property type
     */

    const types =
      propertyCategories[
        category
      ] || [];

    const matchedType =
      types.find(
        (item) =>
          item.toLowerCase() ===
          slug
      );

    if (matchedType) {
      type = slug;
    }
  });

  /**
   * Filters object
   */

  const filters = {
    category,
    city,
    location,
    type,
  };

  /**
   * Fetch properties
   */

  const getProperties =
    async () => {
      try {
        setLoading(true);

        const res = await fetch(
          "/api/properties",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              filters
            ),
          }
        );

        const data =
          await res.json();

        if (data.success) {
          setProperties(
            data.data || []
          );
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  /**
   * Auto fetch
   */

  useEffect(() => {
    getProperties();
  }, [
    category,
    city,
    location,
    type,
  ]);

  return (
    <PropertyContext.Provider
      value={{
        properties,

        loading,

        filters,

        refreshProperties:
          getProperties,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
}

/**
 * Hook
 */

export const useProperties =
  () => {
    const context =
      useContext(
        PropertyContext
      );

    if (!context) {
      throw new Error(
        "useProperties must be used inside PropertyProvider"
      );
    }

    return context;
  };
