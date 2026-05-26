"use client"

import { Control, FieldError, useController } from "react-hook-form"

import { Checkbox } from "@/components/ui/checkbox"

import {
  Field,
  FieldError as MyFieldError,
  FieldLabel,
} from "@/components/ui/field"

interface Option {
  label: string
  value: string
}

interface Props {
  name: string
  control: Control<any>
  error?: FieldError
  validationRules?: object
  options: Option[]
  type:string
}

export function MyCheckbox({

  name,

  control,

  error,

  validationRules,

  options,

}: Props) {

  const {

    field: {
      value = [],
      onChange,
    },

  } = useController({

    name,

    control,

    rules: validationRules,

    defaultValue: [],
  })

  const toggleValue = (
    checkedValue: string
  ) => {

    if (
      value.includes(
        checkedValue
      )
    ) {

      onChange(

        value.filter(
          (item: string) =>
            item !== checkedValue
        )
      )

    } else {

      onChange([
        ...value,
        checkedValue,
      ])
    }
  }

  return (

    <Field className="space-y-3">

      {
        options.map((item) => {

          const checked =
            value.includes(
              item.value
            )

          return (

            <div

              key={item.value}

              className="
                flex
                items-center
                gap-2
              "
            >

              <Checkbox

                checked={checked}

                onCheckedChange={() =>
                  toggleValue(
                    item.value
                  )
                }
              />

              <FieldLabel
                className="
                  mb-0
                  font-normal
                "
              >

                {item.label}

              </FieldLabel>

            </div>
          )
        })
      }

      {
        error && (

          <MyFieldError
            errors={[error]}
          />
        )
      }

    </Field>
  )
}