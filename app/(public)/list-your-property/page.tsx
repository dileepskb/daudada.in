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
      <form
        className="bg-white rounded-3xl border border-brand-cream p-8 space-y-4"
        data-testid="post-property-form"
      >
        <h2 className="font-display text-3xl font-medium mb-1">
          Property Details
        </h2>
        <p className="text-sm text-brand-ink-soft mb-4">
          All fields marked * are required.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs uppercase tracking-wider text-brand-ink-soft mb-1.5 block">
              Your Name *
            </label>
            <input
              className="flex w-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-11 rounded-xl"
              data-testid="pp-name"
              required
              defaultValue=""
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-brand-ink-soft mb-1.5 block">
              Phone *
            </label>
            <input
              className="flex w-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-11 rounded-xl"
              data-testid="pp-phone"
              required
              defaultValue=""
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-xs uppercase tracking-wider text-brand-ink-soft mb-1.5 block">
              Email
            </label>
            <input
              className="flex w-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-11 rounded-xl"
              data-testid="pp-email"
              type="email"
              defaultValue=""
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-brand-ink-soft mb-1.5 block">
              Location *
            </label>
            <button
              type="button"
              role="combobox"
              aria-controls="radix-_r_1k_"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              className="flex w-full items-center justify-between whitespace-nowrap border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 h-11 rounded-xl"
              data-testid="pp-location"
            >
              <span style={{ pointerEvents: "none" }}>Govardhan</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <select
              aria-hidden="true"
              tabIndex={-1}
              style={{
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0px, 0px, 0px, 0px)",
                whiteSpace: "nowrap",
                overflowWrap: "normal"
              }}
            >
              <option value="Govardhan" selected>
                Govardhan
              </option>
              <option value="Vrindavan">Vrindavan</option>
              <option value="Mathura">Mathura</option>
              <option value="Barsana">Barsana</option>
              <option value="Jatipura">Jatipura</option>
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-brand-ink-soft mb-1.5 block">
              Property Type *
            </label>
            <button
              type="button"
              role="combobox"
              aria-controls="radix-_r_1l_"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              className="flex w-full items-center justify-between whitespace-nowrap border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 h-11 rounded-xl"
              data-testid="pp-type"
            >
              <span style={{ pointerEvents: "none" }}>Plot</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <select
              aria-hidden="true"
              tabIndex={-1}
              style={{
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0px, 0px, 0px, 0px)",
                whiteSpace: "nowrap",
                overflowWrap: "normal"
              }}
            >
              <option value="plot" selected>
                Plot
              </option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="farmhouse">Farmhouse</option>
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-brand-ink-soft mb-1.5 block">
              Area *
            </label>
            <input
              className="flex w-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-11 rounded-xl"
              data-testid="pp-area"
              required
              min={0}
              step="0.01"
              type="number"
              defaultValue=""
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-brand-ink-soft mb-1.5 block">
              Unit
            </label>
            <button
              type="button"
              role="combobox"
              aria-controls="radix-_r_1m_"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              className="flex w-full items-center justify-between whitespace-nowrap border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 h-11 rounded-xl"
              data-testid="pp-unit"
            >
              <span style={{ pointerEvents: "none" }}>Sq. Yard</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <select
              aria-hidden="true"
              tabIndex={-1}
              style={{
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0px, 0px, 0px, 0px)",
                whiteSpace: "nowrap",
                overflowWrap: "normal"
              }}
            >
              <option value="sqyd" selected>
                Sq. Yard
              </option>
              <option value="sqft">Sq. Ft</option>
              <option value="bigha">Bigha</option>
              <option value="acre">Acre</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="text-xs uppercase tracking-wider text-brand-ink-soft mb-1.5 block">
              Expected Price
            </label>
            <input
              className="flex w-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-11 rounded-xl"
              data-testid="pp-price"
              placeholder="e.g. ₹45 Lakh"
              defaultValue=""
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-xs uppercase tracking-wider text-brand-ink-soft mb-1.5 block">
              Notes
            </label>
            <textarea
              className="flex min-h-[60px] w-full border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-xl"
              data-testid="pp-desc"
              rows={4}
              defaultValue={""}
            />
          </div>
        </div>
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow px-4 py-2 w-full h-12 rounded-xl bg-brand-red text-white hover:bg-brand-red-dark shadow-brand"
          data-testid="pp-submit-btn"
        >
          Submit Listing Request
        </button>
      </form>
    </div>
  </div>
</main>

    )
}