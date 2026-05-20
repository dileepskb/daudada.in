import ListEnquiryForm from "@/components/my_ui/ListEnquiryForm/ListEnquiryForm"

export default function ListYourProperty(){
  
    return(
        <main className="flex-1">
  <div
    className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid lg:grid-cols-5 gap-12"
    data-testid="post-property-page"
  >
    <div className="lg:col-span-2">
      <div className="text-xs uppercase tracking-[0.25em] text-brand-red mb-2">
        List Your Property
      </div>
      <h1 className="font-display text-5xl font-medium text-brand-ink mb-5">
        Let your land find the{" "}
        <em className="not-italic text-brand-red">right hands</em>.
      </h1>
      <p className="text-brand-ink-soft font-light leading-relaxed mb-8">
        Submit your property details below. Our consultant will visit your site,
        verify the documents, and put you in front of serious, vetted buyers
        within 7 days.
      </p>
      <div className="space-y-4">
        <div className="flex gap-4 items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shield-check w-6 h-6 text-brand-red mt-0.5"
            aria-hidden="true"
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <div>
            <div className="font-medium text-brand-ink">
              Free legal pre-check
            </div>
            <div className="text-sm text-brand-ink-soft font-light">
              We verify your title chain at no cost.
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-users w-6 h-6 text-brand-red mt-0.5"
            aria-hidden="true"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <path d="M16 3.128a4 4 0 0 1 0 7.744" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <circle cx={9} cy={7} r={4} />
          </svg>
          <div>
            <div className="font-medium text-brand-ink">
              Vetted buyer network
            </div>
            <div className="text-sm text-brand-ink-soft font-light">
              Devotees, NRIs and Brij investors on our list.
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-badge-check w-6 h-6 text-brand-red mt-0.5"
            aria-hidden="true"
          >
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <div>
            <div className="font-medium text-brand-ink">
              End-to-end paperwork
            </div>
            <div className="text-sm text-brand-ink-soft font-light">
              Drafting, registry &amp; mutation handled for you.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="lg:col-span-3">
      <ListEnquiryForm />
    </div>
  </div>
</main>

    )
}