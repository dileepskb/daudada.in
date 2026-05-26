

"use client"
import { useApi } from "@/utils/useApi"
import { useEffect, useState } from "react"

interface prop {
  allData: (e: {
    data:any
    pending:boolean
    error:string | null
  }) => void
}
export default function PropertiesFilter({allData}:prop){
 const {
  pending,
  data,
  error,
  request,
} = useApi()

useEffect(() => {
   async function fetchApi(){
        await request({
        url: "/api/property/get",
        method: "POST",
    })
   }
   fetchApi()
},[])


useEffect(() => {

  allData({
    data,
    pending,
    error,
  })

}, [data, pending, error])


    return(
         <div
          className="bg-white rounded-2xl border border-brand-cream p-5 mb-8 shadow-soft"
          data-testid="properties-filters"
        >
          <div className="flex items-center gap-2 mb-4 text-sm font-medium text-brand-ink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-funnel w-4 h-4 text-brand-red"
              aria-hidden="true"
            >
              <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
            </svg>{" "}
            Refine your search
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
            <button
              type="button"
              role="combobox"
              aria-controls="radix-_r_n_"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              className="flex w-full items-center justify-between whitespace-nowrap border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 h-11 rounded-xl"
              data-testid="filter-tx"
            >
              <span style={{ pointerEvents: "none" }}>All</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              role="combobox"
              aria-controls="radix-_r_o_"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              className="flex w-full items-center justify-between whitespace-nowrap border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 h-11 rounded-xl"
              data-testid="filter-loc"
            >
              <span style={{ pointerEvents: "none" }}>All Locations</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              role="combobox"
              aria-controls="radix-_r_p_"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              className="flex w-full items-center justify-between whitespace-nowrap border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 h-11 rounded-xl"
              data-testid="filter-type"
            >
              <span style={{ pointerEvents: "none" }}>All Types</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              role="combobox"
              aria-controls="radix-_r_q_"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              className="flex w-full items-center justify-between whitespace-nowrap border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 h-11 rounded-xl"
              data-testid="filter-bhk"
            >
              <span style={{ pointerEvents: "none" }}>Any BHK</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              role="combobox"
              aria-controls="radix-_r_r_"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              className="flex w-full items-center justify-between whitespace-nowrap border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 h-11 rounded-xl"
              data-testid="filter-price"
            >
              <span style={{ pointerEvents: "none" }}>Any Price</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="flex gap-2">
              <input
                className="flex w-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-11 rounded-xl"
                data-testid="filter-q"
                placeholder="Search…"
                defaultValue=""
              />
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow py-2 h-11 rounded-xl bg-brand-red text-white hover:bg-brand-red-dark px-4"
                data-testid="filter-apply-btn"
              >
                Go
              </button>
            </div>
          </div>
        </div>
    )
}