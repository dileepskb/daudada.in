"use client"

import * as React from "react"

import { Controller, useForm } from "react-hook-form"
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

import { useState } from "react"
import { testimonial } from "@/types/property"


const formSchema = z.object({
  name: z.string(),
  role: z.string(),
  content: z.string(),
  star: z.number(),
  location: z.string(),
  image: z.any().optional()
})



export default function AddProperty() {
  const [uploading, setUploading] = useState(false)

 

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      name: "",
      role: "",
      content: "",
      star: 0,
      location: "",
      image:""
    },
  })

 


async function onSubmit(data: z.infer<typeof formSchema>) {
  setUploading(true)

  try {
    const formData = new FormData()

    formData.append("name", data.name)
    formData.append("content", data.content)
    formData.append("role", data.role || "")
    formData.append("location", data.location || "")
    formData.append("star", data.star.toString())

    if (data.image) {
      formData.append("image", data.image)
    }

    const res = await fetch("/api/testimonial/add", {
      method: "POST",
      body: formData,
    })

    const result = await res.json()

    if (!res.ok) throw new Error(result.error)

    toast("Testimonial added 🎉")
  } catch (err:unknown) {
     const error = err as Error;
    toast("Error", { description: error.message })
  } finally {
    setUploading(false)
  }
}

  return (
    <Card className="max-w-2xl">
      <CardHeader>
        <CardTitle>Add Testimonial</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          id="form-rhf-demo"
          className="flex gap-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">Name</FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Name"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
               <Controller
              name="role"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">Designation</FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Designation"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="content"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Description
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Description"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="star"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">Star</FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Star"
                    autoComplete="off"
                    type="number"
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
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Location
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Location"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
  name="image"
  control={form.control}
  render={({ field }) => (
    <Field>
      <FieldLabel>Photo</FieldLabel>
      <Input
        type="file"
        accept="image/*"
        onChange={(e) => field.onChange(e.target.files?.[0])}
      />
    </Field>
  )}
/>
            
            
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
