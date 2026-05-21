// fields/TextareaField.tsx

"use client"

import { Controller } from "react-hook-form"

import { Textarea } from "@/components/ui/textarea"

import {
  Field,
  FieldLabel,
  FieldError,
} from "@/components/ui/field"

export default function TextareaField({
  field,
  form,
}: any) {

  return (

    <Controller
      name={field.name}

      control={form.control}

      render={({
        field: controllerField,
        fieldState,
      }) => (

        <Field>

          <FieldLabel>
            {field.label}
          </FieldLabel>

          <Textarea
            {...controllerField}

            placeholder={
              field.placeholder
            }
          />

          {
            fieldState.error && (

              <FieldError
                errors={[
                  fieldState.error,
                ]}
              />
            )
          }

        </Field>
      )}
    />
  )
}