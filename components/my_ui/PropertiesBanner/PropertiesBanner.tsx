export default function PropertiesBanner(){
    return(
        <section className="relative" data-testid="properties-banner">
      <div className="absolute inset-0">
        <img
          alt="Brij"
          className="w-full h-full object-cover"
          src="/images/propertybanner.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/85 via-brand-ink/65 to-brand-ink/40" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 text-white">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/90 text-white text-[10px] tracking-[0.25em] uppercase font-semibold mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shield-check w-3.5 h-3.5"
            aria-hidden="true"
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="m9 12 2 2 4-4" />
          </svg>{" "}
          Verified Listings
        </div>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] tracking-tight max-w-3xl">
          Properties in the <em className="text-brand-gold not-italic">Brij</em>
        </h1>
        <p className="mt-5 max-w-2xl text-lg font-light opacity-90">
          Every plot, home and commercial space below carries a 30-year title
          search and MVDA cross-check.
        </p>
      </div>
    </section>
    )
}