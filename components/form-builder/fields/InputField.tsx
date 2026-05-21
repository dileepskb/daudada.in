// fields/InputField.tsx

"use client"

import { Controller } from "react-hook-form"

import { Input } from "@/components/ui/input"

import {
  Field,
  FieldLabel,
  FieldError,
} from "@/components/ui/field"

export default function InputField({
  field,
  form,
}: any) {

  return (

    <Controller
      name={field.name}

      control={form.control}

      rules={{
        required:
          field.required
            ? `${field.label} is required`
            : false,
      }}

      render={({
        field: controllerField,
        fieldState,
      }) => (

        <Field>

          <FieldLabel>
            {field.label}
          </FieldLabel>

          <Input
            {...controllerField}

            type={
              field.type || "text"
            }

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