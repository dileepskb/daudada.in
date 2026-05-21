"use client"

import { Controller } from "react-hook-form"

import { Input } from "@/components/ui/input"

import {
  Field,
  FieldError,
} from "@/components/ui/field"

type Props = {

  name: string

  control: any

  placeholder?: string

  type?: string

  validationRules?: any

  error?: any

  disabled?: boolean
}

export default function MyInput({

  name,

  control,

  placeholder,

  type = "text",

  validationRules,

  error,

  disabled,

}: Props) {

  return (

    <Controller
      name={name}

      control={control}

      rules={validationRules}

      render={({ field }) => (

        <Field>

          <Input
            {...field}

            type={type}

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