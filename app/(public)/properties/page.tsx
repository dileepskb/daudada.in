export default function Properties() {

  return ( 
   <main className="flex-1">
  <div data-testid="properties-page">
    <section className="relative" data-testid="properties-banner">
      <div className="absolute inset-0">
        <img
          alt="Brij"
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=2000&q=80"
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
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 min-h-screen grid lg:grid-cols-12 gap-8">
      <aside className="lg:col-span-3" data-testid="sacred-spots-sidebar">
        <div className="lg:sticky lg:top-28 space-y-5">
          <div className="bg-white border border-brand-cream rounded-2xl p-5 shadow-soft">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-red font-semibold mb-4">
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
                className="lucide lucide-map-pin w-3.5 h-3.5"
                aria-hidden="true"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx={12} cy={10} r={3} />
              </svg>
              Sacred spots across the Brij
            </div>
            <nav className="space-y-4">
              <div>
                <button
                  data-testid="sidebar-area-Jatipura"
                  className="w-full flex items-center justify-between text-left font-display text-base font-medium transition-colors mb-2 text-brand-ink hover:text-brand-red"
                >
                  <span>📍 Jatipura</span>
                  <span className="text-xs text-brand-ink-soft">1</span>
                </button>
                <ul className="space-y-1.5 pl-5 border-l-2 border-brand-cream">
                  <li>
                    <button
                      data-testid="sidebar-spot-Jatipura-Parikrama Marg"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Parikrama Marg
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  data-testid="sidebar-area-Govardhan"
                  className="w-full flex items-center justify-between text-left font-display text-base font-medium transition-colors mb-2 text-brand-ink hover:text-brand-red"
                >
                  <span>📍 Govardhan</span>
                  <span className="text-xs text-brand-ink-soft">8</span>
                </button>
                <ul className="space-y-1.5 pl-5 border-l-2 border-brand-cream">
                  <li>
                    <button
                      data-testid="sidebar-spot-Govardhan-Govardhan Hill"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Govardhan Hill
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Govardhan-Radha Kund"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Radha Kund
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Govardhan-Shyam Kund"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Shyam Kund
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Govardhan-Kusum Sarovar"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Kusum Sarovar
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Govardhan-Mansi Ganga"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Mansi Ganga
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Govardhan-Gulal Kund"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Gulal Kund
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Govardhan-Surabhi Kund"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Surabhi Kund
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Govardhan-Luk Luk Dau Ji"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Luk Luk Dau Ji
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  data-testid="sidebar-area-Barsana"
                  className="w-full flex items-center justify-between text-left font-display text-base font-medium transition-colors mb-2 text-brand-ink hover:text-brand-red"
                >
                  <span>📍 Barsana</span>
                  <span className="text-xs text-brand-ink-soft">4</span>
                </button>
                <ul className="space-y-1.5 pl-5 border-l-2 border-brand-cream">
                  <li>
                    <button
                      data-testid="sidebar-spot-Barsana-Shri Radha Rani Temple"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Shri Radha Rani Temple
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Barsana-Mor Kutir"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Mor Kutir
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Barsana-Maan Mandir"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Maan Mandir
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Barsana-Rangeeli Mahal"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Rangeeli Mahal
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  data-testid="sidebar-area-Vrindavan"
                  className="w-full flex items-center justify-between text-left font-display text-base font-medium transition-colors mb-2 text-brand-ink hover:text-brand-red"
                >
                  <span>📍 Vrindavan</span>
                  <span className="text-xs text-brand-ink-soft">6</span>
                </button>
                <ul className="space-y-1.5 pl-5 border-l-2 border-brand-cream">
                  <li>
                    <button
                      data-testid="sidebar-spot-Vrindavan-Ring Road"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Ring Road
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Vrindavan-Prem Mandir"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Prem Mandir
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Vrindavan-Banke Bihari Temple"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Banke Bihari Temple
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Vrindavan-ISKCON Temple Vrindavan"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      ISKCON Temple Vrindavan
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Vrindavan-Nidhivan"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Nidhivan
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Vrindavan-Seva Kunj"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Seva Kunj
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  data-testid="sidebar-area-Mathura"
                  className="w-full flex items-center justify-between text-left font-display text-base font-medium transition-colors mb-2 text-brand-ink hover:text-brand-red"
                >
                  <span>📍 Mathura</span>
                  <span className="text-xs text-brand-ink-soft">3</span>
                </button>
                <ul className="space-y-1.5 pl-5 border-l-2 border-brand-cream">
                  <li>
                    <button
                      data-testid="sidebar-spot-Mathura-Shri Krishna Janmabhoomi"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Shri Krishna Janmabhoomi
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Mathura-Dwarkadhish Temple"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Dwarkadhish Temple
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Mathura-Vishram Ghat"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Vishram Ghat
                    </button>
                  </li>
                </ul>
              </div>
              <div className="pt-3 border-t border-brand-cream">
                <div className="font-display text-base font-medium text-brand-ink mb-2">
                  📍 Nearby Braj
                </div>
                <ul className="space-y-1.5 pl-5 border-l-2 border-brand-gold/40">
                  <li>
                    <button
                      data-testid="sidebar-nearby-Nand Bhavan"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Nand Bhavan
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-nearby-Kokilavan Dham"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Kokilavan Dham
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-nearby-Gokul Dham"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Gokul Dham
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-nearby-Raman Reti"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Raman Reti
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </aside>
      <div className="lg:col-span-9">
        <div
          className="bg-white rounded-2xl border border-brand-cream p-5 mb-8 shadow-soft"
          data-testid="properties-filters"
        >
          <div className="flex items-center gap-2 mb-4 text-sm font-medium text-brand-ink">
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
              className="lucide lucide-funnel w-4 h-4 text-brand-red"
              aria-hidden="true"
            >
              <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
            </svg>{" "}
            Refine your search
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
            <button
              type="button"
              role="combobox"
              aria-controls="radix-_r_n_"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              className="flex w-full items-center justify-between whitespace-nowrap border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 h-11 rounded-xl"
              data-testid="filter-tx"
            >
              <span style={{ pointerEvents: "none" }}>All</span>
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
            <button
              type="button"
              role="combobox"
              aria-controls="radix-_r_o_"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              className="flex w-full items-center justify-between whitespace-nowrap border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 h-11 rounded-xl"
              data-testid="filter-loc"
            >
              <span style={{ pointerEvents: "none" }}>All Locations</span>
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
            <button
              type="button"
              role="combobox"
              aria-controls="radix-_r_p_"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              className="flex w-full items-center justify-between whitespace-nowrap border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 h-11 rounded-xl"
              data-testid="filter-type"
            >
              <span style={{ pointerEvents: "none" }}>All Types</span>
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
            <button
              type="button"
              role="combobox"
              aria-controls="radix-_r_q_"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              className="flex w-full items-center justify-between whitespace-nowrap border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 h-11 rounded-xl"
              data-testid="filter-bhk"
            >
              <span style={{ pointerEvents: "none" }}>Any BHK</span>
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
            <button
              type="button"
              role="combobox"
              aria-controls="radix-_r_r_"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              className="flex w-full items-center justify-between whitespace-nowrap border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 h-11 rounded-xl"
              data-testid="filter-price"
            >
              <span style={{ pointerEvents: "none" }}>Any Price</span>
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
            <div className="flex gap-2">
              <input
                className="flex w-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-11 rounded-xl"
                data-testid="filter-q"
                placeholder="Search…"
                defaultValue=""
              />
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow py-2 h-11 rounded-xl bg-brand-red text-white hover:bg-brand-red-dark px-4"
                data-testid="filter-apply-btn"
              >
                Go
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-brand-ink-soft">0 properties found</p>
        </div>
        <div
          className="text-center py-24 text-brand-ink-soft"
          data-testid="empty-properties"
        >
          <p className="font-display text-3xl mb-3">
            No matching properties yet
          </p>
          <p>Try changing the filters or contact us for an off-market match.</p>
        </div>
      </div>
    </div>
    <section
      className="bg-brand-cream py-20 md:py-24"
      data-testid="testimonials-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-brand-red mb-2">
            Testimonials
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-brand-ink mb-3">
            Trusted by buyers across India
          </h2>
          <p className="text-brand-ink-soft font-light max-w-2xl mx-auto">
            Devotees, NRIs and business families who chose Dau Dada for their
            Brij property
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <article
            data-testid="testimonial-card-0"
            className="bg-white rounded-2xl border border-brand-cream overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <img
                alt="Amit Dashana"
                className="w-full h-full object-cover"
                src="https://customer-assets.emergentagent.com/job_daudada-realty/artifacts/zqfoh7zb_WhatsApp%20Image%202026-05-04%20at%2020.48.27.jpeg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
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
                className="lucide lucide-quote absolute top-4 right-4 w-7 h-7 text-brand-gold/80"
                aria-hidden="true"
              >
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              </svg>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="font-display text-xl font-medium leading-tight">
                  Amit Dashana
                </div>
                <div className="text-[11px] tracking-wide opacity-90">
                  Sub-Editor, Times of India
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mt-0.5">
                  Haridwar
                </div>
              </div>
            </div>
            <div className="p-5 flex-1 flex">
              <p className="text-sm text-brand-ink-soft font-light leading-relaxed italic">
                "Buying near the Parikrama Marg felt sacred and risk-free. Adv.
                Nitin's 30-year title search gave my family complete peace of
                mind."
              </p>
            </div>
          </article>
          <article
            data-testid="testimonial-card-1"
            className="bg-white rounded-2xl border border-brand-cream overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <img
                alt="Aman Birla"
                className="w-full h-full object-cover"
                src="https://customer-assets.emergentagent.com/job_daudada-realty/artifacts/h6fehy4w_WhatsApp%20Image%202026-05-04%20at%2020.48.27%20%281%29.jpeg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
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
                className="lucide lucide-quote absolute top-4 right-4 w-7 h-7 text-brand-gold/80"
                aria-hidden="true"
              >
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              </svg>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="font-display text-xl font-medium leading-tight">
                  Aman Birla
                </div>
                <div className="text-[11px] tracking-wide opacity-90">
                  Co-Founder, Beyond Road Tour
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mt-0.5">
                  Delhi
                </div>
              </div>
            </div>
            <div className="p-5 flex-1 flex">
              <p className="text-sm text-brand-ink-soft font-light leading-relaxed italic">
                "Dau Dada doesn't sell — they consult. They walked me through
                MVDA zoning and exit liquidity before I committed. Rare
                honesty."
              </p>
            </div>
          </article>
          <article
            data-testid="testimonial-card-2"
            className="bg-white rounded-2xl border border-brand-cream overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <img
                alt="Sudhanshu Sharma"
                className="w-full h-full object-cover"
                src="https://customer-assets.emergentagent.com/job_daudada-realty/artifacts/kuo45hnu_WhatsApp%20Image%202026-05-04%20at%2020.48.27%20%283%29.jpeg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
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
                className="lucide lucide-quote absolute top-4 right-4 w-7 h-7 text-brand-gold/80"
                aria-hidden="true"
              >
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              </svg>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="font-display text-xl font-medium leading-tight">
                  Sudhanshu Sharma
                </div>
                <div className="text-[11px] tracking-wide opacity-90">
                  Business Owner
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mt-0.5">
                  Delhi
                </div>
              </div>
            </div>
            <div className="p-5 flex-1 flex">
              <p className="text-sm text-brand-ink-soft font-light leading-relaxed italic">
                "From farm well to mutation papers — Ravi ji's local network
                closed my farmhouse deal in 18 days. Smooth, transparent,
                devotional."
              </p>
            </div>
          </article>
          <article
            data-testid="testimonial-card-3"
            className="bg-white rounded-2xl border border-brand-cream overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <img
                alt="Rajkumar"
                className="w-full h-full object-cover"
                src="https://customer-assets.emergentagent.com/job_daudada-realty/artifacts/0jqejqg0_WhatsApp%20Image%202026-05-04%20at%2020.48.27%20%282%29.jpeg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
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
                className="lucide lucide-quote absolute top-4 right-4 w-7 h-7 text-brand-gold/80"
                aria-hidden="true"
              >
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              </svg>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="font-display text-xl font-medium leading-tight">
                  Rajkumar
                </div>
                <div className="text-[11px] tracking-wide opacity-90">
                  Business Manager
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mt-0.5">
                  Mumbai
                </div>
              </div>
            </div>
            <div className="p-5 flex-1 flex">
              <p className="text-sm text-brand-ink-soft font-light leading-relaxed italic">
                "I'm based in Mumbai but trusted Dau Dada for a Vrindavan plot.
                End-to-end registry handled remotely. Faith-meets-legal — for
                real."
              </p>
            </div>
          </article>
        </div>
        <div className="text-center mt-12">
          <a href="/reviews" data-discover="true">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-9 rounded-full bg-brand-ink text-white hover:bg-black px-8 py-6"
              data-testid="testimonials-watch-btn"
            >
              Watch Video Reviews
            </button>
          </a>
        </div>
      </div>
    </section>
  </div>
</main>
)
}