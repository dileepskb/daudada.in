export default function Services(){
    return(
        <main className="flex-1">
  <section
    className="py-20 bg-gradient-to-b from-brand-cream/50 to-brand-ivory border-t border-b border-brand-cream"
    data-testid="legal-wing-section"
  >
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] bg-brand-red/10 text-brand-red px-3 py-1.5 rounded-full">
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
            className="lucide lucide-sparkles w-3.5 h-3.5"
            aria-hidden="true"
          >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            <path d="M20 3v4" />
            <path d="M22 5h-4" />
            <path d="M4 17v2" />
            <path d="M5 18H3" />
          </svg>{" "}
          Legal Security Wing
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4 text-brand-ink">
          Property Verification &amp;{" "}
          <em className="not-italic text-brand-red">Legal Services</em>
        </h2>
        <p className="text-brand-ink-soft font-light leading-relaxed">
          Braj region mein zameen kharidna ek{" "}
          <strong className="text-brand-ink">ashirwad</strong> hona chahiye,
          legal bojh nahi. Hamare expert property lawyers karte hain har
          document ki{" "}
          <strong className="text-brand-ink">30-year title search</strong>{" "}
          verification.
        </p>
      </div>
      <div
        className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto"
        data-testid="legal-filter-bar"
      >
        <button
          data-testid="legal-filter-all"
          className="px-5 py-2 rounded-full text-sm font-semibold transition-all bg-brand-red text-white shadow-brand"
        >
          All Locations
        </button>
        <button
          data-testid="legal-filter-jatipura"
          className="px-5 py-2 rounded-full text-sm font-semibold transition-all bg-white text-brand-ink border border-brand-cream hover:bg-brand-cream"
        >
          Jatipura
        </button>
        <button
          data-testid="legal-filter-goverdhan"
          className="px-5 py-2 rounded-full text-sm font-semibold transition-all bg-white text-brand-ink border border-brand-cream hover:bg-brand-cream"
        >
          Goverdhan
        </button>
        <button
          data-testid="legal-filter-vrindavan"
          className="px-5 py-2 rounded-full text-sm font-semibold transition-all bg-white text-brand-ink border border-brand-cream hover:bg-brand-cream"
        >
          Vrindavan
        </button>
        <button
          data-testid="legal-filter-barsana"
          className="px-5 py-2 rounded-full text-sm font-semibold transition-all bg-white text-brand-ink border border-brand-cream hover:bg-brand-cream"
        >
          Barsana
        </button>
        <button
          data-testid="legal-filter-mathura"
          className="px-5 py-2 rounded-full text-sm font-semibold transition-all bg-white text-brand-ink border border-brand-cream hover:bg-brand-cream"
        >
          Mathura
        </button>
        <button
          data-testid="legal-filter-others"
          className="px-5 py-2 rounded-full text-sm font-semibold transition-all bg-brand-gold/15 text-brand-ink border border-brand-gold/40 hover:bg-brand-gold/25"
        >
          📍 Other Locations
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        <div
          data-testid="legal-service-0"
          className="relative bg-white p-8 rounded-2xl shadow-soft border border-brand-cream hover:-translate-y-1 hover:shadow-xl transition-all overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-red" />
          <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-gavel w-6 h-6 text-brand-red"
              aria-hidden="true"
            >
              <path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" />
              <path d="m16 16 6-6" />
              <path d="m8 8 6-6" />
              <path d="m9 7 8 8" />
              <path d="m21 11-8-8" />
            </svg>
          </div>
          <h3 className="font-display text-2xl font-medium mb-3 text-brand-ink">
            30-Year Title Search
          </h3>
          <p className="text-sm text-brand-ink-soft leading-relaxed mb-5 font-light">
            Zameen ke purane 30 saal ke records ki poori jaanch, taaki future
            mein koi maalik apna haq na jata sake.
          </p>
          <span
            className="inline-block text-xs font-semibold text-brand-red bg-brand-red/10 px-3 py-1.5 rounded-full"
            data-testid="legal-badge-area-0"
          >
            Available in Braj Region
          </span>
        </div>
        <div
          data-testid="legal-service-1"
          className="relative bg-white p-8 rounded-2xl shadow-soft border border-brand-cream hover:-translate-y-1 hover:shadow-xl transition-all overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-red" />
          <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shield w-6 h-6 text-brand-red"
              aria-hidden="true"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            </svg>
          </div>
          <h3 className="font-display text-2xl font-medium mb-3 text-brand-ink">
            MVDA &amp; RERA Verification
          </h3>
          <p className="text-sm text-brand-ink-soft leading-relaxed mb-5 font-light">
            Mathura Vrindavan Development Authority (MVDA) ke master plan aur
            green zone / demolition orders ki strict checking.
          </p>
          <span
            className="inline-block text-xs font-semibold text-brand-red bg-brand-red/10 px-3 py-1.5 rounded-full"
            data-testid="legal-badge-area-1"
          >
            Available in Braj Region
          </span>
        </div>
        <div
          data-testid="legal-service-2"
          className="relative bg-white p-8 rounded-2xl shadow-soft border border-brand-cream hover:-translate-y-1 hover:shadow-xl transition-all overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-red" />
          <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin w-6 h-6 text-brand-red"
              aria-hidden="true"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx={12} cy={10} r={3} />
            </svg>
          </div>
          <h3 className="font-display text-2xl font-medium mb-3 text-brand-ink">
            On-Ground Boundary Check
          </h3>
          <p className="text-sm text-brand-ink-soft leading-relaxed mb-5 font-light">
            Sirf kagaz nahi, mauke par jaakar physical boundary measurement aur
            aas-paas ke padosiyo se dispute ki confirmation.
          </p>
          <span
            className="inline-block text-xs font-semibold text-brand-red bg-brand-red/10 px-3 py-1.5 rounded-full"
            data-testid="legal-badge-area-2"
          >
            Available in Braj Region
          </span>
        </div>
      </div>
      <div
        data-testid="legal-other-locations-cta"
        className="mt-12 p-8 md:p-10 bg-brand-ink text-white rounded-3xl shadow-xl relative overflow-hidden"
      >
        <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-brand-red/30 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-brand-gold/15 blur-3xl" />
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="font-display text-2xl md:text-3xl font-medium mb-3 flex items-center gap-3">
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
                className="lucide lucide-compass w-7 h-7 text-brand-gold animate-pulse"
                aria-hidden="true"
              >
                <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
                <circle cx={12} cy={12} r={10} />
              </svg>
              Braj se bahar ya kisi aur jagha zameen hai?
            </h4>
            <p className="text-sm md:text-base opacity-90 font-light leading-relaxed">
              Agar aapki property Jatipura, Goverdhan, Vrindavan, Barsana ya
              Mathura ke alawa kisi aur location par bhi hai, toh chinta na
              karein.{" "}
              <strong className="text-brand-gold">Dau Dada Properties</strong>{" "}
              ki expert legal team wahan ke local revenue records nikalwane aur
              verification karne mein aapki poori madad karegi.
            </p>
          </div>
          <a
            href="mailto:properties@daudada.in"
            data-testid="legal-cta-mail"
            className="inline-flex items-center gap-2 bg-white text-brand-red hover:bg-brand-gold hover:text-brand-ink font-bold px-6 py-3.5 rounded-full text-sm shadow-md whitespace-nowrap transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail w-4 h-4"
              aria-hidden="true"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x={2} y={4} width={20} height={16} rx={2} />
            </svg>{" "}
            Consult Our Lawyer
          </a>
        </div>
      </div>
    </div>
  </section>
  <section
    className="py-16 md:py-24 bg-brand-ivory"
    data-testid="scope-of-work-section"
  >
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] bg-brand-red/10 text-brand-red px-3 py-1.5 rounded-full border border-brand-red/15">
          Scope of Work
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mt-5 mb-4 text-brand-ink tracking-tight leading-tight">
          More Than Brokers.
          <br />
          <em className="not-italic text-brand-red">We Are Consultants.</em>
        </h1>
        <p className="text-brand-ink-soft text-base md:text-lg leading-relaxed font-light">
          Every service we provide is designed around one strict principle:{" "}
          <strong className="text-brand-ink font-semibold">
            your land must be 100% legally clean
          </strong>{" "}
          before money changes hands. Click any service for a full breakdown.
        </p>
      </div>
      <div
        className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4 mb-10"
        data-testid="scope-buttons"
      >
        <button
          data-testid="scope-btn-legal"
          className="relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-5 rounded-2xl border transition-all duration-200 text-center group border-brand-cream bg-white text-brand-ink-soft hover:border-brand-ink/30 hover:text-brand-ink"
        >
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
            className="lucide lucide-scale w-7 h-7 md:w-8 md:h-8 mb-3 group-hover:scale-110 transition-transform duration-200"
            aria-hidden="true"
          >
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="M7 21h10" />
            <path d="M12 3v18" />
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
          </svg>
          <span className="text-[11px] md:text-xs font-bold tracking-tight leading-tight">
            Legal Support
          </span>
        </button>
        <button
          data-testid="scope-btn-mvda"
          className="relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-5 rounded-2xl border transition-all duration-200 text-center group border-brand-cream bg-white text-brand-ink-soft hover:border-brand-ink/30 hover:text-brand-ink"
        >
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
            className="lucide lucide-building2 lucide-building-2 w-7 h-7 md:w-8 md:h-8 mb-3 group-hover:scale-110 transition-transform duration-200"
            aria-hidden="true"
          >
            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
            <path d="M10 6h4" />
            <path d="M10 10h4" />
            <path d="M10 14h4" />
            <path d="M10 18h4" />
          </svg>
          <span className="text-[11px] md:text-xs font-bold tracking-tight leading-tight">
            MVDA Check
          </span>
        </button>
        <button
          data-testid="scope-btn-ground"
          className="relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-5 rounded-2xl border transition-all duration-200 text-center group border-brand-cream bg-white text-brand-ink-soft hover:border-brand-ink/30 hover:text-brand-ink"
        >
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
            className="lucide lucide-map-pinned w-7 h-7 md:w-8 md:h-8 mb-3 group-hover:scale-110 transition-transform duration-200"
            aria-hidden="true"
          >
            <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" />
            <circle cx={12} cy={8} r={2} />
            <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" />
          </svg>
          <span className="text-[11px] md:text-xs font-bold tracking-tight leading-tight">
            Ground Verify
          </span>
        </button>
        <button
          data-testid="scope-btn-drafting"
          className="relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-5 rounded-2xl border transition-all duration-200 text-center group border-brand-red bg-brand-red/5 text-brand-red shadow-soft"
        >
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
            className="lucide lucide-file-pen-line w-7 h-7 md:w-8 md:h-8 mb-3 group-hover:scale-110 transition-transform duration-200"
            aria-hidden="true"
          >
            <path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
            <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
            <path d="M8 18h1" />
          </svg>
          <span className="text-[11px] md:text-xs font-bold tracking-tight leading-tight">
            Doc Drafting
          </span>
          <div className="absolute bottom-0 inset-x-0 h-1 bg-brand-red" />
        </button>
        <button
          data-testid="scope-btn-registry"
          className="relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-5 rounded-2xl border transition-all duration-200 text-center group border-brand-cream bg-white text-brand-ink-soft hover:border-brand-ink/30 hover:text-brand-ink"
        >
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
            className="lucide lucide-pen-tool w-7 h-7 md:w-8 md:h-8 mb-3 group-hover:scale-110 transition-transform duration-200"
            aria-hidden="true"
          >
            <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
            <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
            <path d="m2.3 2.3 7.286 7.286" />
            <circle cx={11} cy={11} r={2} />
          </svg>
          <span className="text-[11px] md:text-xs font-bold tracking-tight leading-tight">
            Registry Help
          </span>
        </button>
        <button
          data-testid="scope-btn-advisory"
          className="relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-5 rounded-2xl border transition-all duration-200 text-center group border-brand-cream bg-white text-brand-ink-soft hover:border-brand-ink/30 hover:text-brand-ink"
        >
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
            className="lucide lucide-trending-up w-7 h-7 md:w-8 md:h-8 mb-3 group-hover:scale-110 transition-transform duration-200"
            aria-hidden="true"
          >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
          <span className="text-[11px] md:text-xs font-bold tracking-tight leading-tight">
            Investment Adv
          </span>
        </button>
        <button
          data-testid="scope-btn-insurance"
          className="relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-5 rounded-2xl border transition-all duration-200 text-center group border-brand-cream bg-white text-brand-ink-soft hover:border-brand-ink/30 hover:text-brand-ink"
        >
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
            className="lucide lucide-shield-check w-7 h-7 md:w-8 md:h-8 mb-3 group-hover:scale-110 transition-transform duration-200"
            aria-hidden="true"
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <span className="text-[11px] md:text-xs font-bold tracking-tight leading-tight">
            Title Insurance
          </span>
        </button>
        <button
          data-testid="scope-btn-strategy"
          className="relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-5 rounded-2xl border transition-all duration-200 text-center group border-brand-cream bg-white text-brand-ink-soft hover:border-brand-ink/30 hover:text-brand-ink"
        >
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
            className="lucide lucide-compass w-7 h-7 md:w-8 md:h-8 mb-3 group-hover:scale-110 transition-transform duration-200"
            aria-hidden="true"
          >
            <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
            <circle cx={12} cy={12} r={10} />
          </svg>
          <span className="text-[11px] md:text-xs font-bold tracking-tight leading-tight">
            Location Strat
          </span>
        </button>
      </div>
      <div
        data-testid="scope-display-card"
        className="fade-up bg-white rounded-3xl p-6 md:p-12 border border-brand-cream shadow-soft min-h-[240px] flex items-center"
      >
        <div className="w-full grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider mb-4 px-2.5 py-1 rounded-md text-blue-700 bg-blue-50">
              Bulletproof Paperwork
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-medium text-brand-ink mb-4 flex items-center gap-3">
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
                className="lucide lucide-file-pen-line w-7 h-7 md:w-8 md:h-8 text-brand-red"
                aria-hidden="true"
              >
                <path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
                <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
                <path d="M8 18h1" />
              </svg>
              Document Drafting
            </h3>
            <p className="text-brand-ink-soft leading-relaxed text-base md:text-lg font-light mb-6">
              Custom-tailored Sale Agreements (Bayana), Gift Deeds,
              Relinquishment papers, and Power of Attorneys (POAs) — drafted
              flawlessly to MVDA-compliant standards.
            </p>
            <a
              data-testid="scope-learn-more-drafting"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-red text-white text-sm font-semibold hover:bg-brand-red-dark transition-colors shadow-brand"
              href="/services/doc-drafting"
              data-discover="true"
            >
              Learn more about Doc Drafting
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
                className="lucide lucide-arrow-right w-4 h-4"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="bg-brand-cream/40 p-6 rounded-2xl border border-brand-cream">
            <h4 className="text-[10px] font-bold uppercase text-brand-ink-soft tracking-[0.25em] mb-2">
              Clause Matrix
            </h4>
            <p className="text-sm text-brand-ink-soft leading-relaxed font-light">
              Airtight financial exit clauses, payment-milestone protection, and
              default penalty timelines.
            </p>
          </div>
        </div>
      </div>
      <div
        className="mt-12 bg-gradient-to-r from-brand-red to-brand-red-dark rounded-3xl p-8 md:p-10 text-white relative overflow-hidden shadow-brand"
        data-testid="scope-trust-banner"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-heart-handshake absolute -right-6 -bottom-6 w-48 h-48 opacity-10"
          aria-hidden="true"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
          <path d="m18 15-2-2" />
          <path d="m15 18-2-2" />
        </svg>
        <div className="relative max-w-2xl">
          <h3 className="font-display text-2xl md:text-3xl font-medium mb-2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-check w-6 h-6 text-brand-gold"
              aria-hidden="true"
            >
              <circle cx={12} cy={12} r={10} />
              <path d="m9 12 2 2 4-4" />
            </svg>
            Our Absolute Zero-Risk Mandate
          </h3>
          <p className="text-red-100 text-sm md:text-base leading-relaxed font-light">
            If a plot fails to satisfy even one metric in our 8-step compliance
            check, we advise you to walk away. No commission is worth your
            hard-earned wealth.
          </p>
        </div>
      </div>
    </div>
  </section>
  <div
    className="max-w-7xl mx-auto px-6 md:px-10 py-16"
    data-testid="services-page"
  >
    <div className="bg-brand-cream rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="font-display text-4xl font-medium text-brand-ink mb-4">
          Have a specific concern?
        </h2>
        <p className="text-brand-ink-soft font-light mb-6">
          Tell us your situation — we&apos;ll review it free of cost and tell you
          exactly what&apos;s needed to make your purchase or sale safe.
        </p>
        <a href="/contact" data-discover="true">
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-9 rounded-full bg-brand-red text-white hover:bg-brand-red-dark px-8 py-6 shadow-brand"
            data-testid="services-cta-btn"
          >
            Talk to Our Lawyer
          </button>
        </a>
      </div>
      <img
        className="rounded-2xl w-full"
        alt="legal scale"
        src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?auto=format&fit=crop&w=900&q=80"
      />
    </div>
  </div>
</main>

    )
}