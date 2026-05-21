// SectionRenderer.tsx

"use client"


import FieldRenderer from "./FieldRenderer"
import { FormSection } from "./types"

type Props = {
  sections: FormSection[]
  form: any
}

export default function SectionRenderer({
  sections,
  form,
}: Props) {

  return (

    <div className="space-y-6">

      {
        sections.map((section, index) => (

          <div
            key={index}
            className="border rounded-2xl p-5"
          >

            {
              section.title && (

                <h2 className="text-xl font-semibold mb-5">
                  {section.title}
                </h2>
              )
            }

            <div className="grid grid-cols-12 gap-4">

              {
                section.fields.map((field) => (

                  <div
                    key={field.name}
                    className={
                      field.colSpan ||
                      "col-span-12"
                    }
                  >

                    <FieldRenderer
                      field={field}
                      form={form}
                    />

                  </div>
                ))
              }

            </div>

          </div>
        ))
      }

    </div>
  )
}