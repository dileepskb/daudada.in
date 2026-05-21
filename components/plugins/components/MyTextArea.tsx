"use client"

import { Controller } from "react-hook-form"

import { Textarea } from "@/components/ui/textarea"

import {
  Field,
  FieldError,
} from "@/components/ui/field"

type Props = {

  name: string

  control: any

  placeholder?: string

  validationRules?: any

  error?: any

  disabled?: boolean

  rows?: number
}

export function MyTextArea({

  name,

  control,

  placeholder,

  validationRules,

  error,

  disabled,

  rows = 5,

}: Props) {

  return (

    <Controller
      name={name}

      control={control}

      rules={validationRules}

      render={({ field }) => (

        <Field>

          <Textarea
            {...field}

            rows={rows}

            placeholder={placeholder}

            disabled={disabled}
          />

          {
            error && (

              <FieldError
                errors={[error]}
              />
            )
          }

        </Field>
      )}
    />
  )
}