export default function Contact() {
  return <main className="flex-1">
  <div
    className="max-w-7xl mx-auto px-6 md:px-10 py-16"
    data-testid="about-page"
  >
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <div className="text-xs uppercase tracking-[0.25em] text-brand-red mb-2">
          Who We Are
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-medium text-brand-ink mb-6">
          Two generations. One{" "}
          <em className="not-italic text-brand-red">sacred mission</em>.
        </h1>
        <p className="text-lg text-brand-ink-soft font-light leading-relaxed mb-5">
          Dau Dada Properties was founded on a simple promise:{" "}
          <em>
            buying land in the Brij should be a blessing, not a legal burden
          </em>
          . With over 60 combined years of on-ground experience and a dedicated
          legal practice, we are the only consultancy in the region that takes
          full responsibility for the security of your investment.
        </p>
        <p className="text-brand-ink-soft font-light leading-relaxed">
          From Govardhan Parikrama Marg to the Vrindavan ring road — we have
          walked, measured, and legally cleared the lands we represent.
        </p>
      </div>
      <div className="relative">
        <img
          alt="Sacred mission — Brij seva"
          className="rounded-3xl w-full aspect-[4/5] object-cover"
          src="https://customer-assets.emergentagent.com/job_daudada-realty/artifacts/4z2sobn5_WhatsApp%20Image%202026-05-03%20at%2002.16.18.jpeg"
        />
        <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-soft p-5 border border-brand-cream max-w-[260px] hidden md:block">
          <div className="font-display text-3xl text-brand-red font-semibold">
            60+ yrs
          </div>
          <div className="text-sm text-brand-ink-soft">
            combined experience across Brij real estate
          </div>
        </div>
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-6 mb-20">
      <div
        className="bg-brand-red text-white rounded-3xl p-10"
        data-testid="mission-card"
      >
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
          className="lucide lucide-heart w-8 h-8 mb-5 text-brand-gold"
          aria-hidden="true"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
        <h3 className="font-display text-3xl font-medium mb-4">Our Mission</h3>
        <p className="font-light leading-relaxed opacity-90">
          "To make land buying in the holy Brij region a blessing — never a
          legal burden — for every devotee, family and investor."
        </p>
      </div>
      <div className="bg-white rounded-3xl p-10 border-l-8 border-brand-red shadow-soft">
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
          className="lucide lucide-award w-8 h-8 mb-5 text-brand-red"
          aria-hidden="true"
        >
          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
          <circle cx={12} cy={8} r={6} />
        </svg>
        <h3 className="font-display text-3xl font-medium mb-4 text-brand-ink">
          Our Promise
        </h3>
        <p className="text-brand-ink-soft font-light leading-relaxed">
          Every paper is verified by an expert property lawyer with a 30-year
          title search. If it's not clean, we don't sell it. Period.
        </p>
      </div>
    </div>
    <div className="text-center mb-12">
      <div className="text-xs uppercase tracking-[0.25em] text-brand-red mb-2">
        Our Leadership
      </div>
      <h2 className="font-display text-5xl font-medium text-brand-ink">
        Built on family, run with discipline
      </h2>
    </div>
    <div className="grid md:grid-cols-2 gap-6 mb-20">
      <div
        className="bg-white rounded-3xl border border-brand-cream p-8 md:p-10 text-center"
        data-testid="founder-ravi"
      >
        <div className="w-44 h-44 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-brand-gold/30 shadow-soft">
          <img
            alt="Ravi Gautam — Founder"
            className="w-full h-full object-cover"
            src="https://customer-assets.emergentagent.com/job_daudada-realty/artifacts/rm7rlawz_Ravi%20Gautam.jpeg"
          />
        </div>
        <h3 className="font-display text-3xl font-medium text-brand-ink">
          Ravi Gautam
        </h3>
        <p className="text-brand-red font-medium tracking-wide mt-1 mb-4 italic">
          Founder · 45 Years of Brij Real Estate
        </p>
        <p className="text-sm text-brand-ink-soft font-light leading-relaxed mb-5">
          A son of the Brij, Ravi ji has spent his life walking the parikrama
          paths, knowing every village priest and patwari personally. His
          relationships are why we can verify a title in days, not months.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <a
            href="mailto:properties@daudada.in"
            data-testid="ravi-email"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 text-brand-red text-sm font-medium hover:bg-brand-red hover:text-white transition-colors"
          >
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
              className="lucide lucide-mail w-4 h-4"
              aria-hidden="true"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x={2} y={4} width={20} height={16} rx={2} />
            </svg>{" "}
            properties@daudada.in
          </a>
          <a
            href="https://wa.me/919876543210?text=Hi%20Ravi%20ji%20—%20I%20would%20like%20to%20discuss%20a%20Brij%20property"
            target="_blank"
            rel="noreferrer"
            data-testid="ravi-whatsapp"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-colors"
          >
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
              className="lucide lucide-message-circle w-4 h-4"
              aria-hidden="true"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>{" "}
            WhatsApp
          </a>
        </div>
      </div>
      <div
        className="bg-white rounded-3xl border border-brand-cream p-8 md:p-10 text-center"
        data-testid="founder-nitin"
      >
        <div className="w-44 h-44 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-brand-gold/30 shadow-soft">
          <img
            alt="Adv. Nitin Gautam — Co-Founder"
            className="w-full h-full object-cover"
            src="https://customer-assets.emergentagent.com/job_daudada-realty/artifacts/vy8o4xer_NItin%20Gautam.jpeg"
          />
        </div>
        <h3 className="font-display text-3xl font-medium text-brand-ink">
          Adv. Nitin Gautam
        </h3>
        <p className="text-brand-red font-medium tracking-wide mt-1 mb-4 italic">
          Co-Founder · Practising Lawyer · 17 Yrs
        </p>
        <p className="text-sm text-brand-ink-soft font-light leading-relaxed mb-5">
          Property law is Nitin's specialisation. From mutation to MVDA
          approvals, every legal opinion you receive from us is signed off by
          him personally. No outsourcing, no shortcuts.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <a
            href="mailto:nitin.gautam@daudada.in"
            data-testid="nitin-email"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 text-brand-red text-sm font-medium hover:bg-brand-red hover:text-white transition-colors"
          >
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
              className="lucide lucide-mail w-4 h-4"
              aria-hidden="true"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x={2} y={4} width={20} height={16} rx={2} />
            </svg>{" "}
            nitin.gautam@daudada.in
          </a>
          <a
            href="https://wa.me/919876543210?text=Hi%20Adv.%20Nitin%20—%20I%20need%20legal%20advice%20on%20a%20Brij%20property"
            target="_blank"
            rel="noreferrer"
            data-testid="nitin-whatsapp"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-colors"
          >
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
              className="lucide lucide-message-circle w-4 h-4"
              aria-hidden="true"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>{" "}
            WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/nitin-ravi-gautam-71465230/"
            target="_blank"
            rel="noreferrer"
            data-testid="nitin-linkedin"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A66C2] text-white text-sm font-medium hover:bg-[#0856a8] transition-colors"
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
              className="lucide lucide-linkedin w-4 h-4"
              aria-hidden="true"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width={4} height={12} x={2} y={9} />
              <circle cx={4} cy={4} r={2} />
            </svg>{" "}
            LinkedIn
          </a>
        </div>
      </div>
    </div>
    <div className="bg-brand-cream rounded-3xl p-10 md:p-14 grid md:grid-cols-3 gap-6 mb-12">
      <div className="text-center">
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
          className="lucide lucide-scale w-10 h-10 text-brand-red mx-auto mb-4"
          aria-hidden="true"
        >
          <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
          <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
          <path d="M7 21h10" />
          <path d="M12 3v18" />
          <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
        </svg>
        <h4 className="font-display text-2xl font-medium mb-2">Lawyer-led</h4>
        <p className="text-sm text-brand-ink-soft font-light">
          Every deal touched by a practising property lawyer.
        </p>
      </div>
      <div className="text-center">
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
          className="lucide lucide-award w-10 h-10 text-brand-red mx-auto mb-4"
          aria-hidden="true"
        >
          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
          <circle cx={12} cy={8} r={6} />
        </svg>
        <h4 className="font-display text-2xl font-medium mb-2">300+ deals</h4>
        <p className="text-sm text-brand-ink-soft font-light">
          Successfully completed across Govardhan, Vrindavan and Mathura.
        </p>
      </div>
      <div className="text-center">
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
          className="lucide lucide-heart w-10 h-10 text-brand-red mx-auto mb-4"
          aria-hidden="true"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
        <h4 className="font-display text-2xl font-medium mb-2">
          Zero disputes
        </h4>
        <p className="text-sm text-brand-ink-soft font-light">
          Not one of our buyers has faced a title dispute in 15 years.
        </p>
      </div>
    </div>
    <div className="text-center">
      <a href="/properties" data-discover="true">
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-9 rounded-full bg-brand-red text-white hover:bg-brand-red-dark px-8 py-6 shadow-brand"
          data-testid="about-cta-btn"
        >
          Browse Verified Properties
        </button>
      </a>
    </div>
  </div>
</main>
;
}