import Link from "next/link";
import Image from "next/image"

export default function Footer(){
    return(
      <>
      <section
  className="bg-brand-ink text-white border-b border-white/10"
  data-testid="newsletter-section"
>
  <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid md:grid-cols-2 gap-8 items-center">
    <div>
      <div className="text-xs uppercase tracking-[0.25em] text-brand-gold mb-2">
        Brij Insider
      </div>
      <h3 className="font-display text-3xl md:text-4xl font-medium leading-tight">
        Verified listings &amp; legal tips,{" "}
        <em className="not-italic text-brand-gold">delivered monthly</em>.
      </h3>
      <p className="mt-2 text-sm font-light opacity-80">
        No spam. New plots near Parikrama Marg, MVDA updates, and one buyer
        story each issue.
      </p>
    </div>
    <div className="flex md:justify-end">
      <form
        data-testid="newsletter-form"
        className="flex flex-col sm:flex-row gap-2 max-w-md"
      >
        <div className="relative flex-1">
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
            className="lucide lucide-mail absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60"
            aria-hidden="true"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x={2} y={4} width={20} height={16} rx={2} />
          </svg>
          <input
            className="flex w-full px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-11 rounded-full bg-white/10 border border-white/15 pl-9 text-white placeholder:text-white/40 focus-visible:ring-brand-gold focus-visible:border-brand-gold"
            required
            data-testid="newsletter-email"
            placeholder="aap@example.com"
            type="email"
            defaultValue=""
          />
        </div>
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow py-2 h-11 rounded-full bg-brand-gold text-brand-ink font-semibold hover:bg-yellow-500 px-6"
          type="submit"
          data-testid="newsletter-submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
</section>

     
   <footer className="bg-brand-ink text-brand-ivory" data-testid="site-footer">
  <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-10">
    <div className="col-span-2 md:col-span-3">
      <div className="flex items-center gap-3 mb-5">
        <div className="h-14 w-14 rounded-xl overflow-hidden ring-1 ring-white/15 flex-shrink-0">
          <img
            alt="Dau Dada"
            className="h-full w-full object-cover"
            src="https://customer-assets.emergentagent.com/job_6764da25-50bd-4908-8adb-2df0bd95bfde/artifacts/oi8qahgx_Dau%20Dada%20Profile%20Image.jpg"
          />
        </div>
        <div className="leading-tight">
          <div className="font-display text-2xl font-semibold">Dau Dada</div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-brand-gold">
            Properties
          </div>
        </div>
      </div>
      <p className="text-sm opacity-75 leading-relaxed font-light">
        Real estate consultants for the sacred Brij — Govardhan, Mathura,
        Vrindavan, Barsana &amp; Jatipura. Where faith meets legal certainty.
      </p>
      <div className="mt-5 space-y-2.5 text-sm opacity-80">
        <div className="flex items-start gap-2">
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
            className="lucide lucide-map-pin w-4 h-4 mt-0.5 flex-shrink-0"
            aria-hidden="true"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx={12} cy={10} r={3} />
          </svg>
          <span className="leading-relaxed">
            Poochri-Jatipura ke beech mein, Badi Parikrama Marg, Opp. Luk Luk
            Dau Ji, Mahavidhya Colony, Jatipura, Govind Nagar, Govardhan,
            Mathura, UP 281001
          </span>
        </div>
        <div className="flex items-center gap-2">
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
            className="lucide lucide-phone w-4 h-4 flex-shrink-0"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>{" "}
          +91 98765 43210
        </div>
        <div className="flex items-center gap-2">
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
            className="lucide lucide-mail w-4 h-4 flex-shrink-0"
            aria-hidden="true"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x={2} y={4} width={20} height={16} rx={2} />
          </svg>{" "}
          properties@daudada.in
        </div>
      </div>
      <p className="mt-5 italic text-brand-gold font-display text-lg">
        Jai Shri Giriraj Ji
      </p>
    </div>
    <div className="md:col-span-2">
      <h4 className="font-display text-lg mb-4 text-brand-gold">Quick Links</h4>
      <ul className="space-y-2.5 text-sm opacity-80">
        <li>
          <Link
            className="hover:text-brand-gold transition-colors"
            data-testid="footer-home"
            href="/"
            data-discover="true"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-brand-gold transition-colors"
            data-testid="footer-properties"
            href="/properties"
            data-discover="true"
          >
            Properties
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-brand-gold transition-colors"
            data-testid="footer-about"
            href="/about"
            data-discover="true"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-brand-gold transition-colors"
            data-testid="footer-services"
            href="/services"
            data-discover="true"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-brand-gold transition-colors"
            data-testid="footer-list"
            href="/list-your-property"
            data-discover="true"
          >
            List Your Property
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-brand-gold transition-colors"
            data-testid="footer-blog"
            href="/blog"
            data-discover="true"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-brand-gold transition-colors"
            data-testid="footer-reviews"
            href="/reviews"
            data-discover="true"
          >
            Video Reviews
          </Link>
        </li>
      </ul>
    </div>
    <div className="md:col-span-2">
      <h4 className="font-display text-lg mb-4 text-brand-gold">Policy</h4>
      <ul className="space-y-2.5 text-sm opacity-80">
        <li>
          <Link href="/privacy-policy" className="hover:text-brand-gold transition-colors">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="/terms-and-conditions" className="hover:text-brand-gold transition-colors">
            Terms &amp; Conditions
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-brand-gold transition-colors">
            FAQ’s
          </Link>
        </li>
        <li>
          <Link href="/disclaimer" className="hover:text-brand-gold transition-colors">
            Disclaimer
          </Link>
        </li>
        <li>
          <Link href="/cookie-policy" className="hover:text-brand-gold transition-colors">
            Cookie Policy
          </Link>
        </li>
      </ul>
    </div>
    <div className="md:col-span-2">
      <h4 className="font-display text-lg mb-4 text-brand-gold">
        Locations Served
      </h4>
      <ul className="space-y-2.5 text-sm opacity-80">
        <li>
          <Link
            className="flex items-center gap-2 hover:text-brand-gold transition-colors"
            data-testid="footer-loc-govardhan"
            href="/properties?loc=Govardhan"
            data-discover="true"
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
              className="lucide lucide-map-pin w-4 h-4 flex-shrink-0"
              aria-hidden="true"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx={12} cy={10} r={3} />
            </svg>{" "}
            Govardhan &amp; Jatipura
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-2 hover:text-brand-gold transition-colors"
            data-testid="footer-loc-vrindavan"
            href="/properties?loc=Vrindavan"
            data-discover="true"
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
              className="lucide lucide-map-pin w-4 h-4 flex-shrink-0"
              aria-hidden="true"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx={12} cy={10} r={3} />
            </svg>{" "}
            Vrindavan &amp; Barsana
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-2 hover:text-brand-gold transition-colors"
            data-testid="footer-loc-mathura"
            href="/properties?loc=Mathura"
            data-discover="true"
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
              className="lucide lucide-map-pin w-4 h-4 flex-shrink-0"
              aria-hidden="true"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx={12} cy={10} r={3} />
            </svg>{" "}
            Mathura &amp; Ring Road
          </Link>
        </li>
      </ul>
    </div>
    <div className="col-span-2 md:col-span-3">
      <h4 className="font-display text-lg mb-4 text-brand-gold">
        Developers &amp; Builders
      </h4>
      <p className="text-sm opacity-80 font-light leading-relaxed mb-3">
        Launching a project in the Brij? We partner with serious builders.
      </p>
      <Link
        href="mailto:nitin.gautam@daudada.in"
        data-testid="footer-dev-email"
        className="inline-flex items-center gap-2 text-sm text-brand-gold hover:underline whitespace-nowrap"
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
          className="lucide lucide-mail w-4 h-4 flex-shrink-0"
          aria-hidden="true"
        >
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
          <rect x={2} y={4} width={20} height={16} rx={2} />
        </svg>
        nitin.gautam@daudada.in
      </Link>
    </div>
  </div>
  <div className="border-t border-white/10">
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 text-xs opacity-50 text-center font-light tracking-wide">
      © 2026 Dau Dada Properties. All rights reserved. Built with reverence for
      the Brij.
    </div>
  </div>
</footer>

 </>
)
}