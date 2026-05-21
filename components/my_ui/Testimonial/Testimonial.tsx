interface props{
    heading:string;
}
export default function Testimonial({heading}: props){
    return(
        <section className="bg-brand-cream py-20 md:py-24" data-testid="testimonials-section">
         <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-14">
               <div className="text-xs uppercase tracking-[0.25em] text-brand-red mb-2">Testimonials</div>
               <h2 className="font-display text-4xl md:text-5xl font-medium text-brand-ink mb-3">{heading}</h2>
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
                        <div className="text-[11px] tracking-wide opacity-90">Sub-Head, Times of India</div>
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
                <article data-testid="testimonial-card-3" className="bg-white rounded-2xl border border-brand-cream overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="aspect-[4/5] overflow-hidden relative">
                  <img alt="Sudhanshu Sharma" className="w-full h-full object-cover" src="https://customer-assets.emergentagent.com/job_daudada-realty/artifacts/kuo45hnu_WhatsApp%20Image%202026-05-04%20at%2020.48.27%20%283%29.jpeg" />
                    
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
               <article data-testid="testimonial-card-2" className="bg-white rounded-2xl border border-brand-cream overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="aspect-[4/5] overflow-hidden relative">
                      <img alt="Rajkumar" className="w-full h-full object-cover" src="https://customer-assets.emergentagent.com/job_daudada-realty/artifacts/0jqejqg0_WhatsApp%20Image%202026-05-04%20at%2020.48.27%20%282%29.jpeg" />
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
              
            </div>
            <div className="text-center mt-12"><a href="/reviews" data-discover="true"><button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow h-9 rounded-full bg-brand-ink text-white hover:bg-black px-8 py-6" data-testid="testimonials-watch-btn">View Reviews</button></a></div>
         </div>
      </section>
    )
}