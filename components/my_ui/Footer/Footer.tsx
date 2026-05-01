import Link from "next/link";

export default function Footer(){
    return(
    <footer className="footer">
   <div className="container">
      <div className="footer-grid">
         <div className="footer-col">
            <div className="footer-logo">
               <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mountain" aria-hidden="true">
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
               </svg>
               <div className="logo-text"><span className="brand-name">Dau Dada</span><span className="tagline">Real Estate Consultants</span></div>
            </div>
            <p className="footer-desc">Your trusted partner in the holy land. We ensure 100% legal safety and verified possession for every property transaction.</p>
            <div className="social-links">
               <a href="#" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook" aria-hidden="true">
                     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
               </a>
               <a href="#" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram" aria-hidden="true">
                     <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                     <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
               </a>
               <a href="#" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin" aria-hidden="true">
                     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                     <rect width="4" height="12" x="2" y="9"></rect>
                     <circle cx="4" cy="4" r="2"></circle>
                  </svg>
               </a>
            </div>
         </div>
         <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
               <li><Link href="/" data-discover="true">Home</Link></li>
               <li><Link href="/properties" data-discover="true">Properties</Link></li>
               <li><Link href="/verification" data-discover="true">Our Process</Link></li>
               <li><Link href="/about" data-discover="true">About Us</Link></li>
               <li><Link href="/contact" data-discover="true">Contact</Link></li>
            </ul>
         </div>
         <div className="footer-col">
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-links">
               <li><Link href="#legal">Legal Verification</Link></li>
               <li><Link href="#physical">Physical Audit</Link></li>
               <li><Link href="#registry">Registry Support</Link></li>
               <li><Link href="#mutation">Dakhil-Kharij</Link></li>
               <li><Link href="#possession">Possession Transfer</Link></li>
            </ul>
         </div>
         <div className="footer-col">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-contact">
               <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone" aria-hidden="true">
                     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div><strong>Phone</strong><a href="tel:+919876543210">+91 98765 43210</a></div>
               </li>
               <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail" aria-hidden="true">
                     <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                     <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                  <div><strong>Email</strong><a href="mailto:info@brijbhoomi.com">info@brijbhoomi.com</a></div>
               </li>
               <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin" aria-hidden="true">
                     <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                     <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div><strong>Location</strong><span>Goverdhan, Mathura, UP</span></div>
               </li>
            </ul>
         </div>
      </div>
      <div className="footer-bottom">
         <p>© 2024 Dau Dada Real Estate Consultants. All rights reserved.</p>
         <div className="footer-bottom-links"><a href="#privacy">Privacy Policy</a><a href="#terms">Terms of Service</a></div>
      </div>
   </div>
</footer>
)
}