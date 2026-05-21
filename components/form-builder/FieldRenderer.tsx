// FieldRenderer.tsx

"use client"



import InputField from "./fields/InputField"
import SelectField from "./fields/SelectField"
import TextareaField from "./fields/TextareaField"
import { FormField } from "./types"

type Props = {
  field: FormField
  form: any
}

export default function FieldRenderer({
  field,
  form,
}: Props) {

  console.log(field)
  console.log(form)

  switch (field.component) {

    case "input":
      return (
        <InputField
          field={field}
          form={form}
        />
      )

    case "select":
      return (
        <SelectField
          field={field}
          form={form}
        />
      )

    case "textarea":
      return (
        <TextareaField
          field={field}
          form={form}
        />
      )

    // case "checkbox":
    //   return (
    //     <CheckboxField
    //       field={field}
    //       form={form}
    //     />
    //   )

    default:
      return null
  }
}