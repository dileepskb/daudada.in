'use client'
import CardLoader from "@/components/my_ui/CardLoader/CardLoader";
import PropertiesBanner from "@/components/my_ui/PropertiesBanner/PropertiesBanner";
import PropertiesFilter from "@/components/my_ui/PropertiesFilter/PropertiesFilter";
import PropertiesFilterLeft from "@/components/my_ui/PropertiesFilterLest/PropertiesFilterLeft";
import PropertyCard from "@/components/my_ui/PropertyCard/PropertyCard";
import Testimonial from "@/components/my_ui/Testimonial/Testimonial";
import { property } from "@/types/property";
import { useState } from "react";

export default function Properties() {

  const [data, setData] = useState<property[]>([])
  const [loading, setLoading] = useState(true)
  const getalldata = (res:any) =>{
     setData(res.data)
  setLoading(res.pending)
  console.log(res.error)
  }

  return ( 
   <main className="flex-1">
  <div data-testid="properties-page">
    <PropertiesBanner />
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 min-h-screen grid lg:grid-cols-12 gap-8">
      <PropertiesFilterLeft />
      <div className="lg:col-span-9">
        <PropertiesFilter allData={getalldata}  />
        {
  data?.length > 0 ? (
    <div className="grid grid-cols-3 gap-3">
      {
        data?.map((items, index) => (
          <PropertyCard
            property={items}
            key={index}
          />
        ))
      }

    </div>
  ) : (
    <>
    {!loading &&<> <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-brand-ink-soft">
          0 properties found
        </p>
      </div>
      <div
        className="
          text-center
          py-24
          text-brand-ink-soft
        "
        data-testid="empty-properties"
      >
        <p className="font-display text-3xl mb-3">
          No matching properties yet
        </p>
        <p>
          Try changing the filters or contact us
          for an off-market match.
        </p>
      </div>
      </>
      }
    </>
  )
}
        
        {loading && <div className="grid grid-cols-3 gap-3"><CardLoader /><CardLoader /><CardLoader /></div>}
        
      </div>
    </div>
     <Testimonial heading="Trusted by buyers across India" />
  </div>
</main>
)
}