export default function Reviews(){
    return(
        <main className="flex-1">
  <div className="min-h-screen" data-testid="reviews-page">
    <section className="relative bg-brand-ink text-white py-20 md:py-28 overflow-hidden">
      <div className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full bg-brand-red/30 blur-3xl" />
      <div className="absolute -left-40 -bottom-40 w-[500px] h-[500px] rounded-full bg-brand-gold/15 blur-3xl" />
      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/90 text-white text-[10px] tracking-[0.25em] uppercase font-semibold mb-5">
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
            className="lucide lucide-play w-3 h-3"
            aria-hidden="true"
          >
            <polygon points="6 3 20 12 6 21 6 3" />
          </svg>{" "}
          Buyer Stories
        </div>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] tracking-tight mb-5">
          Real reviews from{" "}
          <em className="not-italic text-brand-gold">real buyers</em>
        </h1>
        <p className="text-lg font-light opacity-85 max-w-2xl mx-auto">
          Our most precious credential is not a certificate — it's the family
          who returns to thank us. Here are some of their stories.
        </p>
      </div>
    </section>
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <article
          data-testid="review-card-0"
          className="group bg-white rounded-3xl overflow-hidden border border-brand-cream hover:shadow-soft transition-all"
        >
          <button className="relative w-full aspect-video overflow-hidden block">
            <img
              alt="Amit Dashana"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://customer-assets.emergentagent.com/job_daudada-realty/artifacts/zqfoh7zb_WhatsApp%20Image%202026-05-04%20at%2020.48.27.jpeg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <span className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-play w-8 h-8 text-brand-red ml-1"
                  aria-hidden="true"
                >
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
              </span>
            </div> */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white text-left">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-gold mb-1">
                Haridwar
              </div>
              <div className="font-display text-2xl font-medium">
                Amit Dashana
              </div>
              <div className="text-sm opacity-90">
                Sub-Head, Times of India
              </div>
            </div>
            {/* <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-md bg-black/70 text-white text-[10px] font-semibold tabular-nums">
              1:42
            </div> */}
          </button>
          <div className="p-6 relative">
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
              className="lucide lucide-quote absolute -top-4 left-6 w-9 h-9 text-brand-red bg-white p-1.5 rounded-full border border-brand-cream"
              aria-hidden="true"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
            </svg>
            <p className="text-brand-ink-soft font-light italic leading-relaxed pt-3">
              "Buying near the Parikrama Marg felt sacred and risk-free. Adv.
              Nitin's 30-year title search gave my family complete peace of
              mind."
            </p>
          </div>
        </article>
        <article
          data-testid="review-card-1"
          className="group bg-white rounded-3xl overflow-hidden border border-brand-cream hover:shadow-soft transition-all"
        >
          <button className="relative w-full aspect-video overflow-hidden block">
            <img
              alt="Aman Birla"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://customer-assets.emergentagent.com/job_daudada-realty/artifacts/h6fehy4w_WhatsApp%20Image%202026-05-04%20at%2020.48.27%20%281%29.jpeg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            {/* <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-brand-gold text-brand-ink text-[10px] uppercase tracking-widest font-bold">
              Coming Soon
            </div> */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white text-left">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-gold mb-1">
                Delhi
              </div>
              <div className="font-display text-2xl font-medium">
                Aman Birla
              </div>
              <div className="text-sm opacity-90">
                Co-Founder, Beyond Road Tour
              </div>
            </div>
          </button>
          <div className="p-6 relative">
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
              className="lucide lucide-quote absolute -top-4 left-6 w-9 h-9 text-brand-red bg-white p-1.5 rounded-full border border-brand-cream"
              aria-hidden="true"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
            </svg>
            <p className="text-brand-ink-soft font-light italic leading-relaxed pt-3">
              "Dau Dada doesn't sell — they consult. They walked me through MVDA
              zoning and exit liquidity before I committed. Rare honesty."
            </p>
          </div>
        </article>
         <article
          data-testid="review-card-3"
          className="group bg-white rounded-3xl overflow-hidden border border-brand-cream hover:shadow-soft transition-all"
        >
          <button className="relative w-full aspect-video overflow-hidden block">
           <img
              alt="Sudhanshu Sharma"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://customer-assets.emergentagent.com/job_daudada-realty/artifacts/kuo45hnu_WhatsApp%20Image%202026-05-04%20at%2020.48.27%20%283%29.jpeg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            {/* <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-brand-gold text-brand-ink text-[10px] uppercase tracking-widest font-bold">
              Coming Soon
            </div> */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white text-left">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-gold mb-1">
                Mumbai
              </div>
              <div className="font-display text-2xl font-medium">Rajkumar</div>
              <div className="text-sm opacity-90">Business Manager</div>
            </div>
          </button>
          <div className="p-6 relative">
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
              className="lucide lucide-quote absolute -top-4 left-6 w-9 h-9 text-brand-red bg-white p-1.5 rounded-full border border-brand-cream"
              aria-hidden="true"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
            </svg>
            <p className="text-brand-ink-soft font-light italic leading-relaxed pt-3">
              "I'm based in Mumbai but trusted Dau Dada for a Vrindavan plot.
              End-to-end registry handled remotely. Faith-meets-legal — for
              real."
            </p>
          </div>
        </article>
        <article
          data-testid="review-card-2"
          className="group bg-white rounded-3xl overflow-hidden border border-brand-cream hover:shadow-soft transition-all"
        >
          <button className="relative w-full aspect-video overflow-hidden block">
             <img
              alt="Rajkumar"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://customer-assets.emergentagent.com/job_daudada-realty/artifacts/0jqejqg0_WhatsApp%20Image%202026-05-04%20at%2020.48.27%20%282%29.jpeg"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            {/* <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-brand-gold text-brand-ink text-[10px] uppercase tracking-widest font-bold">
              Coming Soon
            </div> */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white text-left">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-gold mb-1">
                Delhi
              </div>
              <div className="font-display text-2xl font-medium">
                Sudhanshu Sharma
              </div>
              <div className="text-sm opacity-90">Business Owner</div>
            </div>
          </button>
          <div className="p-6 relative">
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
              className="lucide lucide-quote absolute -top-4 left-6 w-9 h-9 text-brand-red bg-white p-1.5 rounded-full border border-brand-cream"
              aria-hidden="true"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
            </svg>
            <p className="text-brand-ink-soft font-light italic leading-relaxed pt-3">
              "From farm well to mutation papers — Ravi ji's local network
              closed my farmhouse deal in 18 days. Smooth, transparent,
              devotional."
            </p>
          </div>
        </article>
       
      </div>
      <div className="mt-16 bg-brand-cream rounded-3xl p-10 md:p-14 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-medium text-brand-ink mb-3">
          Have you bought through us? Share your story.
        </h2>
        <p className="text-brand-ink-soft font-light max-w-xl mx-auto mb-6">
          Send us a short video review on WhatsApp — we'll feature you here and
          gift you a special parikrama gift hamper.
        </p>
        <a
          href="https://wa.me/919876543210?text=Hi%20Dau%20Dada%20—%20I'd%20like%20to%20share%20my%20review"
          target="_blank"
          rel="noreferrer"
          data-testid="reviews-share-btn"
        >
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-9 rounded-full bg-green-600 hover:bg-green-700 text-white px-8 py-6">
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
              className="lucide lucide-message-circle w-4 h-4 mr-2"
              aria-hidden="true"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>{" "}
            Share My Review on WhatsApp
          </button>
        </a>
      </div>
    </section>
  </div>
</main>

    )
}