// import Link from "next/link";
// import HomeCounter from "../HomeCounter/HomeCounter";
// import ClientSay from "../ClientSay/ClientSay";

import HomeTab from "../HomeTab/HomeTab";

export default function Hero(){
    return(
        <main className="flex-1">
   <div data-testid="home-page">
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
         <div className="absolute inset-0">
            <video data-testid="hero-video" autoPlay loop playsInline preload="auto" muted className="w-full h-full object-cover bg-brand-ink">
               <source src="https://customer-assets.emergentagent.com/job_daudada-realty/artifacts/jsv86xr4_Goverdhan%20Today.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-brand-ivory"></div>
         </div>
         <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 w-full">
            <div className="max-w-3xl text-white fade-up">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur text-xs uppercase tracking-[0.2em] mb-6"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>Jai Shri Giriraj Ji</div>
               <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight mb-6">Explore the Brij: Find Your <em className="text-brand-gold not-italic font-normal">Sacred Space</em></h1>
               <p className="text-lg md:text-xl font-light opacity-90 mb-8 max-w-2xl leading-relaxed">Premium real estate consultancy for the sacred Brij region. Every plot we represent comes with a 30-year title search and MVDA compliance — verified by our in-house lawyer.</p>
            </div>
            <form data-testid="hero-search-form" className="mt-10 bg-white rounded-2xl shadow-soft border border-brand-cream p-5 md:p-7 max-w-5xl">
               <div  className="mb-5">
                  <div  className="inline-flex items-center justify-center text-muted-foreground bg-brand-cream rounded-full p-1 h-auto"  style={{ outline: 'none'}}>
                     <button type="button" data-state="active"  className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow rounded-full data-[state=active]:bg-brand-red data-[state=active]:text-white px-6 py-2 text-sm">Buy</button>
                     <button type="button" className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow rounded-full data-[state=active]:bg-brand-red data-[state=active]:text-white px-6 py-2 text-sm">Rent</button>
                     <button type="button" className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow rounded-full data-[state=active]:bg-brand-red data-[state=active]:text-white px-6 py-2 text-sm">Sell</button></div>
               </div>
               <div className="grid md:grid-cols-12 gap-3">
                  <div className="md:col-span-3">
                     <button type="button" role="combobox" aria-controls="radix-_r_4_" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" className="flex w-full items-center justify-between whitespace-nowrap border bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-12 rounded-xl border-brand-cream" data-testid="hero-location-select">
                        <span style={{ pointerEvents: 'none'}}>All Brij Locations</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                           <path d="m6 9 6 6 6-6"></path>
                        </svg>
                     </button>
                     <select aria-hidden="true" tabIndex={-1} style={{ position: 'absolute', border: '0px', width: '1px', height: '1px', padding: '0px', margin: '-1px', overflow: 'hidden', clip: 'rect(0px, 0px, 0px, 0px)', whiteSpace: 'nowrap', overflowWrap: 'normal'}}>
                        <option value="all">All Brij Locations</option>
                        <option value="Govardhan">Govardhan</option>
                        <option value="Vrindavan">Vrindavan</option>
                        <option value="Mathura">Mathura</option>
                        <option value="Barsana">Barsana</option>
                        <option value="Jatipura">Jatipura</option>
                     </select>
                  </div>
                  <div className="md:col-span-4">
                     <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-ink-soft" aria-hidden="true">
                           <path d="m21 21-4.34-4.34"></path>
                           <circle cx="11" cy="11" r="8"></circle>
                        </svg>
                        <input className="flex w-full border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 rounded-xl pl-9 border-brand-cream" data-testid="hero-locality-input" placeholder="Locality (Parikrama Marg, Chhatikara…)" value="" />
                     </div>
                  </div>
                  <div className="md:col-span-3">
                     <button type="button" role="combobox" aria-controls="radix-_r_5_" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" className="flex w-full items-center justify-between whitespace-nowrap border bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-12 rounded-xl border-brand-cream" data-testid="hero-type-select">
                        <span style={{ pointerEvents: 'none'}}>All Types</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                           <path d="m6 9 6 6 6-6"></path>
                        </svg>
                     </button>
                     <select aria-hidden="true" tabIndex={-1} style={{ position: 'absolute', border: '0px', width: '1px', height: '1px', padding: '0px', margin: '-1px', overflow: 'hidden', clip: 'rect(0px, 0px, 0px, 0px)', whiteSpace: 'nowrap', overflowWrap: 'normal'}}>
                        <option value="all">All Types</option>
                        <option value="plot">Plot</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="farmhouse">Farmhouse</option>
                     </select>
                  </div>
                  <div className="md:col-span-2"><button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow px-4 py-2 w-full h-12 rounded-xl bg-brand-red text-white hover:bg-brand-red-dark shadow-brand" data-testid="hero-search-btn" type="submit">Search</button></div>
               </div>
            </form>
         </div>
      </section>
      <section className="bg-brand-ivory py-10 border-b border-brand-cream" data-testid="quick-nav">
         <div className="max-w-7xl mx-auto px-6 md:px-10">
            <p className="text-center text-xs uppercase tracking-[0.25em] text-brand-red mb-6">Jump to your sacred location</p>
            <div className="flex justify-center flex-wrap gap-6 md:gap-10">
               <a data-testid="quick-nav-Mathura" className="group flex flex-col items-center gap-3" href="/properties?loc=Mathura" data-discover="true">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-brand-cream group-hover:ring-brand-red group-hover:scale-105 transition-all"><img alt="Mathura" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?auto=format&amp;fit=crop&amp;w=400&amp;q=80" /></div>
                  <span className="font-display text-xl font-medium text-brand-ink group-hover:text-brand-red transition-colors">Mathura</span>
               </a>
               <a data-testid="quick-nav-Govardhan" className="group flex flex-col items-center gap-3" href="/properties?loc=Govardhan" data-discover="true">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-brand-cream group-hover:ring-brand-red group-hover:scale-105 transition-all"><img alt="Govardhan" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&amp;fit=crop&amp;w=400&amp;q=80" /></div>
                  <span className="font-display text-xl font-medium text-brand-ink group-hover:text-brand-red transition-colors">Govardhan</span>
               </a>
               <a data-testid="quick-nav-Vrindavan" className="group flex flex-col items-center gap-3" href="/properties?loc=Vrindavan" data-discover="true">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-brand-cream group-hover:ring-brand-red group-hover:scale-105 transition-all"><img alt="Vrindavan" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1567604130959-7ea7ab2a7e4f?auto=format&amp;fit=crop&amp;w=400&amp;q=80" /></div>
                  <span className="font-display text-xl font-medium text-brand-ink group-hover:text-brand-red transition-colors">Vrindavan</span>
               </a>
               <a data-testid="quick-nav-Barsana" className="group flex flex-col items-center gap-3" href="/properties?loc=Barsana" data-discover="true">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-brand-cream group-hover:ring-brand-red group-hover:scale-105 transition-all"><img alt="Barsana" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&amp;fit=crop&amp;w=400&amp;q=80" /></div>
                  <span className="font-display text-xl font-medium text-brand-ink group-hover:text-brand-red transition-colors">Barsana</span>
               </a>
               <a data-testid="quick-nav-Jatipura" className="group flex flex-col items-center gap-3" href="/properties?loc=Jatipura" data-discover="true">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-brand-cream group-hover:ring-brand-red group-hover:scale-105 transition-all"><img alt="Jatipura" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&amp;fit=crop&amp;w=400&amp;q=80" /></div>
                  <span className="font-display text-xl font-medium text-brand-ink group-hover:text-brand-red transition-colors">Jatipura</span>
               </a>
               <a data-testid="quick-nav-view-all" className="group flex flex-col items-center gap-3" href="/properties" data-discover="true">
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-emerald-600 bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center group-hover:scale-105 transition-all shadow-[0_10px_30px_-10px_rgba(5,150,105,0.5)]">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trees w-10 h-10 text-white" aria-hidden="true">
                        <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"></path>
                        <path d="M7 16v6"></path>
                        <path d="M13 19v3"></path>
                        <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"></path>
                     </svg>
                     <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3.5 h-3.5 text-emerald-700" aria-hidden="true">
                           <path d="M5 12h14"></path>
                           <path d="m12 5 7 7-7 7"></path>
                        </svg>
                     </span>
                  </div>
                  <span className="font-display text-xl font-medium text-emerald-700 group-hover:text-emerald-800 transition-colors text-center leading-tight">View All<br /><span className="text-sm">Locations</span></span>
               </a>
            </div>
         </div>
      </section>
      <section className="bg-brand-ink text-white py-8" data-testid="trust-strip">
         <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center gap-3">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check text-brand-gold" aria-hidden="true">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
               </svg>
               30-Year Title Search on every property
            </div>
            <div className="flex items-center gap-3">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scroll-text text-brand-gold" aria-hidden="true">
                  <path d="M15 12h-5"></path>
                  <path d="M15 8h-5"></path>
                  <path d="M19 17V5a2 2 0 0 0-2-2H4"></path>
                  <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path>
               </svg>
               Lawyer-verified legal opinion included
            </div>
            <div className="flex items-center gap-3">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pinned text-brand-gold" aria-hidden="true">
                  <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"></path>
                  <circle cx="12" cy="8" r="2"></circle>
                  <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"></path>
               </svg>
               MVDA master plan cross-checked
            </div>
         </div>
      </section>
      <HomeTab />
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24" data-testid="home-services">
         <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-brand-red mb-2">Why Dau Dada</div>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-brand-ink max-w-3xl mx-auto">Three pillars that protect every <em className="text-brand-red not-italic">rupee</em> you invest</h2>
         </div>
         <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-brand-cream hover:border-brand-gold/40 transition-all" data-testid="service-pillar-0">
               <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scale w-6 h-6 text-brand-red" aria-hidden="true">
                     <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                     <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                     <path d="M7 21h10"></path>
                     <path d="M12 3v18"></path>
                     <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
                  </svg>
               </div>
               <h3 className="font-display text-2xl font-medium text-brand-ink mb-3">Legal Support Wing</h3>
               <p className="text-brand-ink-soft font-light leading-relaxed">30-year title search, legal opinion, registry assistance — handled by our in-house lawyer.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-brand-cream hover:border-brand-gold/40 transition-all" data-testid="service-pillar-1">
               <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye w-6 h-6 text-brand-red" aria-hidden="true">
                     <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                     <circle cx="12" cy="12" r="3"></circle>
                  </svg>
               </div>
               <h3 className="font-display text-2xl font-medium text-brand-ink mb-3">Ground Verification</h3>
               <p className="text-brand-ink-soft font-light leading-relaxed">Physical site visit, boundary measurement, and confirmation with neighbours.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-brand-cream hover:border-brand-gold/40 transition-all" data-testid="service-pillar-2">
               <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-search w-6 h-6 text-brand-red" aria-hidden="true">
                     <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                     <path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"></path>
                     <path d="m9 18-1.5-1.5"></path>
                     <circle cx="5" cy="14" r="3"></circle>
                  </svg>
               </div>
               <h3 className="font-display text-2xl font-medium text-brand-ink mb-3">MVDA Compliance</h3>
               <p className="text-brand-ink-soft font-light leading-relaxed">Cross-checked with the latest Mathura Vrindavan Development Authority master plan.</p>
            </div>
         </div>
      </section>
      <section className="bg-brand-cream py-20 md:py-24" data-testid="testimonials-section">
         <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-14">
               <div className="text-xs uppercase tracking-[0.25em] text-brand-red mb-2">Testimonials</div>
               <h2 className="font-display text-4xl md:text-5xl font-medium text-brand-ink mb-3">What our buyers say</h2>
               <p className="text-brand-ink-soft font-light max-w-2xl mx-auto">Real stories from devotees, NRIs and Brij investors</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
               <article data-testid="testimonial-card-0" className="bg-white rounded-2xl border border-brand-cream overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="aspect-[4/5] overflow-hidden relative">
                     <img alt="Amit Dashana" className="w-full h-full object-cover" src="https://customer-assets.emergentagent.com/job_daudada-realty/artifacts/zqfoh7zb_WhatsApp%20Image%202026-05-04%20at%2020.48.27.jpeg" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"></div>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote absolute top-4 right-4 w-7 h-7 text-brand-gold/80" aria-hidden="true">
                        <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                        <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                     </svg>
                     <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="font-display text-xl font-medium leading-tight">Amit Dashana</div>
                        <div className="text-[11px] tracking-wide opacity-90">Sub-Editor, Times of India</div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mt-0.5">Haridwar</div>
                     </div>
                  </div>
                  <div className="p-5 flex-1 flex">
                     <p className="text-sm text-brand-ink-soft font-light leading-relaxed italic">&quot;Buying near the Parikrama Marg felt sacred and risk-free. Adv. Nitin&apos;s 30-year title search gave my family complete peace of mind.&quot;</p>
                  </div>
               </article>
               <article data-testid="testimonial-card-1" className="bg-white rounded-2xl border border-brand-cream overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="aspect-[4/5] overflow-hidden relative">
                     <img alt="Aman Birla" className="w-full h-full object-cover" src="https://customer-assets.emergentagent.com/job_daudada-realty/artifacts/h6fehy4w_WhatsApp%20Image%202026-05-04%20at%2020.48.27%20%281%29.jpeg" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"></div>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote absolute top-4 right-4 w-7 h-7 text-brand-gold/80" aria-hidden="true">
                        <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                        <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                     </svg>
                     <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="font-display text-xl font-medium leading-tight">Aman Birla</div>
                        <div className="text-[11px] tracking-wide opacity-90">Co-Founder, Beyond Road Tour</div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mt-0.5">Delhi</div>
                     </div>
                  </div>
                  <div className="p-5 flex-1 flex">
                     <p className="text-sm text-brand-ink-soft font-light leading-relaxed italic">&quot;Dau Dada doesn&apos;t sell — they consult. They walked me through MVDA zoning and exit liquidity before I committed. Rare honesty.&quot;</p>
                  </div>
               </article>
               <article data-testid="testimonial-card-2" className="bg-white rounded-2xl border border-brand-cream overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="aspect-[4/5] overflow-hidden relative">
                     <img alt="Sudhanshu Sharma" className="w-full h-full object-cover" src="https://customer-assets.emergentagent.com/job_daudada-realty/artifacts/kuo45hnu_WhatsApp%20Image%202026-05-04%20at%2020.48.27%20%283%29.jpeg" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"></div>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote absolute top-4 right-4 w-7 h-7 text-brand-gold/80" aria-hidden="true">
                        <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                        <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                     </svg>
                     <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="font-display text-xl font-medium leading-tight">Sudhanshu Sharma</div>
                        <div className="text-[11px] tracking-wide opacity-90">Business Owner</div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mt-0.5">Delhi</div>
                     </div>
                  </div>
                  <div className="p-5 flex-1 flex">
                     <p className="text-sm text-brand-ink-soft font-light leading-relaxed italic">&quot;From farm well to mutation papers — Ravi ji&apos;s local network closed my farmhouse deal in 18 days. Smooth, transparent, devotional.&quot;</p>
                  </div>
               </article>
               <article data-testid="testimonial-card-3" className="bg-white rounded-2xl border border-brand-cream overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="aspect-[4/5] overflow-hidden relative">
                     <img alt="Rajkumar" className="w-full h-full object-cover" src="https://customer-assets.emergentagent.com/job_daudada-realty/artifacts/0jqejqg0_WhatsApp%20Image%202026-05-04%20at%2020.48.27%20%282%29.jpeg" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"></div>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote absolute top-4 right-4 w-7 h-7 text-brand-gold/80" aria-hidden="true">
                        <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                        <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                     </svg>
                     <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="font-display text-xl font-medium leading-tight">Rajkumar</div>
                        <div className="text-[11px] tracking-wide opacity-90">Business Manager</div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mt-0.5">Mumbai</div>
                     </div>
                  </div>
                  <div className="p-5 flex-1 flex">
                     <p className="text-sm text-brand-ink-soft font-light leading-relaxed italic">&quot;I&apos;m based in Mumbai but trusted Dau Dada for a Vrindavan plot. End-to-end registry handled remotely. Faith-meets-legal — for real.&quot;</p>
                  </div>
               </article>
            </div>
            <div className="text-center mt-12"><a href="/reviews" data-discover="true"><button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow h-9 rounded-full bg-brand-ink text-white hover:bg-black px-8 py-6" data-testid="testimonials-watch-btn">Watch Video Reviews</button></a></div>
         </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24" data-testid="home-cta">
         <div className="bg-brand-ink rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-brand-red/30 blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-brand-gold/20 blur-3xl"></div>
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
               <div>
                  <h2 className="font-display text-4xl md:text-5xl font-medium mb-5">Have land in Brij to sell?</h2>
                  <p className="font-light opacity-80 leading-relaxed mb-8">We bring serious, verified buyers — and our legal wing handles paperwork end to end. List your property with us and let your land find the right hands.</p>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow h-9 rounded-full bg-brand-red text-white hover:bg-brand-red-dark px-8 py-6 text-base shadow-brand" data-testid="home-cta-list-btn">
                     List Your Property 
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 w-4 h-4" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                     </svg>
                  </button>
               </div>
               <div className="hidden md:block"><img alt="legal trust" className="rounded-2xl border border-white/10" src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?auto=format&amp;fit=crop&amp;w=900&amp;q=80" /></div>
            </div>
         </div>
      </section>
      <section
  className="bg-brand-cream/60 border-y border-brand-cream"
  data-testid="seo-block"
>
  <div className="max-w-5xl mx-auto px-6 md:px-10 py-14 text-center">
    <h2 className="font-display text-3xl md:text-4xl font-medium text-brand-ink mb-5">
      Real Estate Across the Brij Bhoomi
    </h2>
    <p className="text-brand-ink-soft font-light leading-relaxed text-lg">
      Find your dream home in the heart of the{" "}
      <strong className="text-brand-ink">Brij Bhoomi</strong>. We specialize in
      verified residential and commercial properties across{" "}
      <strong className="text-brand-ink">
        Mathura, Vrindavan, Govardhan and Barsana
      </strong>
      . Whether you are looking for a plot near the{" "}
      <strong className="text-brand-ink">Parikrama Marg</strong> or a luxury
      apartment in <strong className="text-brand-ink">Govind Nagar</strong>, our
      listings provide the best real estate opportunities in the{" "}
      <strong className="text-brand-ink">Jatipura</strong> and{" "}
      <strong className="text-brand-ink">Goverdhan</strong> regions.
    </p>
  </div>
</section>
   </div>
</main>
    )
} 