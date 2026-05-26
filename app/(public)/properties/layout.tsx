"use client"
import PropertiesBanner from "@/components/my_ui/PropertiesBanner/PropertiesBanner"
import PropertiesFilter from "@/components/my_ui/PropertiesFilter/PropertiesFilter"
import PropertiesFilterLeft from "@/components/my_ui/PropertiesFilterLest/PropertiesFilterLeft"
import Testimonial from "@/components/my_ui/Testimonial/Testimonial"
import { PropertyProvider } from "@/context/PropertyContext"
import { property } from "@/types/property"
import { useState } from "react"

export default function PropertiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>){


    const [data, setData] = useState<property[]>([])
    const [loading, setLoading] = useState(true)
    const getalldata = (res:any) =>{
       setData(res.data)
    setLoading(res.pending)
    console.log(res.error)
    }
  

    return(
        <>
        <main className="flex-1">
          <div data-testid="properties-page">
            <PropertiesBanner />
                 <PropertyProvider>
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 min-h-screen grid lg:grid-cols-12 gap-8">
              <PropertiesFilterLeft />
              <div className="lg:col-span-9">
                <PropertiesFilter  />
      
                {children}
       
              </div>
            </div>
            </PropertyProvider>
             <Testimonial heading="Trusted by buyers across India" />
          </div>
        </main>
      
        </>
    )
}