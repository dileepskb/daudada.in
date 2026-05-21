"use client"
import { Field, FieldError } from "@/components/ui/field"
import { useApi } from "@/utils/useApi"
import { useRouter } from "next/navigation"
import { useForm, Controller } from "react-hook-form"
type SeoFormValues = {
  name: string
  phone: string
  email: string
  location: string
  property_type: string
  area: string
  unit: string
  expected_price: string
  notes: string
}
export default function ContactForm() {
const router = useRouter()

  const { pending, data, error, request } = useApi()
  const form = useForm<SeoFormValues>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      location: "",
      property_type: "",
      area: "",
      unit: "",

      expected_price: "",
      notes: "",
    },
  })

 const onSubmit = async (
  formData: SeoFormValues
) => {

  const res = await request({

    url: "/api/lead/add",

    method: "POST",

    data: {
      data: formData,
    },
  })

  if (res?.success) {

    router.push("/thankyou")
  }
}
  return (
    <form
      className="border-brand-cream space-y-4 rounded-3xl border bg-white p-8"
      data-testid="post-property-form"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <h2 className="font-display mb-1 text-3xl font-medium">
        Send Us Your Requirements
      </h2>
      <p className="text-brand-ink-soft mb-4 text-sm">
        All fields marked * are required.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <label className="text-brand-ink-soft mb-1.5 block text-xs tracking-wider uppercase">
                  Your Name *
                </label>
                <input
                  {...field}
                  className="flex h-11 w-full rounded-xl border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  data-testid="pp-name"
                  required
                  defaultValue=""
                  placeholder="Your Name"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
        <div>
          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <label className="text-brand-ink-soft mb-1.5 block text-xs tracking-wider uppercase">
                  Phone *
                </label>
                <input
                  {...field}
                  className="flex h-11 w-full rounded-xl border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  data-testid="pp-name"
                  required
                  defaultValue=""
                  placeholder="Phone"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
        <div className="md:col-span-2">
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <label className="text-brand-ink-soft mb-1.5 block text-xs tracking-wider uppercase">
                  Email *
                </label>
                <input
                  {...field}
                  className="flex h-11 w-full rounded-xl border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  data-testid="pp-name"
                  required
                  defaultValue=""
                  placeholder="Email"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
        <div>
          <Controller
            name="location"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <label className="text-brand-ink-soft mb-1.5 block text-xs tracking-wider uppercase">
                  Location *
                </label>
<select
required
                  value={field.value}
                  onChange={field.onChange}
                  className="flex h-11 w-full rounded-xl border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                >
                  <option value="">Select Location</option>
                  <option value="Govardhan"> Govardhan</option>
                  <option value="Jatipura">Jatipura</option>
                  <option value="Vrindavan">Vrindavan</option>
                  <option value="Barsana">Barsana</option>
                  <option value="Mathura">Mathura</option>
                  <option value="Ring Road">Ring Road</option>
                  <option value="Poonchri">Poonchri</option>
                </select>
                

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
        <div>
          <Controller
            name="property_type"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <label className="text-brand-ink-soft mb-1.5 block text-xs tracking-wider uppercase">
                  Property Type 
                </label>
    <select
                  value={field.value}
                  onChange={field.onChange}
                  className="flex h-11 w-full rounded-xl border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                >
                  <option value="">Select Property Type</option>
                  <option value="Agricultural Land"> Agricultural Land</option>
                  <option value="Built Villa">Built Villa</option>
                  <option value="Shop / Commercial">Shop / Commercial</option>
                  <option value="Farmhouse">Farmhouse</option>
                </select>
                
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
        <div>
          <Controller
            name="area"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <label className="text-brand-ink-soft mb-1.5 block text-xs tracking-wider uppercase">
                  Area
                </label>
                <input
                  {...field}
                  className="flex h-11 w-full rounded-xl border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  data-testid="pp-name"
               
                  defaultValue=""
                  placeholder="Area"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
        <div>
          <Controller
            name="unit"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <label className="text-brand-ink-soft mb-1.5 block text-xs tracking-wider uppercase">
                  Unit Type 
                </label>

                <select
                  value={field.value}
                  onChange={field.onChange}
                  className="flex h-11 w-full rounded-xl border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                >
                  <option value="">Select Location</option>
                  <option value="Sq. Yard">Sq. Yard</option>
                  <option value="Sq. Ft">Sq. Ft</option>
                  <option value="Bigha">Bigha</option>
                  <option value="Acre">Acre</option>
                </select>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
        <div className="md:col-span-2">
          <Controller
            name="expected_price"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <label className="text-brand-ink-soft mb-1.5 block text-xs tracking-wider uppercase">
                  Expected Price
                </label>
                <input
                  {...field}
                  className="flex h-11 w-full rounded-xl border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  data-testid="pp-name"
                  
                  defaultValue=""
                  placeholder="e.g. ₹45 Lakh"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
        <div className="md:col-span-2">
          <Controller
            name="notes"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <label className="text-brand-ink-soft mb-1.5 block text-xs tracking-wider uppercase">
                  Notes
                </label>
                <textarea
                  {...field}
                  className="flex w-full rounded-xl border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  data-testid="pp-name"
                  rows={4}
                  defaultValue=""
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
      </div>
      <button
        className="cursor-pointer hover:bg-brand-red-dark shadow-brand inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-red px-4 py-2 text-sm font-medium whitespace-nowrap text-white shadow transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
        data-testid="pp-submit-btn"
        type="submit"
      >
        {pending ? "Submitting" : "Submit Listing Request"}
      </button>
    </form>
  )
}
