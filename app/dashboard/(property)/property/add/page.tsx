"use client"

import * as React from "react"

import { Controller, useForm, useFieldArray } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import MyEditor from "@/components/my_ui/MyEditor/MyEditor"

const AMENITIES = [
  { id: 1, name: "Parking" },
  { id: 2, name: "Swimming Pool" },
  { id: 3, name: "Garden" },
  { id: 4, name: "Gym" },
  { id: 5, name: "Lift" },
  { id: 6, name: "Security" },
  { id: 7, name: "CCTV Surveillance" },
  { id: 8, name: "Power Backup" },
  { id: 9, name: "Club House" },
  { id: 10, name: "Children Play Area" },
  { id: 11, name: "WiFi" },
  { id: 12, name: "Air Conditioning" },
  { id: 13, name: "Balcony" },
  { id: 14, name: "Terrace" },
  { id: 15, name: "Modular Kitchen" },
  { id: 16, name: "Furnished" },
  { id: 17, name: "Pet Friendly" },
  { id: 18, name: "Fire Safety" },
  { id: 19, name: "Water Supply" },
  { id: 20, name: "Rain Water Harvesting" },
  { id: 21, name: "Visitor Parking" },
  { id: 22, name: "Intercom" },
  { id: 23, name: "Solar Panels" },
  { id: 24, name: "Community Hall" },
  { id: 25, name: "Jogging Track" },
]

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.number(),
  location: z.string(),
  propertyType: z.string(),
  propertyCategory: z.array(z.string()),
  amenities: z.array(z.number()).default([]),
  specifications: z
    .array(
      z.object({
        key: z.string(),
        value: z.string(),
      })
    )
    .default([]),
})

export default function AddProperty() {
  const [uploading, setUploading] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      title: "",
      description: "",
      price: undefined,
      location: "",
      propertyType: "",
      propertyCategory: [],
      amenities: [],
      specifications: [{ key: "", value: "" }],
    },
  })

  const { control, register } = form

  const { fields, append, remove } = useFieldArray({
    control,
    name: "specifications",
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setUploading(true)
    try {
      const res = await fetch("/api/property/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      
      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.error || "Failed to save")
      }
      setUploading(false)
      // ✅ Success toast
      toast("Student created successfully 🎉", {
        position: "bottom-right",
      })

       router.push("/dashboard/property")
    } catch (err: unknown) {
      const error = err as Error
      // ❌ Error toast
      setUploading(false)
      toast("Error", {
        description: error.message,
        position: "bottom-right",
      })
    }
  }

  return (
    <Card className="max-w-2xl">
      <CardHeader>
        <CardTitle className="font-bold text-xl">Add Property</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          id="form-rhf-demo"
          className="flex gap-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FieldGroup>
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title" className="font-bold">Title</FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Title"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="font-bold">Description</FieldLabel>

                  <MyEditor {...field} />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="price"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title" className="font-bold">Price</FieldLabel>
                  <Input
                    type="number"
                    {...field}
                    value={field.value || ""}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="location"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title" className="font-bold">
                    Location
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="location"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="propertyType"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="font-bold">Property Type</FieldLabel>

                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger aria-invalid={fieldState.invalid}>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="Residential">Residential</SelectItem>
                      <SelectItem value="Agricultural">Agricultural</SelectItem>
                      <SelectItem value="Commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="propertyCategory"
              control={form.control}
              defaultValue={[]}
              render={({ field, fieldState }) => {
                const options = [
                  "Flat",
                  "1BHK",
                  "2BHK",
                  "3BHK",
                  "Villa",
                  "Shop",
                  "Office Space",
                  "Commercial Space",
                ]

                const toggleValue = (value: string) => {
                  const currentValues = (field.value || []) as string[]

                  if (currentValues.includes(value)) {
                    field.onChange(
                      currentValues.filter((item) => item !== value)
                    )
                  } else {
                    field.onChange([...currentValues, value])
                  }
                }

                return (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel className="font-bold">Property Category</FieldLabel>

                    <div className="flex flex-wrap gap-2">
                      {options.map((item) => {
                        const active = field.value.includes(item)

                        return (
                          <button
                            type="button"
                            key={item}
                            onClick={() => toggleValue(item)}
                            className={`rounded-md border px-3 py-2 text-sm transition ${
                              active
                                ? "border-black bg-black text-white"
                                : "border-gray-300 bg-white text-black"
                            } `}
                          >
                            {item}
                          </button>
                        )
                      })}
                    </div>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )
              }}
            />
            <Controller
              name="amenities"
              control={form.control}
              defaultValue={[]}
              render={({ field }) => (
                <div className="space-y-2">
                  <FieldLabel className="font-bold">Amenities</FieldLabel>
                  <div className="grid grid-cols-3">
                  {AMENITIES.map((item) => (
                    <div key={item.id} className="flex items-center space-x-2">
                      <Checkbox
                        checked={field.value?.includes(item.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            field.onChange([...field.value, item.id])
                          } else {
                            field.onChange(
                              field.value.filter((id: number) => id !== item.id)
                            )
                          }
                        }}
                      />
                      <span>{item.name}</span>
                    </div>
                  ))}
                  </div>
                </div>
              )}
            />
            <div className="space-y-4">
              <FieldLabel className="font-bold">Specifications</FieldLabel>

              {fields.map((field, index) => (
                <div key={field.id} className="flex gap-2">
                  {/* Key */}
                  <Input
                    placeholder="Key (Area, Facing)"
                    {...register(`specifications.${index}.key`)}
                  />

                  {/* Value */}
                  <Input
                    placeholder="Value (1 Acre, East)"
                    {...register(`specifications.${index}.value`)}
                  />

                  {/* Remove */}
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => remove(index)}
                  >
                    X
                  </Button>
                </div>
              ))}

              {/* Add More */}
              <Button
                type="button"
                onClick={() => append({ key: "", value: "" })}
              >
                + Add Specification
              </Button>
            </div>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-demo" disabled={uploading}>
            {uploading ? "Uploading..." : "Submit"}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
