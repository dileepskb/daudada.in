export default function Service(){
    return(
        <main className="flex-1">
  <div
    className="max-w-7xl mx-auto px-6 md:px-10 py-16"
    data-testid="services-page"
  >
    <div className="max-w-3xl mb-16">
      <div className="text-xs uppercase tracking-[0.25em] text-brand-red mb-2">
        What we offer
      </div>
      <h1 className="font-display text-5xl md:text-6xl font-medium text-brand-ink mb-5">
        More than brokers. We are{" "}
        <em className="not-italic text-brand-red">consultants</em>.
      </h1>
      <p className="text-lg text-brand-ink-soft font-light leading-relaxed">
        Every service we provide is designed around one principle: your land
        must be 100% legally clean before money changes hands. Here is our full
        scope of work — included with every transaction we represent.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        data-testid="service-card-0"
        className="bg-white rounded-2xl p-7 border border-brand-cream hover:border-brand-gold/40 hover:-translate-y-1 transition-all"
      >
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
            className="lucide lucide-scale w-6 h-6 text-brand-red"
            aria-hidden="true"
          >
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="M7 21h10" />
            <path d="M12 3v18" />
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-medium text-brand-ink mb-3">
          Legal Support Wing
        </h3>
        <p className="text-sm text-brand-ink-soft font-light leading-relaxed">
          30-year title chain, legal opinion, and registry assistance — handled
          by our in-house lawyer Adv. Nitin Gautam.
        </p>
      </div>
      <div
        data-testid="service-card-1"
        className="bg-white rounded-2xl p-7 border border-brand-cream hover:border-brand-gold/40 hover:-translate-y-1 transition-all"
      >
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
            className="lucide lucide-file-search w-6 h-6 text-brand-red"
            aria-hidden="true"
          >
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
            <path d="m9 18-1.5-1.5" />
            <circle cx={5} cy={14} r={3} />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-medium text-brand-ink mb-3">
          MVDA Compliance Check
        </h3>
        <p className="text-sm text-brand-ink-soft font-light leading-relaxed">
          Cross-verify with the latest Mathura Vrindavan Development Authority
          master plan, zone maps and acquisition notices.
        </p>
      </div>
      <div
        data-testid="service-card-2"
        className="bg-white rounded-2xl p-7 border border-brand-cream hover:border-brand-gold/40 hover:-translate-y-1 transition-all"
      >
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
            className="lucide lucide-eye w-6 h-6 text-brand-red"
            aria-hidden="true"
          >
            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
            <circle cx={12} cy={12} r={3} />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-medium text-brand-ink mb-3">
          Ground Verification
        </h3>
        <p className="text-sm text-brand-ink-soft font-light leading-relaxed">
          Site visits with a registered surveyor, neighbour confirmation, and
          physical boundary measurement.
        </p>
      </div>
      <div
        data-testid="service-card-3"
        className="bg-white rounded-2xl p-7 border border-brand-cream hover:border-brand-gold/40 hover:-translate-y-1 transition-all"
      >
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
            className="lucide lucide-file-text w-6 h-6 text-brand-red"
            aria-hidden="true"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10 9H8" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-medium text-brand-ink mb-3">
          Document Drafting
        </h3>
        <p className="text-sm text-brand-ink-soft font-light leading-relaxed">
          Sale agreements, gift deeds, and POAs drafted to MVDA-compliant
          standards.
        </p>
      </div>
      <div
        data-testid="service-card-4"
        className="bg-white rounded-2xl p-7 border border-brand-cream hover:border-brand-gold/40 hover:-translate-y-1 transition-all"
      >
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
            className="lucide lucide-stamp w-6 h-6 text-brand-red"
            aria-hidden="true"
          >
            <path d="M5 22h14" />
            <path d="M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z" />
            <path d="M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-medium text-brand-ink mb-3">
          Registry Assistance
        </h3>
        <p className="text-sm text-brand-ink-soft font-light leading-relaxed">
          We accompany you to the sub-registrar and ensure stamp duty, mutation,
          and intkal are filed correctly.
        </p>
      </div>
      <div
        data-testid="service-card-5"
        className="bg-white rounded-2xl p-7 border border-brand-cream hover:border-brand-gold/40 hover:-translate-y-1 transition-all"
      >
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
            className="lucide lucide-banknote w-6 h-6 text-brand-red"
            aria-hidden="true"
          >
            <rect width={20} height={12} x={2} y={6} rx={2} />
            <circle cx={12} cy={12} r={2} />
            <path d="M6 12h.01M18 12h.01" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-medium text-brand-ink mb-3">
          Investment Advisory
        </h3>
        <p className="text-sm text-brand-ink-soft font-light leading-relaxed">
          Locality price trends, future appreciation, and exit liquidity
          analysis for first-time buyers.
        </p>
      </div>
      <div
        data-testid="service-card-6"
        className="bg-white rounded-2xl p-7 border border-brand-cream hover:border-brand-gold/40 hover:-translate-y-1 transition-all"
      >
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
            className="lucide lucide-shield-check w-6 h-6 text-brand-red"
            aria-hidden="true"
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-medium text-brand-ink mb-3">
          Title Insurance Tie-ups
        </h3>
        <p className="text-sm text-brand-ink-soft font-light leading-relaxed">
          Optional title insurance for high-value plots, sourced through our
          network of partners.
        </p>
      </div>
      <div
        data-testid="service-card-7"
        className="bg-white rounded-2xl p-7 border border-brand-cream hover:border-brand-gold/40 hover:-translate-y-1 transition-all"
      >
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
            className="lucide lucide-map-pinned w-6 h-6 text-brand-red"
            aria-hidden="true"
          >
            <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" />
            <circle cx={12} cy={8} r={2} />
            <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-medium text-brand-ink mb-3">
          Location Strategy
        </h3>
        <p className="text-sm text-brand-ink-soft font-light leading-relaxed">
          Strategic guidance on Parikrama corridor, ring road expansion, and
          emerging Brij neighbourhoods.
        </p>
      </div>
    </div>
    <div className="mt-20 bg-brand-cream rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="font-display text-4xl font-medium text-brand-ink mb-4">
          Have a specific concern?
        </h2>
        <p className="text-brand-ink-soft font-light mb-6">
          Tell us your situation — we'll review it free of cost and tell you
          exactly what's needed to make your purchase or sale safe.
        </p>
        <a href="/post-property" data-discover="true">
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