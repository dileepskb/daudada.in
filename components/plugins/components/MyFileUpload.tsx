"use client"

import { useRef } from "react"

import { useController } from "react-hook-form"

import axios from "axios"

import { Field, FieldError } from "@/components/ui/field"

import { Button } from "@/components/ui/button"

type Props = {
  name: string
  control: any
  error?: any
  validationRules?: any
  multiple?: boolean
  accept?: string
}

export function MyFileUpload({
  name,
  control,
  error,
  validationRules,
  multiple = false,
  accept = "image/*",
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    rules: validationRules,
    defaultValue: multiple ? [] : "",
  })

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (!files.length) return
    try {
      const uploadedUrls: string[] = []
      for (const file of files) {
        const formData = new FormData()
        formData.append("file", file)
        const res = await axios.post(
          "/api/form/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        uploadedUrls.push(res.data.url)
      }
      if (multiple) {
        onChange([...(value || []), ...uploadedUrls])
      } else {
        onChange(uploadedUrls[0])
      }
    } catch (error) {
      console.log(error)
    }
  }
  const removeImage = (url: string) => {
    if (!multiple) {
      onChange("")
      return
    }
    onChange(value.filter((item: string) => item !== url))
  }
  return (
    <Field>
      <input
        ref={inputRef}
        type="file"
        hidden
        multiple={multiple}
        accept={accept}
        onChange={handleUpload}
      />
      <Button
        type="button"
        variant="outline"
        onClick={() => inputRef.current?.click()}
      >
        Upload File
      </Button>
      {/* preview */}
      <div className="mt-4 flex flex-wrap gap-3">
        {multiple
          ? value?.map((item: string, index: number) => (
              <div key={index} className="relative">
                <img
                  src={item}
                  alt="preview"
                  className="h-24 w-24 rounded-md border object-cover"
                />

                <button
                  type="button"
                  onClick={() => removeImage(item)}
                  className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs text-white"
                >
                  ✕
                </button>
              </div>
            ))
          : value && (
              <div className="relative">
                <img
                  src={value}
                  alt="preview"
                  className="h-24 w-24 rounded-md border object-cover"
                />

                <button
                  type="button"
                  onClick={() => removeImage(value)}
                  className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs text-white"
                >
                  ✕
                </button>
              </div>
            )}
      </div>
      {error && <FieldError errors={[error]} />}
    </Field>
  )
}
