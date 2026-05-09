'use client'
import { testimonial } from "@/types/property"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function ClientSay(){
     const [properties, setProperties] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")


useEffect(() => {
  const fetchData = async () => {
    try {
      setIsLoading(true)

      const res = await axios.post("/api/testimonial")
      setProperties(res.data)
      setError("")
    } catch (err) {
      setError("Failed to fetch data")
    } finally {
      setIsLoading(false)
    }
  }

  fetchData()
}, [])
    return(
        <section className="testimonials-section">
         <div className="container">
            <div className="section-header">
               <h2 className="section-title">What Our Clients Say</h2>
               <p className="section-subtitle">Real stories from families who found their dream property with us</p>
            </div>
            <div className="relative testimonials-carousel" role="region" aria-roledescription="carousel">
               <div >
                  <div className="flex -ml-4" style={{ transform: 'translate3d(0px, 0px, 0px)'}}>


                     {properties?.map((test:testimonial, index) => (
                         <div key={index} role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3" style={{ transform: 'translate3d(0px, 0px, 0px)'}}>
                        <div className="rounded-xl border bg-card text-card-foreground shadow testimonial-card">
                           <div className="p-6 pt-0 testimonial-content">
                              <div className="quote-icon">
                                 <Image src={`${test.image}`} width={100} height={100} alt={test.name} />
                              </div>
                              <Star />
                              <p className="testimonial-text">&ldquo; {test.content}&ldquo;</p>
                              <div className="testimonial-author">
                                 <div className="author-info"><strong>{test.name}</strong><span>{test.location}</span></div>
                                 <span className="testimonial-date">{test.createAt}</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     ))}
                    
                     
                  
                  </div>
               </div>
               {/* <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full -left-12 top-1/2 -translate-y-1/2 carousel-btn-prev">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left h-4 w-4" aria-hidden="true">
                     <path d="m12 19-7-7 7-7"></path>
                     <path d="M19 12H5"></path>
                  </svg>
                  <span className="sr-only">Previous slide</span>
               </button>
               <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full -right-12 top-1/2 -translate-y-1/2 carousel-btn-next">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4" aria-hidden="true">
                     <path d="M5 12h14"></path>
                     <path d="m12 5 7 7-7 7"></path>
                  </svg>
                  <span className="sr-only">Next slide</span>
               </button> */}
            </div>
         </div>
      </section>
    )
}

const Star = () => {
    return(
        <div className="rating">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                 </svg>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                 </svg>
                              </div>
    )
}