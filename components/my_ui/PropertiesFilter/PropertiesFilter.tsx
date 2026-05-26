"use client";

import {
  useRouter,
  usePathname,
} from "next/navigation";

import {
  useEffect,
  useState,
} from "react";

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

export default function PropertiesFilter() {
  const router = useRouter();

  const pathname =
    usePathname();

  /**
   * States
   */

  const [properties, setProperties] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  /**
   * Current URL
   *
   * Example:
   * /properties/residential/jatipura/apartment
   */

  const pathArray =
    pathname
      .split("/")
      .filter(Boolean);

  /**
   * Remove "properties"
   */

  const slugs =
    pathArray.slice(1);

  /**
   * Dynamic detect
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
            data.data
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

  /**
   * Update route
   */

  const updateRoute = ({
    newCategory = category,

    newCity = city,

    newLocation =
      location,

    newType = type,
  }: any) => {
    const urlParts = [
      "/properties",

      newCategory,

      newCity,

      newLocation,

      newType,
    ].filter(
      (item) =>
        item &&
        item !== "all"
    );

    router.push(
      urlParts.join("/")
    );
  };

  /**
   * Category
   */

  const allProperty = (
    e: any
  ) => {
    updateRoute({
      newCategory:
        e.target.value,

      newCity: "",

      newLocation: "",

      newType: "",
    });
  };

  /**
   * City
   */

  const allCity = (
    e: any
  ) => {
    updateRoute({
      newCity:
        e.target.value,
    });
  };

  /**
   * Location
   */

  const allLocation = (
    e: any
  ) => {
    updateRoute({
      newLocation:
        e.target.value,
    });
  };

  /**
   * Property type
   */

  const allTypes = (
    e: any
  ) => {
    updateRoute({
      newType:
        e.target.value.toLowerCase(),
    });
  };

  /**
   * Current category types
   */

  const currentTypes =
    propertyCategories[
      category
    ] || [];



   



  return (
    <div
      className="bg-white rounded-2xl border border-brand-cream p-5 mb-8 shadow-soft"
      data-testid="properties-filters"
    >
      <div className="flex items-center gap-2 mb-4 text-sm font-medium text-brand-ink">
        Refine your search
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
        {/* category */}

        <select
          className="h-11 rounded-xl border px-3"
          onChange={
            allProperty
          }
          value={category}
        >
          <option value="">
            All
          </option>

          <option value="residential">
            Residential
          </option>

          <option value="commercial">
            Commercial
          </option>

          <option value="agricultural">
            Agricultural
          </option>
        </select>

        {/* city */}

        <select
          className="h-11 rounded-xl border px-3"
          onChange={allCity}
          value={city}
        >
          <option value="">
            Select City
          </option>

          {cities.map(
            (item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            )
          )}
        </select>

        {/* location */}

        <select
          className="h-11 rounded-xl border px-3"
          onChange={
            allLocation
          }
          value={location}
        >
          <option value="">
            Select Location
          </option>

          {locations.map(
            (item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            )
          )}
        </select>

        {/* type */}

        <select
          className="h-11 rounded-xl border px-3"
          onChange={
            allTypes
          }
          value={type}
        >
          <option value="">
            All Types
          </option>

          {currentTypes.map(
            (item) => (
              <option
                key={item}
                value={item.toLowerCase()}
              >
                {item}
              </option>
            )
          )}
        </select>

        {/* button */}

        <div className="flex gap-2">
          <button
            className="inline-flex items-center justify-center rounded-xl bg-brand-red px-4 h-11 text-white"
          >
            Go
          </button>
        </div>
      </div>

      {/* debug */}

      {/* <pre className="mt-5 text-xs overflow-auto">
        {JSON.stringify(
          {
            filters,
            loading,
            total:
              properties.length,
            properties,
          },
          null,
          2
        )}
      </pre> */}
    </div>
  );
}