import Link from "next/link";

export default function Header(){
    return(
       <header className="header-wrapper">
  <div className="top-bar">
    <div className="container">
      <div className="contact-info">
        <a href="tel:+919876543210" className="contact-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>+91 98765 43210</span>
        </a>
        <a href="mailto:info@brijbhoomi.com" className="contact-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail" aria-hidden="true">
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          </svg>
          <span>info@brijbhoomi.com</span>
        </a>
        <span className="contact-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin" aria-hidden="true">
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>Goverdhan, Mathura</span>
        </span>
      </div>
    </div>
  </div>
  <nav className="main-nav">
    <div className="container">
      <Link className="logo" href="/" data-discover="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mountain" aria-hidden="true">
          <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
        </svg>
        <div className="logo-text"><span className="brand-name">Dau Dada</span><span className="tagline">Real Estate Consultants</span></div>
      </Link>
      <div className="nav-links">
        <Link className="nav-link" href="/" data-discover="true">Home</Link>
        <Link className="nav-link" href="/properties" data-discover="true">Properties</Link>
        <div className="nav-dropdown">
          <Link className="nav-link dropdown-trigger" href="/services" data-discover="true">
            Services
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down chevron" aria-hidden="true">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </Link>
        </div>
        <Link className="nav-link" href="/about" data-discover="true">About Us</Link>
        <Link className="nav-link" href="/news" data-discover="true">News</Link>
        <Link className="nav-link contact-btn" href="/contact" data-discover="true">Contact Us</Link>
      </div>
    </div>
  </nav>
</header>
    )
}