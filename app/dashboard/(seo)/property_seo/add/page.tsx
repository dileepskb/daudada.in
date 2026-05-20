"use client"

import { useForm, Controller } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field"
import { useApi } from "@/utils/useApi"

type SeoFormValues = {
  page_url: string

  meta_title: string
  meta_description: string
  meta_keywords: string

  og_title: string
  og_description: string
  og_image: string

  twitter_title: string
  twitter_description: string
  twitter_image: string

  canonical_url: string

  robots: string

  schema: string

  gtag_head: string

  custom_head: string
}

export default function SeoForm() {
    const {
     pending,
     data,
     error,
     request,
   } = useApi()
  const form = useForm<SeoFormValues>({
    defaultValues: {
      page_url: "",

      meta_title: "",
      meta_description: "",
      meta_keywords: "",

      og_title: "",
      og_description: "",
      og_image: "",

      twitter_title: "",
      twitter_description: "",
      twitter_image: "",

      canonical_url: "",

      robots: "index, follow",

      schema: "",

      gtag_head: "",

      custom_head: "",
    },
  })

  const onSubmit = async (
    formData: SeoFormValues
  ) => {
    await request({
        url: "/api/seo/add",
        method: "POST",
        data: {
          data: formData,
        },
    })
    console.log(formData)
  }



  return (
    <Card className="max-w-3xl">

      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          SEO Settings
        </CardTitle>
      </CardHeader>

      <CardContent>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
        >

          <FieldGroup className="space-y-1">

            {/* Page URL */}

            <Controller
              name="page_url"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>

                  <FieldLabel>
                    Page URL
                  </FieldLabel>

                  <Input
                    {...field}
                    placeholder="/property/abc"
                  />

                  {
                    fieldState.invalid && (
                      <FieldError
                        errors={[fieldState.error]}
                      />
                    )
                  }

                </Field>
              )}
            />

            {/* Meta Title */}

            <Controller
              name="meta_title"
              control={form.control}
              render={({ field }) => (
                <Field>

                  <FieldLabel>
                    Meta Title
                  </FieldLabel>

                  <Input
                    {...field}
                    placeholder="Meta title"
                  />

                </Field>
              )}
            />

            {/* Meta Description */}

            <Controller
              name="meta_description"
              control={form.control}
              render={({ field }) => (
                <Field>

                  <FieldLabel>
                    Meta Description
                  </FieldLabel>

                  <Textarea
                    {...field}
                    placeholder="Meta description"
                  />

                </Field>
              )}
            />

            {/* Meta Keywords */}

            <Controller
              name="meta_keywords"
              control={form.control}
              render={({ field }) => (
                <Field>

                  <FieldLabel>
                    Meta Keywords
                  </FieldLabel>

                  <Input
                    {...field}
                    placeholder="real estate, property"
                  />

                </Field>
              )}
            />

            {/* OG Section */}

            <div className="border rounded-lg p-4 space-y-4">

              <h2 className="font-bold text-lg">
                Open Graph
              </h2>

              <Controller
                name="og_title"
                control={form.control}
                render={({ field }) => (
                  <Field>

                    <FieldLabel>
                      OG Title
                    </FieldLabel>

                    <Input {...field} />

                  </Field>
                )}
              />

              <Controller
                name="og_description"
                control={form.control}
                render={({ field }) => (
                  <Field>

                    <FieldLabel>
                      OG Description
                    </FieldLabel>

                    <Textarea {...field} />

                  </Field>
                )}
              />

              <Controller
                name="og_image"
                control={form.control}
                render={({ field }) => (
                  <Field>

                    <FieldLabel>
                      OG Image
                    </FieldLabel>

                    <Input {...field} />

                  </Field>
                )}
              />

            </div>

            {/* Twitter */}

            <div className="border rounded-lg p-4 space-y-4">

              <h2 className="font-bold text-lg">
                Twitter
              </h2>

              <Controller
                name="twitter_title"
                control={form.control}
                render={({ field }) => (
                  <Field>

                    <FieldLabel>
                      Twitter Title
                    </FieldLabel>

                    <Input {...field} />

                  </Field>
                )}
              />

              <Controller
                name="twitter_description"
                control={form.control}
                render={({ field }) => (
                  <Field>

                    <FieldLabel>
                      Twitter Description
                    </FieldLabel>

                    <Textarea {...field} />

                  </Field>
                )}
              />

              <Controller
                name="twitter_image"
                control={form.control}
                render={({ field }) => (
                  <Field>

                    <FieldLabel>
                      Twitter Image
                    </FieldLabel>

                    <Input {...field} />

                  </Field>
                )}
              />

            </div>

            {/* Canonical */}

            <Controller
              name="canonical_url"
              control={form.control}
              render={({ field }) => (
                <Field>

                  <FieldLabel>
                    Canonical URL
                  </FieldLabel>

                  <Input
                    {...field}
                    placeholder="https://example.com/page"
                  />

                </Field>
              )}
            />

            {/* Robots */}

            <Controller
              name="robots"
              control={form.control}
              render={({ field }) => (
                <Field>

                  <FieldLabel>
                    Robots
                  </FieldLabel>

                  <Input
                    {...field}
                    placeholder="index, follow"
                  />

                </Field>
              )}
            />

            {/* Schema */}

            <Controller
              name="schema"
              control={form.control}
              render={({ field }) => (
                <Field>

                  <FieldLabel>
                    Schema JSON
                  </FieldLabel>

                  <Textarea
                    {...field}
                    rows={8}
                    placeholder='{"@context":"https://schema.org"}'
                  />

                </Field>
              )}
            />

            {/* GTAG */}

            <Controller
              name="gtag_head"
              control={form.control}
              render={({ field }) => (
                <Field>

                  <FieldLabel>
                    GTAG Script
                  </FieldLabel>

                  <Textarea
                    {...field}
                    rows={6}
                  />

                </Field>
              )}
            />

            {/* Custom Head */}

            <Controller
              name="custom_head"
              control={form.control}
              render={({ field }) => (
                <Field>

                  <FieldLabel>
                    Custom Head Tags
                  </FieldLabel>

                  <Textarea
                    {...field}
                    rows={6}
                  />

                </Field>
              )}
            />

            <Button type="submit">
              Save SEO
            </Button>

          </FieldGroup>

        </form>

      </CardContent>

    </Card>
  )
}