// fields/SelectField.tsx

"use client"

import { Controller } from "react-hook-form"

import {
  Field,
  FieldLabel,
  FieldError,
} from "@/components/ui/field"

export default function SelectField({
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

          <select
            value={
              controllerField.value
            }

            onChange={
              controllerField.onChange
            }

            className="flex h-11 w-full rounded-xl border border-input bg-transparent px-3 py-1 text-base shadow-sm"
          >

            <option value="">
              Select
            </option>

            {
              field.options?.map(
                (option: any) => (

                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                )
              )
            }

          </select>

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