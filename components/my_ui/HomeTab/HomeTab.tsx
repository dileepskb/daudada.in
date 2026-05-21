"use client"

import { property } from "@/types/property"
import axios from "axios"
import { useEffect, useState } from "react"
import PropertyCard from "../PropertyCard/PropertyCard"

export default function HomeTab(){
  const [properties, setProperties] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [activeLocation, setActiveLocation] = useState("Jatipura")
  const [error, setError] = useState("")


const getProperty =  async (e:string) => {
    setActiveLocation(e)
    
    try {
      setIsLoading(true)

      const res = await axios.post(`${'/api/property/'+e}`)
      setProperties(res.data)
      setError("")
    } catch (err) {
      setError("Failed to fetch data")
    } finally {
      setIsLoading(false)
    }
}


useEffect(() => {
    const fetchData = async () => {
    await getProperty("Jatipura")
  }

  fetchData()
}, [])

  

    return(
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-24" data-testid="tabbed-featured">
         <div className="text-center mb-10">
            <div className="text-xs uppercase tracking-[0.25em] text-brand-red mb-2">Featured Properties</div>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-brand-ink">Browse by sacred location</h2>
         </div>
         <div dir="ltr" data-orientation="horizontal" className="mb-10">
            <div role="tablist" aria-orientation="horizontal" className="items-center text-muted-foreground bg-brand-cream rounded-full p-1 h-auto mx-auto flex w-max flex-wrap justify-center" style={{ outline: 'none'}}>
               <button onClick={() => getProperty("Jatipura")} type="button" data-state={activeLocation === "Jatipura" ? "active" : "inactive"} className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow rounded-full data-[state=active]:bg-brand-red data-[state=active]:text-white px-5 py-2 text-sm">Jatipura</button>
               <button onClick={() => getProperty("Govardhan")} type="button" data-state={activeLocation === "Govardhan" ? "active" : "inactive"} className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow rounded-full data-[state=active]:bg-brand-red data-[state=active]:text-white px-5 py-2 text-sm" >Govardhan</button>
               <button onClick={() => getProperty("Mathura")} type="button" data-state={activeLocation === "Mathura" ? "active" : "inactive"}  className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow rounded-full data-[state=active]:bg-brand-red data-[state=active]:text-white px-5 py-2 text-sm">Mathura</button>
               {/* <button onClick={() => getProperty("Vrindavan")} type="button" data-state={activeLocation === "Vrindavan" ? "active" : "inactive"} className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow rounded-full data-[state=active]:bg-brand-red data-[state=active]:text-white px-5 py-2 text-sm" >Vrindavan</button>
               <button onClick={() => getProperty("Barsana")} type="button" data-state={activeLocation === "Barsana" ? "active" : "inactive"} className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow rounded-full data-[state=active]:bg-brand-red data-[state=active]:text-white px-5 py-2 text-sm" >Barsana</button> */}
               
               </div>
         </div>

{isLoading ? <p className="text-center text-brand-ink-soft py-10" data-testid="tabbed-empty">Property Loading</p> : 
         <div
  className={`${properties.length > 0 ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : ''}`}
  data-testid="tabbed-grid"
  x-file-name="Home"
  x-line-number={212}
  x-column={10}
  x-component="div"
  x-id="Home_212_10"
  x-dynamic="true"
  x-source-type="computed"
  x-source-editable="false"
>
    {properties.length > 0 ? 
     <>
     {properties?.map((items:property, index:number) => {
        return(
          <PropertyCard property={items} key={index} />
        )
    })}
     </>
     :
     <p className="text-center text-brand-ink-soft py-10 w-full" data-testid="tabbed-empty">No featured listings yet for {activeLocation}.</p>
    }
    
  
</div>
}

         <div className="text-center mt-10">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow h-9 rounded-full bg-brand-ink text-white hover:bg-black px-8 py-6" data-testid="tab-view-all-btn">
               View All in {activeLocation} 
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 w-4 h-4" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
               </svg>
            </button>
         </div>
      </section>
    )
}