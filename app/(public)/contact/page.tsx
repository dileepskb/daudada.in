export default function Contact() {
  return <div><main className="main-content">
   <div className="contact-page">
      <section className="page-header">
         <div className="container">
            <h1 className="page-title">Contact Us</h1>
            <p className="page-subtitle">Get in touch with our property consultants. We&apos;re here to help you find the perfect property.</p>
         </div>
      </section>
      <section className="contact-content">
         <div className="container">
            <div className="contact-grid">
               <div className="contact-form-section">
                  <div className="rounded-xl border bg-card text-card-foreground shadow contact-form-card">
                     <div className="p-6 pt-0 form-content">
                        <h2 className="form-title">Send Us Your Requirements</h2>
                        <p className="form-subtitle">Fill out the form below and our team will get back to you within 24 hours</p>
                        <form className="contact-form">
                           <div className="form-group"><label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">Full Name *</label><input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" id="name" placeholder="Enter your full name" required type="text" value="" /></div>
                           <div className="form-row">
                              <div className="form-group"><label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="phone">Phone Number *</label><input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" id="phone" placeholder="+91 98765 43210" required type="tel" value="" /></div>
                              <div className="form-group"><label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">Email Address</label><input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" id="email" placeholder="your.email@example.com" type="email" value="" /></div>
                           </div>
                           <div className="form-row">
                              <div className="form-group">
                                 <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="location">Preferred Location</label>
                                 <button type="button" role="combobox" aria-controls="radix-_r_0_" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder="" className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1" id="location">
                                    <span style={{ pointerEvents: 'none' }}>Select location</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                                       <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                 </button>
                                 <select aria-hidden="true" tabIndex={-1} style={{ position: "absolute", border: "0px", width: "1px", height:" 1px", padding:"0px", margin:"-1px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", whiteSpace: "nowrap", overflowWrap: "normal"}}>
                                    <option value="goverdhan">Goverdhan</option>
                                    <option value="variava">Variava</option>
                                    <option value="mathura">Mathura</option>
                                    <option value="vrindavan">Vrindavan</option>
                                    <option value="any">Any Location</option>
                                 </select>
                              </div>
                              <div className="form-group">
                                 <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="propertyType">Property Type</label>
                                 <button type="button" role="combobox" aria-controls="radix-_r_1_" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder="" className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1" id="propertyType">
                                    <span style={{ pointerEvents: 'none' }}>Select type</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                                       <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                 </button>
                                 <select aria-hidden="true" tabIndex={-1}  style={{ position: "absolute", border: "0px", width: "1px", height:" 1px", padding:"0px", margin:"-1px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", whiteSpace: "nowrap", overflowWrap: "normal"}}>
                                    <option value="residential">Residential</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="agricultural">Agricultural</option>
                                    <option value="institutional">Institutional/Ashram</option>
                                 </select>
                              </div>
                           </div>
                           <div className="form-group">
                              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="budget">Budget Range</label>
                              <button type="button" role="combobox" aria-controls="radix-_r_2_" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder="" className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1" id="budget">
                                 <span style={{ pointerEvents: 'none' }}>Select budget</span>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                                    <path d="m6 9 6 6 6-6"></path>
                                 </svg>
                              </button>
                              <select aria-hidden="true" tabIndex={-1} style={{ position: "absolute", border: "0px", width: "1px", height:" 1px", padding:"0px", margin:"-1px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", whiteSpace: "nowrap", overflowWrap: "normal"}}>
                                 <option value="under-20">Under ₹20 Lakhs</option>
                                 <option value="20-40">₹20-40 Lakhs</option>
                                 <option value="40-60">₹40-60 Lakhs</option>
                                 <option value="60-100">₹60 Lakhs - ₹1 Crore</option>
                                 <option value="above-100">Above ₹1 Crore</option>
                              </select>
                           </div>
                           <div className="form-group"><label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="message">Additional Requirements</label><textarea className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" id="message" placeholder="Tell us more about your requirements, preferred area size, specific features you're looking for..." rows={5}></textarea></div>
                           <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-8 submit-btn" type="submit">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send" aria-hidden="true">
                                 <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                                 <path d="m21.854 2.147-10.94 10.939"></path>
                              </svg>
                              Submit Inquiry
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
               <div className="contact-info-section">
                  <div className="rounded-xl border bg-card text-card-foreground shadow info-card">
                     <div className="p-6 pt-0 info-content">
                        <h3 className="info-title">Contact Information</h3>
                        <div className="info-items">
                           <div className="info-item">
                              <div className="info-icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone" aria-hidden="true">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                 </svg>
                              </div>
                              <div className="info-details">
                                 <h4>Phone</h4>
                                 <a href="tel:+919876543210">+91 98765 43210</a>
                                 <p>Mon-Sat: 9:00 AM - 7:00 PM</p>
                              </div>
                           </div>
                           <div className="info-item">
                              <div className="info-icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square" aria-hidden="true">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                 </svg>
                              </div>
                              <div className="info-details">
                                 <h4>WhatsApp</h4>
                                 <a href="https://wa.me/919876543210">+91 98765 43210</a>
                                 <p>Quick response guaranteed</p>
                              </div>
                           </div>
                           <div className="info-item">
                              <div className="info-icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail" aria-hidden="true">
                                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                 </svg>
                              </div>
                              <div className="info-details">
                                 <h4>Email</h4>
                                 <a href="mailto:info@brijbhoomi.com">info@brijbhoomi.com</a>
                                 <p>24-hour response time</p>
                              </div>
                           </div>
                           <div className="info-item">
                              <div className="info-icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin" aria-hidden="true">
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                 </svg>
                              </div>
                              <div className="info-details">
                                 <h4>Office Location</h4>
                                 <p>Goverdhan, Mathura District</p>
                                 <p>Uttar Pradesh, India</p>
                              </div>
                           </div>
                           <div className="info-item">
                              <div className="info-icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                 </svg>
                              </div>
                              <div className="info-details">
                                 <h4>Working Hours</h4>
                                 <p>Monday - Saturday</p>
                                 <p>9:00 AM - 7:00 PM</p>
                                 <p className="sunday">Sunday: By Appointment</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="rounded-xl border bg-card text-card-foreground shadow map-card">
                     <div className="p-6 pt-0 map-content">
                        <h3 className="map-title">Visit Our Office</h3>
                        <div className="map-placeholder">
                           <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin" aria-hidden="true">
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                           </svg>
                           <p>Goverdhan, Mathura</p>
                           <p className="map-note">Map integration available on request</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="whatsapp-cta">
         <div className="container">
            <div className="rounded-xl border bg-card text-card-foreground shadow whatsapp-card">
               <div className="p-6 pt-0 whatsapp-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square" aria-hidden="true">
                     <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <h2>Need Immediate Assistance?</h2>
                  <p>Connect with us on WhatsApp for instant support and property updates</p>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-8">
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square" aria-hidden="true">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                     </svg>
                     Chat on WhatsApp
                  </button>
               </div>
            </div>
         </div>
      </section>
   </div>
</main></div>;
}