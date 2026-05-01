export default function Properties() {
  return <div>
    <main className="main-content">
   <div className="properties-page">
      <section className="page-header">
         <div className="container">
            <h1 className="page-title">Verified Properties</h1>
            <p className="page-subtitle">All properties undergo our rigorous 3-step verification process</p>
         </div>
      </section>
      <section className="filter-section">
         <div className="container">
            <div className="rounded-xl border bg-card text-card-foreground shadow filter-card">
               <div className="p-6 pt-0 filter-content">
                  <div className="filter-grid">
                     <div className="filter-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search filter-icon" aria-hidden="true">
                           <path d="m21 21-4.34-4.34"></path>
                           <circle cx="11" cy="11" r="8"></circle>
                        </svg>
                        <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm search-input" placeholder="Search by location or property name..." value="" />
                     </div>
                     <button type="button" role="combobox" aria-controls="radix-_r_i_" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1">
                        <span style={{ pointerEvents: 'none' }}>All Locations</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                           <path d="m6 9 6 6 6-6"></path>
                        </svg>
                     </button>
                     <button type="button" role="combobox" aria-controls="radix-_r_j_" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1">
                        <span style={{ pointerEvents: 'none' }}>All Types</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                           <path d="m6 9 6 6 6-6"></path>
                        </svg>
                     </button>
                     <button type="button" role="combobox" aria-controls="radix-_r_k_" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1">
                        <span style={{ pointerEvents: 'none' }}>All Budgets</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                           <path d="m6 9 6 6 6-6"></path>
                        </svg>
                     </button>
                  </div>
                  <div className="filter-results"><span className="results-count">6 Properties Found</span></div>
               </div>
            </div>
         </div>
      </section>
      <section className="properties-list">
         <div className="container">
            <div className="properties-grid">
               <div className="rounded-xl border bg-card text-card-foreground shadow property-card">
                  <div className="property-image">
                     <img alt="Premium Residential Plot in Goverdhan" src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBsYW5kfGVufDB8fHx8MTc3NTMyMDMyM3ww&amp;ixlib=rb-4.1.0&amp;q=85" />
                     <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 verified-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield-check" aria-hidden="true">
                           <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                           <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                     </div>
                     <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 featured-badge">Featured</div>
                  </div>
                  <div className="p-6 pt-0 property-content">
                     <div className="property-header">
                        <h3 className="property-title">Premium Residential Plot in Goverdhan</h3>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Residential</div>
                     </div>
                     <div className="property-location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin-check" aria-hidden="true">
                           <path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"></path>
                           <circle cx="12" cy="10" r="3"></circle>
                           <path d="m16 18 2 2 4-4"></path>
                        </svg>
                        Goverdhan
                     </div>
                     <p className="property-description">Prime location near Goverdhan Parikrama Marg. Clear title with 30-year chain verification completed.</p>
                     <div className="property-features">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Clear Title</div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Near Main Road</div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Gated Community</div>
                     </div>
                     <div className="property-details">
                        <div className="detail-item"><span className="detail-label">Area</span><span className="detail-value">2500 sq ft</span></div>
                        <div className="detail-item"><span className="detail-label">Price</span><span className="detail-value">₹25,00,000</span></div>
                        <div className="detail-item"><span className="detail-label">Per Sq Ft</span><span className="detail-value">₹1,000</span></div>
                     </div>
                     <div className="safety-scores">
                        <div className="score-item"><span>Legal</span><strong className="score-value">10/10</strong></div>
                        <div className="score-divider"></div>
                        <div className="score-item"><span>Possession</span><strong className="score-value">10/10</strong></div>
                        <div className="score-divider"></div>
                        <div className="score-item"><span>Resale</span><strong className="score-value">High</strong></div>
                     </div>
                     <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full">Request Details</button>
                  </div>
               </div>
               <div className="rounded-xl border bg-card text-card-foreground shadow property-card">
                  <div className="property-image">
                     <img alt="Agricultural Land in Variava" src="https://images.unsplash.com/photo-1621928372414-30e144d51d49?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwyfHxhZ3JpY3VsdHVyYWwlMjBsYW5kfGVufDB8fHx8MTc3NTMyMDMyM3ww&amp;ixlib=rb-4.1.0&amp;q=85" />
                     <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 verified-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield-check" aria-hidden="true">
                           <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                           <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                     </div>
                     <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 featured-badge">Featured</div>
                  </div>
                  <div className="p-6 pt-0 property-content">
                     <div className="property-header">
                        <h3 className="property-title">Agricultural Land in Variava</h3>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Agricultural</div>
                     </div>
                     <div className="property-location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin-check" aria-hidden="true">
                           <path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"></path>
                           <circle cx="12" cy="10" r="3"></circle>
                           <path d="m16 18 2 2 4-4"></path>
                        </svg>
                        Variava
                     </div>
                     <p className="property-description">Fertile agricultural land with water facility. Perfect for farming or future development.</p>
                     <div className="property-features">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Water Connection</div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Boundary Wall</div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Approach Road</div>
                     </div>
                     <div className="property-details">
                        <div className="detail-item"><span className="detail-label">Area</span><span className="detail-value">1 Acre</span></div>
                        <div className="detail-item"><span className="detail-label">Price</span><span className="detail-value">₹50,00,000</span></div>
                        <div className="detail-item"><span className="detail-label">Per Sq Ft</span><span className="detail-value">₹115</span></div>
                     </div>
                     <div className="safety-scores">
                        <div className="score-item"><span>Legal</span><strong className="score-value">10/10</strong></div>
                        <div className="score-divider"></div>
                        <div className="score-item"><span>Possession</span><strong className="score-value">10/10</strong></div>
                        <div className="score-divider"></div>
                        <div className="score-item"><span>Resale</span><strong className="score-value">Very High</strong></div>
                     </div>
                     <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full">Request Details</button>
                  </div>
               </div>
               <div className="rounded-xl border bg-card text-card-foreground shadow property-card">
                  <div className="property-image">
                     <img alt="Commercial Plot Near Mathura Highway" src="https://images.pexels.com/photos/11782285/pexels-photo-11782285.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=650&amp;w=940" />
                     <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 verified-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield-check" aria-hidden="true">
                           <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                           <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                     </div>
                     <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 featured-badge">Featured</div>
                  </div>
                  <div className="p-6 pt-0 property-content">
                     <div className="property-header">
                        <h3 className="property-title">Commercial Plot Near Mathura Highway</h3>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Commercial</div>
                     </div>
                     <div className="property-location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin-check" aria-hidden="true">
                           <path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"></path>
                           <circle cx="12" cy="10" r="3"></circle>
                           <path d="m16 18 2 2 4-4"></path>
                        </svg>
                        Mathura
                     </div>
                     <p className="property-description">Strategic location on Mathura-Delhi Highway. Ideal for commercial ventures or showroom.</p>
                     <div className="property-features">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Highway Facing</div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">High Visibility</div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Clear Title</div>
                     </div>
                     <div className="property-details">
                        <div className="detail-item"><span className="detail-label">Area</span><span className="detail-value">3000 sq ft</span></div>
                        <div className="detail-item"><span className="detail-label">Price</span><span className="detail-value">₹45,00,000</span></div>
                        <div className="detail-item"><span className="detail-label">Per Sq Ft</span><span className="detail-value">₹1,500</span></div>
                     </div>
                     <div className="safety-scores">
                        <div className="score-item"><span>Legal</span><strong className="score-value">10/10</strong></div>
                        <div className="score-divider"></div>
                        <div className="score-item"><span>Possession</span><strong className="score-value">10/10</strong></div>
                        <div className="score-divider"></div>
                        <div className="score-item"><span>Resale</span><strong className="score-value">Very High</strong></div>
                     </div>
                     <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full">Request Details</button>
                  </div>
               </div>
               <div className="rounded-xl border bg-card text-card-foreground shadow property-card">
                  <div className="property-image">
                     <img alt="Ashram Plot in Vrindavan" src="https://images.pexels.com/photos/18346189/pexels-photo-18346189.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=650&amp;w=940" />
                     <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 verified-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield-check" aria-hidden="true">
                           <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                           <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                     </div>
                  </div>
                  <div className="p-6 pt-0 property-content">
                     <div className="property-header">
                        <h3 className="property-title">Ashram Plot in Vrindavan</h3>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Institutional</div>
                     </div>
                     <div className="property-location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin-check" aria-hidden="true">
                           <path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"></path>
                           <circle cx="12" cy="10" r="3"></circle>
                           <path d="m16 18 2 2 4-4"></path>
                        </svg>
                        Vrindavan
                     </div>
                     <p className="property-description">Peaceful location suitable for ashram or spiritual center. All clearances verified.</p>
                     <div className="property-features">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Peaceful Area</div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Temple Proximity</div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Clean Title</div>
                     </div>
                     <div className="property-details">
                        <div className="detail-item"><span className="detail-label">Area</span><span className="detail-value">5000 sq ft</span></div>
                        <div className="detail-item"><span className="detail-label">Price</span><span className="detail-value">₹75,00,000</span></div>
                        <div className="detail-item"><span className="detail-label">Per Sq Ft</span><span className="detail-value">₹1,500</span></div>
                     </div>
                     <div className="safety-scores">
                        <div className="score-item"><span>Legal</span><strong className="score-value">10/10</strong></div>
                        <div className="score-divider"></div>
                        <div className="score-item"><span>Possession</span><strong className="score-value">10/10</strong></div>
                        <div className="score-divider"></div>
                        <div className="score-item"><span>Resale</span><strong className="score-value">High</strong></div>
                     </div>
                     <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full">Request Details</button>
                  </div>
               </div>
               <div className="rounded-xl border bg-card text-card-foreground shadow property-card">
                  <div className="property-image">
                     <img alt="Investment Plot in Goverdhan" src="https://images.unsplash.com/photo-1461175827210-5ceac3e39dd2?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxsYW5kJTIwcGxvdHxlbnwwfHx8fDE3NzUzMjAzMzB8MA&amp;ixlib=rb-4.1.0&amp;q=85" />
                     <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 verified-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield-check" aria-hidden="true">
                           <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                           <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                     </div>
                  </div>
                  <div className="p-6 pt-0 property-content">
                     <div className="property-header">
                        <h3 className="property-title">Investment Plot in Goverdhan</h3>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Residential</div>
                     </div>
                     <div className="property-location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin-check" aria-hidden="true">
                           <path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"></path>
                           <circle cx="12" cy="10" r="3"></circle>
                           <path d="m16 18 2 2 4-4"></path>
                        </svg>
                        Goverdhan
                     </div>
                     <p className="property-description">Affordable investment opportunity with excellent growth potential in developing area.</p>
                     <div className="property-features">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Affordable Price</div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Growth Potential</div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Clear Documentation</div>
                     </div>
                     <div className="property-details">
                        <div className="detail-item"><span className="detail-label">Area</span><span className="detail-value">1800 sq ft</span></div>
                        <div className="detail-item"><span className="detail-label">Price</span><span className="detail-value">₹18,00,000</span></div>
                        <div className="detail-item"><span className="detail-label">Per Sq Ft</span><span className="detail-value">₹1,000</span></div>
                     </div>
                     <div className="safety-scores">
                        <div className="score-item"><span>Legal</span><strong className="score-value">10/10</strong></div>
                        <div className="score-divider"></div>
                        <div className="score-item"><span>Possession</span><strong className="score-value">10/10</strong></div>
                        <div className="score-divider"></div>
                        <div className="score-item"><span>Resale</span><strong className="score-value">High</strong></div>
                     </div>
                     <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full">Request Details</button>
                  </div>
               </div>
               <div className="rounded-xl border bg-card text-card-foreground shadow property-card">
                  <div className="property-image">
                     <img alt="Large Agricultural Land in Variava" src="https://images.unsplash.com/photo-1587745890135-20db8c79b027?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxsYW5kJTIwcGxvdHxlbnwwfHx8fDE3NzUzMjAzMzB8MA&amp;ixlib=rb-4.1.0&amp;q=85" />
                     <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 verified-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield-check" aria-hidden="true">
                           <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                           <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                     </div>
                  </div>
                  <div className="p-6 pt-0 property-content">
                     <div className="property-header">
                        <h3 className="property-title">Large Agricultural Land in Variava</h3>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Agricultural</div>
                     </div>
                     <div className="property-location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin-check" aria-hidden="true">
                           <path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"></path>
                           <circle cx="12" cy="10" r="3"></circle>
                           <path d="m16 18 2 2 4-4"></path>
                        </svg>
                        Variava
                     </div>
                     <p className="property-description">Expansive agricultural land perfect for large-scale farming or planned development.</p>
                     <div className="property-features">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">2 Acre Land</div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Irrigation Ready</div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Multiple Access Points</div>
                     </div>
                     <div className="property-details">
                        <div className="detail-item"><span className="detail-label">Area</span><span className="detail-value">2 Acre</span></div>
                        <div className="detail-item"><span className="detail-label">Price</span><span className="detail-value">₹95,00,000</span></div>
                        <div className="detail-item"><span className="detail-label">Per Sq Ft</span><span className="detail-value">₹109</span></div>
                     </div>
                     <div className="safety-scores">
                        <div className="score-item"><span>Legal</span><strong className="score-value">10/10</strong></div>
                        <div className="score-divider"></div>
                        <div className="score-item"><span>Possession</span><strong className="score-value">10/10</strong></div>
                        <div className="score-divider"></div>
                        <div className="score-item"><span>Resale</span><strong className="score-value">Very High</strong></div>
                     </div>
                     <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full">Request Details</button>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="properties-cta">
         <div className="container">
            <div className="cta-box">
               <h2>Can&apos;t Find What You&apos;re Looking For?</h2>
               <p>Contact us with your requirements and we&apos;ll find the perfect property for you</p>
               <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-8">Get Personalized Assistance</button>
            </div>
         </div>
      </section>
   </div>
</main>
  </div>;
}