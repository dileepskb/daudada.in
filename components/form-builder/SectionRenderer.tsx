// SectionRenderer.tsx

"use client"

import { useApi } from "@/utils/useApi"
import FieldRenderer from "./FieldRenderer"
import { FormSection } from "./types"
import { useEffect } from "react"

type Props = {
  formId: any
}

export default function SectionRenderer({ formId }: Props) {
  const {data, request } = useApi()

  useEffect(() => {
    async function fetchForm(){
       await request({
        url: "/api/form",
        method: "POST",
            data: {
                formid: formId,
            },
        })
    }
    

    fetchForm()

  }, [formId])

  console.log(data)


  return (
    <div className="space-y-6">
      {data?.data?.sections.map((section:any, index:number) => (
        <div key={index} className="rounded-2xl border p-5">
          {section.title && (
            <h2 className="mb-5 text-xl font-semibold">{section.title}</h2>
          )}

          <div className="grid grid-cols-12 gap-4">
            {data?.data?.section?.columns.map((field) => (
              <div key={field.name} className={field.colSpan || "col-span-12"}>
                <FieldRenderer field={field} form={form} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
