export default function News() {
  return <div><main className="main-content">
   <div className="newspaper-page">
      <header className="newspaper-masthead">
         <div className="masthead-top">
            <div className="edition-info">Mathura Edition</div>
            <div className="masthead-title">
               <div className="ornamental-line"></div>
               <h1 className="newspaper-name">DAU DADA PROPERTY TIMES</h1>
               <p className="newspaper-tagline">Brij Bhoomi Ki Sabse Bharosemand Property Khabar</p>
               <div className="ornamental-line"></div>
            </div>
            <div className="edition-info">Vol. 1, No. 4</div>
         </div>
         <div className="masthead-bottom">
            <div className="date-info">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar" aria-hidden="true">
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
               </svg>
               Friday, May 1, 2026
            </div>
            <div className="price-info">Free | All Rights Reserved</div>
         </div>
      </header>
      <div className="newspaper-categories">
         <div className="container">
            <button className="category-tab active"><span>All</span></button>
            <button className="category-tab ">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up" aria-hidden="true">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
               </svg>
               <span>Market Watch</span>
            </button>
            <button className="category-tab ">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scale" aria-hidden="true">
                  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                  <path d="M7 21h10"></path>
                  <path d="M12 3v18"></path>
                  <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
               </svg>
               <span>Legal Bulletin</span>
            </button>
            <button className="category-tab ">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-alert" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
               </svg>
               <span>Local Development</span>
            </button>
            <button className="category-tab ">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb" aria-hidden="true">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
               </svg>
               <span>Invest Wise</span>
            </button>
         </div>
      </div>
      <div className="newspaper-content">
         <div className="container">
            <div className="newspaper-grid">
               <aside className="newspaper-sidebar left-sidebar">
                  <div className="sidebar-section">
                     <h3 className="sidebar-title">Quick Updates</h3>
                     <div className="sidebar-divider"></div>
                     <ul className="updates-list">
                        <li className="update-item"><span className="update-bullet">■</span><span>MVDA Master Plan 2041 public hearing scheduled for May 5</span></li>
                        <li className="update-item"><span className="update-bullet">■</span><span>Registry office timing extended till 6 PM from April 25</span></li>
                        <li className="update-item"><span className="update-bullet">■</span><span>New property tax rates effective from fiscal year 2026-27</span></li>
                        <li className="update-item"><span className="update-bullet">■</span><span>Stamp duty concession for women buyers extended till June</span></li>
                        <li className="update-item"><span className="update-bullet">■</span><span>Agricultural land conversion policy under review</span></li>
                     </ul>
                  </div>
                  <div className="service-ad-box ad-primary">
                     <div className="ad-header">🛡️ POSSESSION GUARANTEE</div>
                     <p className="ad-content">On-ground physical verification ke bina deal nahi!</p>
                     <p className="ad-subtext">Zameen aur kagaz dono match - 100% guaranteed</p>
                     <a href="/services/title-search" className="ad-link-btn">Learn More →</a>
                  </div>
                  <div className="service-ad-box ad-secondary">
                     <div className="ad-header">⚖️ LEGAL SHIELD</div>
                     <p className="ad-content">MVDA aur RERA compliance ke liye humse milein</p>
                     <p className="ad-subtext">Complete legal protection for your investment</p>
                     <a href="/services/legal-compliance" className="ad-link-btn">Contact Now →</a>
                  </div>
                  <div className="quick-links-box">
                     <h3 className="quick-links-title">QUICK SERVICES</h3>
                     <div className="quick-links-divider"></div>
                     <a href="/services/legal-compliance" className="quick-link-item"><span className="quick-link-icon">📄</span><span>Verify Your Property Documents</span></a><a href="/services/legal-compliance" className="quick-link-item"><span className="quick-link-icon">✓</span><span>Check MVDA Status</span></a><a href="/services/title-search" className="quick-link-item"><span className="quick-link-icon">🔍</span><span>Request Title Search</span></a>
                  </div>
                  <div className="alert-box">
                     <div className="alert-header">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-alert" aria-hidden="true">
                           <circle cx="12" cy="12" r="10"></circle>
                           <line x1="12" x2="12" y1="8" y2="12"></line>
                           <line x1="12" x2="12.01" y1="16" y2="16"></line>
                        </svg>
                        <span>IMPORTANT ALERT</span>
                     </div>
                     <h4 className="alert-title">New RERA Guidelines for Plot Sales</h4>
                     <p className="alert-excerpt">Mandatory registration for all plot projects above 500 sq meters</p>
                  </div>
               </aside>
               <main className="newspaper-main">
                  <article className="featured-story">
                     <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 story-category">Local Development</div>
                     <a href="/news/1" data-discover="true">
                        <h2 className="featured-headline featured-headline-link">Highway Expansion Project Near Goverdhan Announced</h2>
                     </a>
                     <p className="featured-subheading">NH-19 widening to boost property values in surrounding areas</p>
                     <div className="featured-image">
                        <img alt="Highway Expansion Project Near Goverdhan Announced" src="https://images.unsplash.com/photo-1533562906091-fdfdffc3e3c4?w=800" />
                        <div className="photo-caption">Photo: Highway Expansion Project Near Goverdhan Announced</div>
                     </div>
                     <p className="featured-content">The National Highway Authority of India (NHAI) has announced a major expansion project for NH-19 passing through Goverdhan. The six-lane highway will improve connectivity to Delhi and Agra, expected to increase property values by 20-30% in the next two years.</p>
                     <div className="story-meta"><span className="story-date">April 20, 2026</span></div>
                  </article>
                  <div className="stories-grid">
                     <article className="news-story">
                        <a className="story-link" href="/news/2" data-discover="true">
                           <div className="story-image-small"><img alt="Circle Rates Increase by 12% in Mathura District" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" /></div>
                           <div className="story-content-small">
                              <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground story-tag">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up" aria-hidden="true">
                                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                    <polyline points="16 7 22 7 22 13"></polyline>
                                 </svg>
                                 Market Watch
                              </div>
                              <h3 className="story-headline">Circle Rates Increase by 12% in Mathura District</h3>
                              <p className="story-excerpt">Government revises property rates effective from May 1, 2026</p>
                              <span className="story-date-small">April 18, 2026</span>
                           </div>
                        </a>
                     </article>
                     <article className="news-story">
                        <a className="story-link" href="/news/4" data-discover="true">
                           <div className="story-image-small"><img alt="5 Essential Checks Before Buying Agricultural Land" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800" /></div>
                           <div className="story-content-small">
                              <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground story-tag">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb" aria-hidden="true">
                                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                                    <path d="M9 18h6"></path>
                                    <path d="M10 22h4"></path>
                                 </svg>
                                 Invest Wise
                              </div>
                              <h3 className="story-headline">5 Essential Checks Before Buying Agricultural Land</h3>
                              <p className="story-excerpt">Expert advice on avoiding common pitfalls in farm land investment</p>
                              <span className="story-date-small">April 12, 2026</span>
                           </div>
                        </a>
                     </article>
                     <article className="news-story">
                        <a className="story-link" href="/news/5" data-discover="true">
                           <div className="story-image-small"><img alt="Vrindavan Temple Corridor Phase 2 Approved" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800" /></div>
                           <div className="story-content-small">
                              <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground story-tag">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-alert" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" x2="12" y1="8" y2="12"></line>
                                    <line x1="12" x2="12.01" y1="16" y2="16"></line>
                                 </svg>
                                 Local Development
                              </div>
                              <h3 className="story-headline">Vrindavan Temple Corridor Phase 2 Approved</h3>
                              <p className="story-excerpt">Tourism infrastructure boost to impact nearby property demand</p>
                              <span className="story-date-small">April 10, 2026</span>
                           </div>
                        </a>
                     </article>
                     <article className="news-story">
                        <a className="story-link" href="/news/6" data-discover="true">
                           <div className="story-image-small"><img alt="Dakhil-Kharij Process Now Online in Mathura" src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800" /></div>
                           <div className="story-content-small">
                              <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground story-tag">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scale" aria-hidden="true">
                                    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                                    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                                    <path d="M7 21h10"></path>
                                    <path d="M12 3v18"></path>
                                    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
                                 </svg>
                                 Legal Bulletin
                              </div>
                              <h3 className="story-headline">Dakhil-Kharij Process Now Online in Mathura</h3>
                              <p className="story-excerpt">Digital mutation service launched for faster property transfers</p>
                              <span className="story-date-small">April 8, 2026</span>
                           </div>
                        </a>
                     </article>
                     <article className="news-story">
                        <a className="story-link" href="/news/7" data-discover="true">
                           <div className="story-image-small"><img alt="Investment Returns: Goverdhan vs Vrindavan Comparison" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800" /></div>
                           <div className="story-content-small">
                              <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground story-tag">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up" aria-hidden="true">
                                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                    <polyline points="16 7 22 7 22 13"></polyline>
                                 </svg>
                                 Market Watch
                              </div>
                              <h3 className="story-headline">Investment Returns: Goverdhan vs Vrindavan Comparison</h3>
                              <p className="story-excerpt">5-year property appreciation data analysis</p>
                              <span className="story-date-small">April 5, 2026</span>
                           </div>
                        </a>
                     </article>
                     <article className="news-story">
                        <a className="story-link" href="/news/8" data-discover="true">
                           <div className="story-image-small"><img alt="Metro Extension to Mathura: Timeline Updated" src="https://images.unsplash.com/photo-1533562906091-fdfdffc3e3c4?w=800" /></div>
                           <div className="story-content-small">
                              <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground story-tag">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-alert" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" x2="12" y1="8" y2="12"></line>
                                    <line x1="12" x2="12.01" y1="16" y2="16"></line>
                                 </svg>
                                 Local Development
                              </div>
                              <h3 className="story-headline">Metro Extension to Mathura: Timeline Updated</h3>
                              <p className="story-excerpt">Construction expected to begin in Q3 2026</p>
                              <span className="story-date-small">April 3, 2026</span>
                           </div>
                        </a>
                     </article>
                  </div>
                  <div className="comparison-infographic">
                     <h3 className="infographic-title">Direct Deal vs. Verified Deal</h3>
                     <p className="infographic-subtitle">देखें कैसे बचता है आपका पैसा और समय</p>
                     <table className="comparison-table-news">
                        <thead>
                           <tr>
                              <th className="table-header-item">पहलू (Aspect)</th>
                              <th className="table-header-negative">Direct Deal</th>
                              <th className="table-header-positive">Dau Dada Verified</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td className="aspect-cell">Legal Verification</td>
                              <td className="negative-cell">❌ आप खुद करें</td>
                              <td className="positive-cell">✓ 30-Year Check</td>
                           </tr>
                           <tr>
                              <td className="aspect-cell">Physical Measurement</td>
                              <td className="negative-cell">❌ No Guarantee</td>
                              <td className="positive-cell">✓ On-Ground Audit</td>
                           </tr>
                           <tr>
                              <td className="aspect-cell">MVDA Compliance</td>
                              <td className="negative-cell">❌ Risk Hai</td>
                              <td className="positive-cell">✓ Full Check</td>
                           </tr>
                           <tr>
                              <td className="aspect-cell">Post-Sale Support</td>
                              <td className="negative-cell">❌ None</td>
                              <td className="positive-cell">✓ Lifetime Help</td>
                           </tr>
                           <tr className="total-row">
                              <td className="aspect-cell"><strong>Future Risk</strong></td>
                              <td className="negative-cell"><strong>HIGH</strong></td>
                              <td className="positive-cell"><strong>ZERO</strong></td>
                           </tr>
                        </tbody>
                     </table>
                     <div className="infographic-cta"><a href="/services" className="infographic-btn">View All Services →</a></div>
                  </div>
               </main>
               <aside className="newspaper-sidebar right-sidebar">
                  <div className="sidebar-section">
                     <h3 className="sidebar-title">Expert Opinion</h3>
                     <div className="sidebar-divider"></div>
                     <div className="rounded-xl border bg-card text-card-foreground shadow opinion-card">
                        <div className="p-6 pt-0 opinion-content">
                           <h4 className="opinion-title">Why Title Search Cannot Be Skipped</h4>
                           <p className="opinion-excerpt">Even if the seller appears trustworthy, hidden legal issues from decades ago can surface. A 30-year title search is your insurance policy.</p>
                           <div className="opinion-author"><strong>Adv. Rajesh Kumar</strong><span>Legal Advisor, Dau Dada</span></div>
                        </div>
                     </div>
                     <div className="rounded-xl border bg-card text-card-foreground shadow opinion-card">
                        <div className="p-6 pt-0 opinion-content">
                           <h4 className="opinion-title">Understanding MVDA Green Zones</h4>
                           <p className="opinion-excerpt">Properties in Green Zones cannot be developed. Always verify the zone classification before purchase to avoid future legal complications.</p>
                           <div className="opinion-author"><strong>Priya Sharma</strong><span>Compliance Expert</span></div>
                        </div>
                     </div>
                  </div>
                  <div className="contact-box">
                     <h4>Get Free Consultation</h4>
                     <p>Apni property ki legal safety ke liye humse sampark karein</p>
                     <a href="/contact" className="contact-link">Contact Us →</a>
                  </div>
                  <div className="ebook-download-box">
                     <div className="ebook-icon">📖</div>
                     <h4 className="ebook-title">Free E-Book Download</h4>
                     <p className="ebook-name">Complete Guide to Safe Property Investment in Brij Region</p>
                     <p className="ebook-description">सम्पूर्ण गाइड जिसमें शामिल है:</p>
                     <ul className="ebook-features">
                        <li>✓ Legal verification checklist</li>
                        <li>✓ MVDA compliance guide</li>
                        <li>✓ Common mistakes to avoid</li>
                        <li>✓ Step-by-step buying process</li>
                     </ul>
                     <button className="ebook-download-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                           <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                           <polyline points="7 10 12 15 17 10"></polyline>
                           <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Download Free E-Book
                     </button>
                     <p className="ebook-note">No registration required • Instant download</p>
                  </div>
                  <div className="classified-ads-box">
                     <div className="classified-header">
                        <span className="classified-icon">📢</span>
                        <h4 className="classified-title">CLASSIFIED SECTION</h4>
                     </div>
                     <div className="classified-ribbon">LIST WITH US</div>
                     <h3 className="classified-main-title">SELL YOUR PROPERTY IN THE HOLY LAND</h3>
                     <p className="classified-subtitle">&quot;अपनी Property हमारे साथ List करें&quot;</p>
                     <p className="classified-intro">क्या आप अपनी property Goverdhan, Mathura या Vrindavan में सही दाम पर बेचना चाहते हैं?</p>
                     <div className="classified-benefits">
                        <div className="classified-benefit">
                           <span className="benefit-icon">✓</span>
                           <div className="benefit-text"><strong>Verified Buyers</strong><span>Sirf genuine investors tak pahunche</span></div>
                        </div>
                        <div className="classified-benefit">
                           <span className="benefit-icon">✓</span>
                           <div className="benefit-text"><strong>Legal Support</strong><span>Listing se lekar registry tak</span></div>
                        </div>
                        <div className="classified-benefit">
                           <span className="benefit-icon">✓</span>
                           <div className="benefit-text"><strong>Wide Reach</strong><span>Brij ki bharosemand property site</span></div>
                        </div>
                     </div>
                     <a href="/properties" className="classified-cta-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                           <path d="M12 5v14M5 12h14"></path>
                        </svg>
                        LIST YOUR PROPERTY NOW
                     </a>
                     <p className="classified-note"><strong>Note:</strong> Only properties with clear titles will be listed after manual verification by our team.</p>
                  </div>
                  <div className="classified-ads-box classified-buy-box">
                     <div className="classified-header">
                        <span className="classified-icon">🏡</span>
                        <h4 className="classified-title">BUYER&apos;S SECTION</h4>
                     </div>
                     <div className="classified-ribbon classified-ribbon-buy">VERIFIED PLOTS</div>
                     <h3 className="classified-main-title">BUY PROPERTY IN THE HOLY LAND</h3>
                     <p className="classified-subtitle">&quot;100% Legal, Verified Plots&quot;</p>
                     <p className="classified-intro">Goverdhan, Mathura, Vrindavan aur Barsana में सबसे safe aur verified properties sirf yahaan!</p>
                     <div className="classified-benefits">
                        <div className="classified-benefit">
                           <span className="benefit-icon">✓</span>
                           <div className="benefit-text"><strong>30-Year Title Check</strong><span>Har property ka complete history</span></div>
                        </div>
                        <div className="classified-benefit">
                           <span className="benefit-icon">✓</span>
                           <div className="benefit-text"><strong>MVDA Approved</strong><span>Government compliance guaranteed</span></div>
                        </div>
                        <div className="classified-benefit">
                           <span className="benefit-icon">✓</span>
                           <div className="benefit-text"><strong>On-Ground Verification</strong><span>Physical measurement checked</span></div>
                        </div>
                     </div>
                     <a href="/properties" className="classified-cta-btn classified-cta-btn-buy">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                           <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        BROWSE VERIFIED PLOTS
                     </a>
                     <p className="classified-note"><strong>Guarantee:</strong> Investment ke baad lifetime legal support - completely FREE!</p>
                  </div>
               </aside>
            </div>
         </div>
      </div>
      <div className="breaking-news-ticker">
         <div className="ticker-label">BREAKING NEWS</div>
         <div className="ticker-content">
            <div className="ticker-text">📢 Attention Property Owners! Now you can list your verified plots with Dau Dada Property Group.<a href="/properties" className="ticker-link">Click Here to Start →</a>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp; Latest MVDA Master Plan Updates Available Now! &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp; New Highway Project Announced Near Goverdhan - Property Values Expected to Rise!</div>
         </div>
      </div>
      <div className="dual-action-banner">
         <div className="container">
            <div className="banner-content">
               <h2 className="banner-headline">CHAHE BECHNA HO YA KHARIDNA...</h2>
               <p className="banner-subtext">Dau Dada Property Group ke saath har deal 100% safe aur verified!</p>
               <div className="banner-actions">
                  <a href="/properties" className="banner-btn banner-btn-sell">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                     </svg>
                     SELL YOUR PROPERTY
                  </a>
                  <a href="/properties" className="banner-btn banner-btn-buy">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                     </svg>
                     BROWSE VERIFIED PLOTS
                  </a>
               </div>
            </div>
         </div>
      </div>
      <footer className="newspaper-footer">
         <div className="container">
            <p>Published by Dau Dada Real Estate Consultants | For queries: info@daudada.com | Ph: +91 98765 43210</p>
            <p className="footer-note">Disclaimer: All information provided for educational purposes only. Consult legal experts before any property transaction.</p>
         </div>
      </footer>
   </div>
</main></div>;
}