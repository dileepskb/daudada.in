"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { useForm, Controller } from "react-hook-form"

import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Property = {
  id: number
  title: string
}

type FormValues = {
  propertyId: string
}

export default function PropertyImagesPage() {
  const [properties, setProperties] = useState<Property[]>([])
  const [images, setImages] = useState<File[]>([])
  const [uploading, setUploading] = useState(false)

  const [uploadedImages, setUploadedImages] = useState([])

  const getImages = async (propertyId: string) => {
    const res = await axios.get(`/api/property/images/${propertyId}`)

    setUploadedImages(res.data)
  }

  const form = useForm<FormValues>({
    defaultValues: {
      propertyId: "",
    },
  })

  useEffect(() => {
    const getProperties = async () => {
      try {
        const res = await axios.post("/api/property")

        setProperties(res.data)
      } catch (err) {
        console.log(err)
      }
    }

    getProperties()
  }, [])

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) return

    setImages((prev) => [...prev, file])

    e.target.value = ""
  }

  const onSubmit = async (data: FormValues) => {
    try {
      setUploading(true)

      const formData = new FormData()

      formData.append("propertyId", data.propertyId)

      images.forEach((file) => {
        formData.append("images", file)
      })

      await axios.post("/api/property/images/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      alert("Images uploaded successfully")

      setImages([])
      getImages(data.propertyId)
      // form.reset()
    } catch (err) {
      console.log(err)

      alert("Upload failed")
    } finally {
      setUploading(false)
    }
  }

console.log(uploadedImages)

  return (
    <>
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Add Images</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              {/* Property Select */}
              <Controller
                name="propertyId"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel className="font-bold">
                      Select Property
                    </FieldLabel>

                    <Select
                      value={field.value}
                      onValueChange={(value) => {
                        field.onChange(value)

                        getImages(value)
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select property" />
                      </SelectTrigger>

                      <SelectContent>
                        {properties.map((item) => (
                          <SelectItem key={item.id} value={String(item.id)}>
                            {item.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* Image Upload */}
              <Field>
                <FieldLabel className="font-bold">Upload Images</FieldLabel>

                <Input type="file" accept="image/*" onChange={handleAddImage} />
              </Field>

              {/* Preview */}
              {images.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {images.map((file, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(file)}
                        alt=""
                        className="h-28 w-28 rounded-md border object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Submit */}
              <Button type="submit" disabled={uploading}>
                {uploading ? "Uploading..." : "Upload Images"}
              </Button>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      
              {
  uploadedImages.length > 0 && (
<Card className="max-w-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Images</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-3">

        {
          uploadedImages.map((item: any) => (
<div  key={item.id}>
            <img
              src={item.url}
              alt=""
              className="
                w-full
                rounded-md
                border
                object-cover
              "
            />
            </div>
          ))
        }

     </div>
        </CardContent>
      </Card>
  )
}
         
    </>
  )
}
