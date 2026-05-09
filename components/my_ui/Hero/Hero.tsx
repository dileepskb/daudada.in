import Link from "next/link";
import HomeCounter from "../HomeCounter/HomeCounter";
import ClientSay from "../ClientSay/ClientSay";

export default function Hero(){
    return(
        <main className="main-content">
   <div className="home-page">
      <section className="hero-section">
         <video className="hero-video" autoPlay={true} loop={true} muted>
            <source src="https://customer-assets.emergentagent.com/job_verified-brij-plots/artifacts/03rwxo4k_videoplayback%20%281%29.mp4" type="video/mp4" />
         </video>
         <div className="hero-overlay"></div>
         <div className="container hero-content">
            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 hero-badge">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check" aria-hidden="true">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
               </svg>
               100% Legal &amp; Verified Properties
            </div>
            <h1 className="hero-title">Brij Ki Dharti Par<br /><span className="highlight">Surakshit Nivesh</span></h1>
            <p className="hero-subtitle">Where Faith Meets Legal Certainty</p>
            <p className="hero-description">Expert property consultancy in Jatipura, Goverdhan, Barsana, Vrindavan &amp; Mathura.<br />30-year title verification • Physical possession guarantee • Complete legal safety</p>
            <div className="hero-buttons">
               <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-8">View Properties</button>
               <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground h-10 rounded-md px-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone" aria-hidden="true">
                     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Contact Us
               </button>
            </div>
         </div>
      </section>
     <HomeCounter />
     {/* usp-section */}
     {/* <div className="usp-section">1</div> */}
      <section className="bg-orange-50 py-10">
         <div className="container">
            <div className="section-header">
               <h2 className="section-title">Why Choose Dau Dada?</h2>
               <p className="section-subtitle">We don&apos;t just find land; we deliver verified ownership with complete peace of mind</p>
            </div>
            <div className="usp-grid">
               <div className="rounded-xl border bg-card text-card-foreground shadow usp-card">
                  <div className="p-6 pt-0 usp-content">
                     <div className="usp-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check" aria-hidden="true">
                           <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                           <path d="m9 12 2 2 4-4"></path>
                        </svg>
                     </div>
                     <h3 className="usp-title"><Link href="/legal-verification">Legal Verification</Link></h3>
                     <p className="usp-description">Complete 30-year title search by expert lawyers. We verify Mutation (Dakhil-Kharij) and provide Clean Signal report before token payment.</p>
                     <ul className="usp-features">
                        <li>Chain of Documents Check</li>
                        <li>Mutation Status Verified</li>
                        <li>Encumbrance Certificate</li>
                        <li>Legal Opinion Report</li>
                     </ul>
                  </div>
               </div>
               <div className="rounded-xl border bg-card text-card-foreground shadow usp-card">
                  <div className="p-6 pt-0 usp-content">
                     <div className="usp-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-check" aria-hidden="true">
                           <path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"></path>
                           <circle cx="12" cy="10" r="3"></circle>
                           <path d="m16 18 2 2 4-4"></path>
                        </svg>
                     </div>
                     <h3 className="usp-title"><Link href="/physical-possession">Physical Possession</Link></h3>
                     <p className="usp-description">On-site measurement and boundary verification. We ensure ground reality matches paper records and facilitate immediate possession.</p>
                     <ul className="usp-features">
                        <li>Physical Land Measurement</li>
                        <li>Boundary Security Check</li>
                        <li>Neighbor Verification</li>
                        <li>Fencing Support</li>
                     </ul>
                  </div>
               </div>
               <div className="rounded-xl border bg-card text-card-foreground shadow usp-card">
                  <div className="p-6 pt-0 usp-content">
                     <div className="usp-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-key" aria-hidden="true">
                           <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path>
                           <path d="m21 2-9.6 9.6"></path>
                           <circle cx="7.5" cy="15.5" r="5.5"></circle>
                        </svg>
                     </div>
                     <h3 className="usp-title"><Link href="/complete-support">Complete Support</Link></h3>
                     <p className="usp-description">From direct landowner negotiations to final registry. We handle MVDA compliance and post-sale Dakhil-Kharij assistance.</p>
                     <ul className="usp-features">
                        <li>Best Market Price</li>
                        <li>MVDA Zoning Check</li>
                        <li>Registry Documentation</li>
                        <li>Mutation Assistance</li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="cta-center"><Link href={"#"} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-8">Learn Our Complete Process</Link></div>
         </div>
      </section>
      <section className="featured-section">
         <div className="container">
            <div className="section-header">
               <h2 className="section-title">Featured Properties</h2>
               <p className="section-subtitle">Handpicked verified properties in the holy Brij region</p>
            </div>
            <div className="properties-grid">
               <div className="rounded-xl border bg-card text-card-foreground shadow property-card">
                  <div className="property-image">
                     <img alt="Premium Residential Plot in Goverdhan" src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBsYW5kfGVufDB8fHx8MTc3NTMyMDMyM3ww&amp;ixlib=rb-4.1.0&amp;q=85" />
                     <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 verified-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check" aria-hidden="true">
                           <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                           <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                     </div>
                  </div>
                  <div className="p-6 pt-0 property-content">
                     <div className="property-header">
                        <h3 className="property-title">Premium Residential Plot in Goverdhan</h3>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Residential</div>
                     </div>
                     <div className="property-location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-check" aria-hidden="true">
                           <path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"></path>
                           <circle cx="12" cy="10" r="3"></circle>
                           <path d="m16 18 2 2 4-4"></path>
                        </svg>
                        Goverdhan
                     </div>
                     <div className="property-details">
                        <div className="detail-item"><span className="detail-label">Area</span><span className="detail-value">2500 sq ft</span></div>
                        <div className="detail-item"><span className="detail-label">Price</span><span className="detail-value">₹25,00,000</span></div>
                     </div>
                     <div className="safety-scores">
                        <div className="score-item"><span>Legal Score</span><strong>10/10</strong></div>
                        <div className="score-item"><span>Possession</span><strong>10/10</strong></div>
                        <div className="score-item"><span>Resale Value</span><strong>High</strong></div>
                     </div>
                     <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full">View Details</button>
                  </div>
               </div>
               <div className="rounded-xl border bg-card text-card-foreground shadow property-card">
                  <div className="property-image">
                     <img alt="Agricultural Land in Variava" src="https://images.unsplash.com/photo-1621928372414-30e144d51d49?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwyfHxhZ3JpY3VsdHVyYWwlMjBsYW5kfGVufDB8fHx8MTc3NTMyMDMyM3ww&amp;ixlib=rb-4.1.0&amp;q=85" />
                     <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 verified-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check" aria-hidden="true">
                           <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                           <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                     </div>
                  </div>
                  <div className="p-6 pt-0 property-content">
                     <div className="property-header">
                        <h3 className="property-title">Agricultural Land in Variava</h3>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Agricultural</div>
                     </div>
                     <div className="property-location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-check" aria-hidden="true">
                           <path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"></path>
                           <circle cx="12" cy="10" r="3"></circle>
                           <path d="m16 18 2 2 4-4"></path>
                        </svg>
                        Variava
                     </div>
                     <div className="property-details">
                        <div className="detail-item"><span className="detail-label">Area</span><span className="detail-value">1 Acre</span></div>
                        <div className="detail-item"><span className="detail-label">Price</span><span className="detail-value">₹50,00,000</span></div>
                     </div>
                     <div className="safety-scores">
                        <div className="score-item"><span>Legal Score</span><strong>10/10</strong></div>
                        <div className="score-item"><span>Possession</span><strong>10/10</strong></div>
                        <div className="score-item"><span>Resale Value</span><strong>Very High</strong></div>
                     </div>
                     <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full">View Details</button>
                  </div>
               </div>
               <div className="rounded-xl border bg-card text-card-foreground shadow property-card">
                  <div className="property-image">
                     <img alt="Commercial Plot Near Mathura Highway" src="https://images.pexels.com/photos/11782285/pexels-photo-11782285.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=650&amp;w=940" />
                     <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 verified-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check" aria-hidden="true">
                           <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                           <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                     </div>
                  </div>
                  <div className="p-6 pt-0 property-content">
                     <div className="property-header">
                        <h3 className="property-title">Commercial Plot Near Mathura Highway</h3>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Commercial</div>
                     </div>
                     <div className="property-location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-check" aria-hidden="true">
                           <path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"></path>
                           <circle cx="12" cy="10" r="3"></circle>
                           <path d="m16 18 2 2 4-4"></path>
                        </svg>
                        Mathura
                     </div>
                     <div className="property-details">
                        <div className="detail-item"><span className="detail-label">Area</span><span className="detail-value">3000 sq ft</span></div>
                        <div className="detail-item"><span className="detail-label">Price</span><span className="detail-value">₹45,00,000</span></div>
                     </div>
                     <div className="safety-scores">
                        <div className="score-item"><span>Legal Score</span><strong>10/10</strong></div>
                        <div className="score-item"><span>Possession</span><strong>10/10</strong></div>
                        <div className="score-item"><span>Resale Value</span><strong>Very High</strong></div>
                     </div>
                     <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full">View Details</button>
                  </div>
               </div>
            </div>
            <div className="cta-center"><button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground h-10 rounded-md px-8">View All Properties</button></div>
         </div>
      </section>
      <section className="why-verification-matters">
         <div className="container">
            <div className="section-header">
               <h2 className="section-title">Why Our Verification Process Matters</h2>
               <p className="section-subtitle">Brij ki pavitra bhoomi par nivesh ek aashirvaad hai, koi bojh nahi</p>
            </div>
            <div className="matters-grid-home">
               <div className="rounded-xl border bg-card text-card-foreground shadow matter-card">
                  <div className="p-6 pt-0 matter-content">
                     <div className="matter-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check" aria-hidden="true">
                           <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                           <path d="m9 12 2 2 4-4"></path>
                        </svg>
                     </div>
                     <h3 className="matter-title">Prevent Future Disputes</h3>
                     <p className="matter-text">30-year chain verification ensures no hidden claims or legal issues surface after purchase. Puraane cases ka koi khatra nahi.</p>
                  </div>
               </div>
               <div className="rounded-xl border bg-card text-card-foreground shadow matter-card">
                  <div className="p-6 pt-0 matter-content">
                     <div className="matter-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-check" aria-hidden="true">
                           <path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"></path>
                           <circle cx="12" cy="10" r="3"></circle>
                           <path d="m16 18 2 2 4-4"></path>
                        </svg>
                     </div>
                     <h3 className="matter-title">Confirm Ground Reality</h3>
                     <p className="matter-text">Physical measurement prevents discrepancies between papers and actual land area. Zameen aur kagaz dono match karna zaroori hai.</p>
                  </div>
               </div>
               <div className="rounded-xl border bg-card text-card-foreground shadow matter-card">
                  <div className="p-6 pt-0 matter-content">
                     <div className="matter-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-key" aria-hidden="true">
                           <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path>
                           <path d="m21 2-9.6 9.6"></path>
                           <circle cx="7.5" cy="15.5" r="5.5"></circle>
                        </svg>
                     </div>
                     <h3 className="matter-title">Secure Your Investment</h3>
                     <p className="matter-text">Complete documentation and mutation ensure your ownership is legally recorded. Sarkari record mein aapka naam hona chahiye.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="comparison-section-home">
         <div className="container">
            <h2 className="section-title">Traditional Broker vs Dau Dada</h2>
            <p className="section-subtitle">देखें हम कैसे अलग हैं</p>
            <div className="comparison-table">
               <div className="comparison-column traditional">
                  <div className="column-header">
                     <h3>Traditional Broker</h3>
                  </div>
                  <ul className="comparison-features">
                     <li className="negative">Basic paper verification only</li>
                     <li className="negative">No physical measurement</li>
                     <li className="negative">Limited legal support</li>
                     <li className="negative">You handle mutation alone</li>
                     <li className="negative">Commission-driven approach</li>
                     <li className="negative">No post-sale support</li>
                  </ul>
               </div>
               <div className="comparison-column premium">
                  <div className="column-header premium-header">
                     <h3>Dau Dada Consultants</h3>
                     <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 premium-badge">Recommended</div>
                  </div>
                  <ul className="comparison-features">
                     <li className="positive">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check" aria-hidden="true">
                           <circle cx="12" cy="12" r="10"></circle>
                           <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        30-year legal chain verification
                     </li>
                     <li className="positive">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check" aria-hidden="true">
                           <circle cx="12" cy="12" r="10"></circle>
                           <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Physical ground measurement
                     </li>
                     <li className="positive">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check" aria-hidden="true">
                           <circle cx="12" cy="12" r="10"></circle>
                           <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Expert lawyer on team
                     </li>
                     <li className="positive">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check" aria-hidden="true">
                           <circle cx="12" cy="12" r="10"></circle>
                           <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Complete Dakhil-Kharij support
                     </li>
                     <li className="positive">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check" aria-hidden="true">
                           <circle cx="12" cy="12" r="10"></circle>
                           <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Safety-first approach
                     </li>
                     <li className="positive">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check" aria-hidden="true">
                           <circle cx="12" cy="12" r="10"></circle>
                           <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Lifetime guidance &amp; support
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
      <ClientSay />
      <section className="team-section">
         <div className="container">
            <div className="section-header">
               <h2 className="section-title">Meet Our Expert Team</h2>
               <p className="section-subtitle">Dedicated professionals ensuring your property investment is safe and secure</p>
            </div>
            <div className="team-grid">
               <div className="rounded-xl border bg-card text-card-foreground shadow team-card">
                  <div className="p-6 pt-0 team-content">
                     <div className="team-image"><span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full team-avatar"><img className="aspect-square h-full w-full" alt="Amit Sharma" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" /></span></div>
                     <h3 className="team-name">Amit Sharma</h3>
                     <p className="team-role">Founder &amp; Chief Consultant</p>
                     <p className="team-description">15+ years of experience in Brij region real estate</p>
                     <div className="team-expertise">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 expertise-badge">Property Law</div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 expertise-badge">Land Verification</div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 expertise-badge">MVDA Compliance</div>
                     </div>
                  </div>
               </div>
               <div className="rounded-xl border bg-card text-card-foreground shadow team-card">
                  <div className="p-6 pt-0 team-content">
                     <div className="team-image"><span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full team-avatar"><img className="aspect-square h-full w-full" alt="Priya Verma" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" /></span></div>
                     <h3 className="team-name">Priya Verma</h3>
                     <p className="team-role">Legal Advisor</p>
                     <p className="team-description">Expert in property documentation and title verification</p>
                     <div className="team-expertise">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 expertise-badge">Title Search</div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 expertise-badge">Legal Documentation</div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 expertise-badge">Registry Support</div>
                     </div>
                  </div>
               </div>
               <div className="rounded-xl border bg-card text-card-foreground shadow team-card">
                  <div className="p-6 pt-0 team-content">
                     <div className="team-image"><span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full team-avatar"><img className="aspect-square h-full w-full" alt="Rajesh Kumar" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" /></span></div>
                     <h3 className="team-name">Rajesh Kumar</h3>
                     <p className="team-role">Field Operations Head</p>
                     <p className="team-description">Specialist in physical land verification and surveys</p>
                     <div className="team-expertise">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 expertise-badge">Land Measurement</div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 expertise-badge">Boundary Verification</div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 expertise-badge">Site Inspection</div>
                     </div>
                  </div>
               </div>
               <div className="rounded-xl border bg-card text-card-foreground shadow team-card">
                  <div className="p-6 pt-0 team-content">
                     <div className="team-image"><span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full team-avatar"><img className="aspect-square h-full w-full" alt="Sunita Devi" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" /></span></div>
                     <h3 className="team-name">Sunita Devi</h3>
                     <p className="team-role">Client Relations Manager</p>
                     <p className="team-description">Dedicated to ensuring smooth client experience</p>
                     <div className="team-expertise">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 expertise-badge">Customer Support</div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 expertise-badge">Follow-up</div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 expertise-badge">Documentation Coordination</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="cta-section">
         <div className="container">
            <div className="cta-content">
               <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up cta-icon" aria-hidden="true">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
               </svg>
               <h2 className="cta-title">Ready to Invest in the Holy Land?</h2>
               <p className="cta-description">Let our experts guide you to a safe and profitable property investment in Brij region</p>
               <div className="cta-buttons"><button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-8">Get Free Consultation</button><Link href={'/properties'} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground h-10 rounded-md px-8">Browse Properties</Link></div>
            </div>
         </div>
      </section>
   </div>
</main>
    )
} 