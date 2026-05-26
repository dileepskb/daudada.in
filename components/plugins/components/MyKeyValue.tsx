"use client"

import { Control, UseFormRegister, useFieldArray } from "react-hook-form"

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"

import { Field, FieldLabel } from "@/components/ui/field"
import { useEffect, useRef } from "react"
import { IoIosCloseCircle } from "react-icons/io";

type Props = {
  name: string

  control: Control<any>

  register: UseFormRegister<any>

  label?: string

  keyPlaceholder?: string

  valuePlaceholder?: string
}

export function MyKeyValue({
  name,

  control,

  register,

  label = "Items",

  keyPlaceholder = "Key",

  valuePlaceholder = "Value",
}: Props) {

  const initialized = useRef(false);

  const {
    fields,

    append,

    remove,
  } = useFieldArray({
    control,

    name,
  })


  useEffect(() => {
  if (!initialized.current && fields.length === 0) {
    initialized.current = true;

    append({
      key: "",
      value: "",
    });
  }
}, [fields.length, append]);

  return (
    <Field className="">
     
      {/* rows */}

      {fields.length > 0 &&
        fields.map((item, index) => (
          <div key={item.id} className="grid grid-cols-12 gap-2">
            {/* key */}

            <div className="col-span-5">
              <Input
                placeholder={keyPlaceholder}
                {...register(`${name}.${index}.key`)}
              />
            </div>

            {/* value */}

            <div className="col-span-5">
              <Input
                placeholder={valuePlaceholder}
                {...register(`${name}.${index}.value`)}
              />
            </div>

            {/* remove */}

            <div className="col-span-2">
              <Button
                type="button"
                variant="destructive"
                
                onClick={() => remove(index)}
              >
                <IoIosCloseCircle />
              </Button>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between">
        {/* <FieldLabel className="font-bold">{label}</FieldLabel> */}

        <Button
          type="button"
          size="sm"
          onClick={() =>
            append({
              key: "",
              value: "",
            })
          }
        >
          + Add
        </Button>
      </div>
    </Field>
  )
}
