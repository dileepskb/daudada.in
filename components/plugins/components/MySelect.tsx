"use client"

import { useEffect } from "react"

import { Control, FieldError, useController } from "react-hook-form"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Field, FieldError as MyFieldError } from "@/components/ui/field"

// import { useFormData }
// from "../../context/FormDataContext"

// import { useFilterData }
// from "../../context/TableDataContext"

// import { useAxios }
// from "../../utils/useAxios"

type Option = {
  value: string

  label: string
}

interface MySelectProps {
  name: string
  control: Control<any>
  error?: FieldError
  validationRules?: object
  selected?: any
  type?: string
  options?: Option[]
  depend_key?: any
  depend_key_name?: any
  placeholder?: string
  disabled?: boolean
}

export function MySelect({
  name,
  error,
  selected,
  control,
  options = [],
  depend_key,
  depend_key_name,
  validationRules,
  placeholder = "Select option",
  disabled,
}: MySelectProps) {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    rules: validationRules,
    defaultValue: selected ?? "",
  })

  // form context

  //   const {
  //     setFormValue,
  //     formData,
  //   } = useFormData()

  //   useEffect(() => {

  //     if (depend_key) {

  //       setFormValue(
  //         name,
  //         Number(value)
  //       )
  //     }

  //   }, [value])

  //   useEffect(() => {

  //     if (depend_key_name) {

  //       // future logic
  //     }

  //   }, [formData])

  // filter case

  //   const {
  //     setFilterData,
  //   } = useFilterData()

  //   const {

  //     res: searchRes,

  //     mutate: searchMutate,

  //   } = useAxios({
  //     url:
  //       "/api/auth/filterLoad",
  //   })

  //   const getFilterData = (
  //     value: string
  //   ) => {

  //     searchMutate({

  //       searchKey: name,

  //       searchValue:
  //         Number(value) || value,
  //     })
  //   }

  //   useEffect(() => {

  //     if (searchRes) {

  //       setFilterData(
  //         searchRes?.data?.data
  //       )
  //     }

  //   }, [searchRes])

  return (
    <Field>
      <Select
        value={value || ""}
        onValueChange={(value) => {
          if (value === "true") {
            onChange(true)
          } else if (value === "false") {
            onChange(false)
          } else {
            onChange(value)
          }

          //   getFilterData(value)
        }}
        disabled={disabled}
      >
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          {options.map((option, index) => (
            <SelectItem key={index} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {error && <MyFieldError errors={[error]} />}
    </Field>
  )
}
