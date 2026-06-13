"use client"

import { useState } from "react"
import { Controller } from "react-hook-form"

import { Field, FieldError } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor"

type Props = {
  name: string
  control: any
  validationRules?: any
  error?: any
}

export default function MyFormEditor({
  name,
  control,
  validationRules,
  error,
}: Props) {
  const [activeTab, setActiveTab] = useState<
    "editor" | "html"
  >("editor")

  return (
    <Controller
      name={name}
      control={control}
      rules={validationRules}
      render={({ field }) => (
        <Field>
          <div className="rounded-md border">
            {/* Tabs */}

            <div className="flex border-b">
              <button
                type="button"
                className={`px-4 py-2 text-sm ${
                  activeTab === "editor"
                    ? "border-b-2 font-medium"
                    : ""
                }`}
                onClick={() =>
                  setActiveTab("editor")
                }
              >
                Visual Editor
              </button>

              <button
                type="button"
                className={`px-4 py-2 text-sm ${
                  activeTab === "html"
                    ? "border-b-2 font-medium"
                    : ""
                }`}
                onClick={() =>
                  setActiveTab("html")
                }
              >
                HTML Code
              </button>
            </div>

            {/* Editor */}

            {activeTab === "editor" && (
              <SimpleEditor
                content={
                  field.value || ""
                }
                onChange={
                  field.onChange
                }
              />
            )}

            {/* HTML */}

            {activeTab === "html" && (
              <Textarea
                value={
                  field.value || ""
                }
                onChange={(e) =>
                  field.onChange(
                    e.target.value
                  )
                }
                className="min-h-[500px] rounded-none border-0 font-mono"
                placeholder="Paste HTML code here..."
              />
            )}
          </div>

          {error && (
            <FieldError
              errors={[error]}
            />
          )}
        </Field>
      )}
    />
  )
}