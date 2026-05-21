// types.ts

export type FormField = {

  name: string

  label: string

  component:
    | "input"
    | "select"
    | "textarea"
    | "checkbox"
    | "date"
    | "file"
    | "editor"

  placeholder?: string

  type?: string

  required?: boolean

  options?: {
    label: string
    value: string
  }[]

  colSpan?: string
}

export type FormSection = {

  title?: string

  fields: FormField[]

  colSpan?: string
}