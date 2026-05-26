'use client'
import CardLoader from "@/components/my_ui/CardLoader/CardLoader";
import PropertyCard from "@/components/my_ui/PropertyCard/PropertyCard";
import { useProperties } from "@/context/PropertyContext";
export default function PropertiesPage() {

const {
  properties,
  loading,
  filters,
} = useProperties();

  return ( 

      <>

        {
  properties?.length > 0 ? (
    <div className="grid grid-cols-3 gap-3">
      {
        properties?.map((items, index) => (
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
      </>
)
}