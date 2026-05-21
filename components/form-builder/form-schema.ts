// form-schema.ts

import { FormSection } from "./types"

export const propertyForm:
  FormSection[] = [

  {
    title: "Property Details",

    fields: [

      {
        name: "title",

        label: "Title",

        component: "input",

        required: true,

        placeholder:
          "Property title",

        colSpan: "col-span-6",
      },

      {
        name: "price",

        label: "Price",

        component: "input",

        type: "number",

        colSpan: "col-span-6",
      },

      {
        name: "property_type",

        label: "Property Type",

        component: "select",

        options: [
          {
            label: "Residential",
            value: "Residential",
          },

          {
            label: "Commercial",
            value: "Commercial",
          },
        ],

        colSpan: "col-span-6",
      },

      {
        name: "description",

        label: "Description",

        component: "textarea",

        colSpan: "col-span-12",
      },
    ],
  },
]