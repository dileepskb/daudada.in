"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import axios from "axios"
import { propertyAmenity, Specification, property } from "@/types/property"
export default  function PropertyDetails(){
const params = useParams()

  const name = decodeURIComponent(
    params.name as string
  )



  const [property, setProperty] = useState<property | null>(null)

  useEffect(() => {

    const getProperty = async () => {

      try {

        const res = await axios.get(
          `/api/property/getbyname/${name}`
        )

        setProperty(res.data)

      } catch (error) {

        console.log(error)
      }
    }

    getProperty()

  }, [name])




const Image = property?.images[0]

     const { url } = Image as any;

    return(
        <main
  className="flex-1"
  x-file-name="App"
  x-line-number={26}
  x-column={10}
  x-component="main"
  x-id="App_26_10"
  x-dynamic="false"
>
  <div
    className="max-w-7xl mx-auto px-6 md:px-10 py-12"
    data-testid="property-detail"
    x-file-name="PropertyDetail"
    x-line-number={43}
    x-column={4}
    x-component="div"
    x-id="PropertyDetail_43_4"
    x-dynamic="false"
  >
    <div
      className="grid md:grid-cols-5 gap-3 mb-10"
      x-file-name="PropertyDetail"
      x-line-number={45}
      x-column={6}
      x-component="div"
      x-id="PropertyDetail_45_6"
      x-dynamic="false"
    >
      <div
        className="md:col-span-4 aspect-[16/10] rounded-2xl overflow-hidden border border-brand-cream"
        x-file-name="PropertyDetail"
        x-line-number={46}
        x-column={8}
        x-component="div"
        x-id="PropertyDetail_46_8"
        x-dynamic="false"
      >
        <img
          alt="20,000 Sq. Ft. Plot Near Surbhi Kund"
          className="w-full h-full object-cover"
          x-file-name="PropertyDetail"
          x-line-number={47}
          x-column={10}
          x-component="img"
          x-id="PropertyDetail_47_10"
          x-dynamic="false"
          src={`${url}`}
        />
      </div>
      <div
        className="md:col-span-1 grid grid-cols-4 md:grid-cols-1 gap-3"
        x-file-name="PropertyDetail"
        x-line-number={49}
        x-column={8}
        x-component="div"
        x-id="PropertyDetail_49_8"
        x-dynamic="true"
        x-source-type="computed"
        x-source-editable="false"
      >
        {/* <button
          data-testid="gallery-thumb-0"
          className="aspect-square rounded-xl overflow-hidden border-2 border-brand-red"
          x-file-name="PropertyDetail"
          x-line-number={51}
          x-column={12}
          x-component="button"
          x-id="PropertyDetail_51_12"
          x-dynamic="false"
        >
          <img
            alt=""
            className="w-full h-full object-cover"
            x-file-name="PropertyDetail"
            x-line-number={53}
            x-column={14}
            x-component="img"
            x-id="PropertyDetail_53_14"
            x-dynamic="false"
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80"
          />
        </button>
        <button
          data-testid="gallery-thumb-1"
          className="aspect-square rounded-xl overflow-hidden border-2 border-brand-cream"
          x-file-name="PropertyDetail"
          x-line-number={51}
          x-column={12}
          x-component="button"
          x-id="PropertyDetail_51_12"
          x-dynamic="false"
        >
          <img
            alt=""
            className="w-full h-full object-cover"
            x-file-name="PropertyDetail"
            x-line-number={53}
            x-column={14}
            x-component="img"
            x-id="PropertyDetail_53_14"
            x-dynamic="false"
            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1400&q=80"
          />
        </button> */}
      </div>
    </div>
    <div
      className="grid lg:grid-cols-3 gap-10"
      x-file-name="PropertyDetail"
      x-line-number={59}
      x-column={6}
      x-component="div"
      x-id="PropertyDetail_59_6"
      x-dynamic="false"
    >
      <div
        className="lg:col-span-2"
        x-file-name="PropertyDetail"
        x-line-number={60}
        x-column={8}
        x-component="div"
        x-id="PropertyDetail_60_8"
        x-dynamic="true"
        x-source-type="computed"
        x-source-editable="false"
      >
        <div
          className="flex items-center gap-2 text-sm text-brand-ink-soft mb-3"
          x-file-name="PropertyDetail"
          x-line-number={61}
          x-column={10}
          x-component="div"
          x-id="PropertyDetail_61_10"
          x-dynamic="true"
          x-source-type="state"
          x-source-var="p"
          x-source-path="locality"
          x-source-editable="false"
        >
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
            className="lucide lucide-map-pin w-4 h-4"
            aria-hidden="true"
            x-file-name="PropertyDetail"
            x-line-number={62}
            x-column={12}
            x-component="MapPin"
            x-id="PropertyDetail_62_12"
            x-dynamic="false"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx={12} cy={10} r={3} />
          </svg>{" "}
          <span
            data-ve-dynamic="true"
            x-excluded="true"
            x-file-name="PropertyDetail"
            x-line-number={61}
            x-column={10}
            x-component="div"
            x-id="PropertyDetail_61_10_expr3"
            x-dynamic="true"
            x-source-type="state"
            x-source-var="p"
            x-source-path="locality"
            x-source-editable="false"
            style={{ display: "contents" }}
          >
            {property?.address}
          </span>
          ,{" "}
          <span
            data-ve-dynamic="true"
            x-excluded="true"
            x-file-name="PropertyDetail"
            x-line-number={61}
            x-column={10}
            x-component="div"
            x-id="PropertyDetail_61_10_expr5"
            x-dynamic="true"
            x-source-type="state"
            x-source-var="p"
            x-source-path="location"
            x-source-editable="false"
            style={{ display: "contents" }}
          >
            {property?.location}
          </span>
        </div>
        <h1
          className="font-display text-4xl md:text-5xl font-medium text-brand-ink mb-5 leading-tight"
          x-file-name="PropertyDetail"
          x-line-number={64}
          x-column={10}
          x-component="h1"
          x-id="PropertyDetail_64_10"
          x-dynamic="true"
          x-source-type="state"
          x-source-var="p"
          x-source-path="title"
          x-source-editable="false"
        >
          {property?.title}
        </h1>
        <div
          className="flex flex-wrap items-center gap-4 mb-8"
          x-file-name="PropertyDetail"
          x-line-number={65}
          x-column={10}
          x-component="div"
          x-id="PropertyDetail_65_10"
          x-dynamic="false"
        >
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%3A%2020%2C000%20Sq.%20Ft.%20Plot%20Near%20Surbhi%20Kund%20(Govardhan)"
            target="_blank"
            rel="noreferrer"
            data-testid="detail-wa-price"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors text-sm"
            x-file-name="PropertyDetail"
            x-line-number={66}
            x-column={12}
            x-component="a"
            x-id="PropertyDetail_66_12"
            x-dynamic="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-message-circle w-4 h-4"
              aria-hidden="true"
              x-file-name="PropertyDetail"
              x-line-number={73}
              x-column={14}
              x-component="MessageCircle"
              x-id="PropertyDetail_73_14"
              x-dynamic="false"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>{" "}
            WhatsApp · Price on Request
          </a>
          <span
            className="px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs uppercase tracking-widest font-semibold"
            x-file-name="PropertyDetail"
            x-line-number={75}
            x-column={12}
            x-component="span"
            x-id="PropertyDetail_75_12"
            x-dynamic="true"
            x-source-type="state"
            x-source-var="p"
            x-source-path="transaction_type"
            x-source-editable="false"
          >
            buy
          </span>
          <span
            className="px-3 py-1 rounded-full bg-brand-gold/15 text-brand-ink text-xs uppercase tracking-widest font-semibold"
            x-file-name="PropertyDetail"
            x-line-number={76}
            x-column={12}
            x-component="span"
            x-id="PropertyDetail_76_12"
            x-dynamic="true"
            x-source-type="state"
            x-source-var="p"
            x-source-path="property_type"
            x-source-editable="false"
          >
            plot
          </span>
        </div>
        <div
          className="grid sm:grid-cols-3 gap-3 mb-10"
          x-file-name="PropertyDetail"
          x-line-number={79}
          x-column={10}
          x-component="div"
          x-id="PropertyDetail_79_10"
          x-dynamic="true"
          x-source-type="computed"
          x-source-editable="false"
        >
          {property?.specification?.map((items:Specification, index:number) => {
            return(
<div
key={index}
            className="bg-white rounded-xl border border-brand-cream p-4 flex items-center gap-3"
            x-file-name="PropertyDetail"
            x-line-number={80}
            x-column={12}
            x-component="div"
            x-id="PropertyDetail_80_12"
            x-dynamic="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-maximize2 lucide-maximize-2 text-brand-red"
              aria-hidden="true"
              x-file-name="PropertyDetail"
              x-line-number={81}
              x-column={14}
              x-component="Maximize2"
              x-id="PropertyDetail_81_14"
              x-dynamic="false"
            >
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1={21} x2={14} y1={3} y2={10} />
              <line x1={3} x2={10} y1={21} y2={14} />
            </svg>
            <div
              x-file-name="PropertyDetail"
              x-line-number={82}
              x-column={14}
              x-component="div"
              x-id="PropertyDetail_82_14"
              x-dynamic="false"
            >
              <div
                className="text-xs text-brand-ink-soft"
                x-file-name="PropertyDetail"
                x-line-number={82}
                x-column={19}
                x-component="div"
                x-id="PropertyDetail_82_19"
                x-dynamic="false"
              >
                {items.key}
              </div>
              <div
                className="font-medium"
                x-file-name="PropertyDetail"
                x-line-number={82}
                x-column={74}
                x-component="div"
                x-id="PropertyDetail_82_74"
                x-dynamic="true"
                x-source-type="state"
                x-source-var="p"
                x-source-path="area_value"
                x-source-editable="false"
              >
               {items.value}
              </div>
            </div>
          </div>
          )})}
          
        </div>
        <h2
          className="font-display text-3xl font-medium text-brand-ink mb-3"
          x-file-name="PropertyDetail"
          x-line-number={98}
          x-column={10}
          x-component="h2"
          x-id="PropertyDetail_98_10"
          x-dynamic="false"
        >
          About this property
        </h2>
        <p
          className="text-brand-ink-soft font-light leading-relaxed whitespace-pre-line mb-10"
          x-file-name="PropertyDetail"
          x-line-number={99}
          x-column={10}
          x-component="p"
          x-id="PropertyDetail_99_10"
          x-dynamic="true"
          x-source-type="state"
          x-source-var="p"
          x-source-path="description"
          x-source-editable="false"
          dangerouslySetInnerHTML={{__html:property?.description || ""}}
        >
        
        </p>
        <h2
          className="font-display text-3xl font-medium text-brand-ink mb-4"
          x-file-name="PropertyDetail"
          x-line-number={103}
          x-column={14}
          x-component="h2"
          x-id="PropertyDetail_103_14"
          x-dynamic="false"
        >
          Amenities
        </h2>
        <div
          className="flex flex-wrap gap-2 mb-10"
          x-file-name="PropertyDetail"
          x-line-number={104}
          x-column={14}
          x-component="div"
          x-id="PropertyDetail_104_14"
          x-dynamic="true"
          x-source-type="computed"
          x-source-editable="false"
        >
          {property?.propertyAmenity?.map((items:propertyAmenity, index:number) => {
            console.log(items)
            return(
<span
key={index}
            className="px-4 py-2 rounded-full bg-brand-cream text-brand-ink text-sm"
            x-file-name="PropertyDetail"
            x-line-number={106}
            x-column={18}
            x-component="span"
            x-id="PropertyDetail_106_18"
            x-dynamic="true"
            x-source-type="static-imported"
            x-source-var="p"
            x-source-editable="false"
            x-array-var="p"
            x-array-item-param="a"
          >
            {items?.amenity?.name}
          </span>
            )
          })}
          
          
        </div>
        <div
          className="bg-brand-ink text-white rounded-2xl p-8"
          data-testid="legal-trust-block"
          x-file-name="PropertyDetail"
          x-line-number={112}
          x-column={10}
          x-component="div"
          x-id="PropertyDetail_112_10"
          x-dynamic="false"
        >
          <div
            className="flex items-center gap-3 mb-4"
            x-file-name="PropertyDetail"
            x-line-number={113}
            x-column={12}
            x-component="div"
            x-id="PropertyDetail_113_12"
            x-dynamic="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shield-check text-brand-gold"
              aria-hidden="true"
              x-file-name="PropertyDetail"
              x-line-number={114}
              x-column={14}
              x-component="ShieldCheck"
              x-id="PropertyDetail_114_14"
              x-dynamic="false"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <h3
              className="font-display text-2xl font-medium"
              x-file-name="PropertyDetail"
              x-line-number={115}
              x-column={14}
              x-component="h3"
              x-id="PropertyDetail_115_14"
              x-dynamic="false"
            >
              Legal Verification
            </h3>
          </div>
          <ul
            className="grid sm:grid-cols-2 gap-3 text-sm font-light"
            x-file-name="PropertyDetail"
            x-line-number={117}
            x-column={12}
            x-component="ul"
            x-id="PropertyDetail_117_12"
            x-dynamic="false"
          >
            <li
              className="flex gap-2"
              x-file-name="PropertyDetail"
              x-line-number={118}
              x-column={14}
              x-component="li"
              x-id="PropertyDetail_118_14"
              x-dynamic="true"
              x-source-type="state"
              x-source-var="p"
              x-source-path="title_search_years"
              x-source-editable="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-scroll-text w-4 h-4 mt-0.5 text-brand-gold"
                aria-hidden="true"
                x-file-name="PropertyDetail"
                x-line-number={118}
                x-column={41}
                x-component="ScrollText"
                x-id="PropertyDetail_118_41"
                x-dynamic="false"
              >
                <path d="M15 12h-5" />
                <path d="M15 8h-5" />
                <path d="M19 17V5a2 2 0 0 0-2-2H4" />
                <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
              </svg>{" "}
              <span
                data-ve-dynamic="true"
                x-excluded="true"
                x-file-name="PropertyDetail"
                x-line-number={118}
                x-column={14}
                x-component="li"
                x-id="PropertyDetail_118_14_expr2"
                x-dynamic="true"
                x-source-type="state"
                x-source-var="p"
                x-source-path="title_search_years"
                x-source-editable="false"
                style={{ display: "contents" }}
              >
                30
              </span>
              -year title search completed
            </li>
            <li
              className="flex gap-2"
              x-file-name="PropertyDetail"
              x-line-number={119}
              x-column={14}
              x-component="li"
              x-id="PropertyDetail_119_14"
              x-dynamic="true"
              x-source-type="computed"
              x-source-editable="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-scroll-text w-4 h-4 mt-0.5 text-brand-gold"
                aria-hidden="true"
                x-file-name="PropertyDetail"
                x-line-number={119}
                x-column={41}
                x-component="ScrollText"
                x-id="PropertyDetail_119_41"
                x-dynamic="false"
              >
                <path d="M15 12h-5" />
                <path d="M15 8h-5" />
                <path d="M19 17V5a2 2 0 0 0-2-2H4" />
                <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
              </svg>{" "}
              MVDA master plan compliant
            </li>
            <li
              className="flex gap-2"
              x-file-name="PropertyDetail"
              x-line-number={120}
              x-column={14}
              x-component="li"
              x-id="PropertyDetail_120_14"
              x-dynamic="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-scroll-text w-4 h-4 mt-0.5 text-brand-gold"
                aria-hidden="true"
                x-file-name="PropertyDetail"
                x-line-number={120}
                x-column={41}
                x-component="ScrollText"
                x-id="PropertyDetail_120_41"
                x-dynamic="false"
              >
                <path d="M15 12h-5" />
                <path d="M15 8h-5" />
                <path d="M19 17V5a2 2 0 0 0-2-2H4" />
                <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
              </svg>{" "}
              Lawyer-issued legal opinion available
            </li>
            <li
              className="flex gap-2"
              x-file-name="PropertyDetail"
              x-line-number={121}
              x-column={14}
              x-component="li"
              x-id="PropertyDetail_121_14"
              x-dynamic="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-scroll-text w-4 h-4 mt-0.5 text-brand-gold"
                aria-hidden="true"
                x-file-name="PropertyDetail"
                x-line-number={121}
                x-column={41}
                x-component="ScrollText"
                x-id="PropertyDetail_121_41"
                x-dynamic="false"
              >
                <path d="M15 12h-5" />
                <path d="M15 8h-5" />
                <path d="M19 17V5a2 2 0 0 0-2-2H4" />
                <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
              </svg>{" "}
              Mutation &amp; jamabandi verified
            </li>
          </ul>
        </div>
      </div>
      <aside
        className="lg:sticky lg:top-28 self-start"
        x-file-name="PropertyDetail"
        x-line-number={127}
        x-column={8}
        x-component="aside"
        x-id="PropertyDetail_127_8"
        x-dynamic="false"
      >
        <div
          className="bg-white rounded-2xl border border-brand-cream p-6 shadow-soft"
          data-testid="property-inquiry-form"
          x-file-name="PropertyDetail"
          x-line-number={128}
          x-column={10}
          x-component="div"
          x-id="PropertyDetail_128_10"
          x-dynamic="false"
        >
          <h3
            className="font-display text-2xl font-medium mb-1"
            x-file-name="PropertyDetail"
            x-line-number={129}
            x-column={12}
            x-component="h3"
            x-id="PropertyDetail_129_12"
            x-dynamic="false"
          >
            Schedule a site visit
          </h3>
          <p
            className="text-sm text-brand-ink-soft mb-5"
            x-file-name="PropertyDetail"
            x-line-number={130}
            x-column={12}
            x-component="p"
            x-id="PropertyDetail_130_12"
            x-dynamic="false"
          >
            Our consultant will call you within 30 minutes.
          </p>
          <form
            className="flex flex-col gap-3"
            x-file-name="PropertyDetail"
            x-line-number={131}
            x-column={12}
            x-component="form"
            x-id="PropertyDetail_131_12"
            x-dynamic="false"
          >
            <input
              className="flex w-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-11 rounded-xl"
              x-file-name="PropertyDetail"
              x-line-number={132}
              x-column={14}
              x-component="Input"
              x-id="PropertyDetail_132_14"
              x-dynamic="true"
              data-testid="inq-name"
              required
              placeholder="Your name"
              defaultValue=""
            />
            <input
              className="flex w-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-11 rounded-xl"
              x-file-name="PropertyDetail"
              x-line-number={133}
              x-column={14}
              x-component="Input"
              x-id="PropertyDetail_133_14"
              x-dynamic="true"
              data-testid="inq-phone"
              required
              placeholder="Phone"
              defaultValue=""
            />
            <input
              className="flex w-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-11 rounded-xl"
              x-file-name="PropertyDetail"
              x-line-number={134}
              x-column={14}
              x-component="Input"
              x-id="PropertyDetail_134_14"
              x-dynamic="true"
              data-testid="inq-email"
              placeholder="Email (optional)"
              defaultValue=""
            />
            <textarea
              className="flex min-h-[60px] w-full border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-xl"
              x-file-name="PropertyDetail"
              x-line-number={135}
              x-column={14}
              x-component="Textarea"
              x-id="PropertyDetail_135_14"
              x-dynamic="true"
              data-testid="inq-message"
              required
              placeholder="What would you like to know?"
              rows={3}
              defaultValue={""}
            />
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow px-4 py-2 h-11 rounded-xl bg-brand-red text-white hover:bg-brand-red-dark shadow-brand"
              x-file-name="PropertyDetail"
              x-line-number={136}
              x-column={14}
              x-component="Button"
              x-id="PropertyDetail_136_14"
              x-dynamic="true"
              data-testid="inq-submit-btn"
              x-source-type="computed"
              x-source-editable="false"
            >
              Send Inquiry
            </button>
          </form>
          <div
            className="border-t border-brand-cream my-5"
            x-file-name="PropertyDetail"
            x-line-number={140}
            x-column={12}
            x-component="div"
            x-id="PropertyDetail_140_12"
            x-dynamic="false"
          />
          <div
            className="grid grid-cols-2 gap-2"
            x-file-name="PropertyDetail"
            x-line-number={141}
            x-column={12}
            x-component="div"
            x-id="PropertyDetail_141_12"
            x-dynamic="false"
          >
            <a
              href="tel:919876543210"
              data-testid="inq-call-btn"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-ink py-3 text-sm hover:bg-brand-ink hover:text-white transition-colors"
              x-file-name="PropertyDetail"
              x-line-number={142}
              x-column={14}
              x-component="a"
              x-id="PropertyDetail_142_14"
              x-dynamic="false"
            >
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
                className="lucide lucide-phone w-4 h-4"
                aria-hidden="true"
                x-file-name="PropertyDetail"
                x-line-number={143}
                x-column={16}
                x-component="Phone"
                x-id="PropertyDetail_143_16"
                x-dynamic="false"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>{" "}
              Call
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%3A%2020%2C000%20Sq.%20Ft.%20Plot%20Near%20Surbhi%20Kund%20(Govardhan)"
              target="_blank"
              rel="noreferrer"
              data-testid="inq-whatsapp-btn"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 text-white py-3 text-sm hover:bg-green-700"
              x-file-name="PropertyDetail"
              x-line-number={145}
              x-column={14}
              x-component="a"
              x-id="PropertyDetail_145_14"
              x-dynamic="false"
            >
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
                className="lucide lucide-message-circle w-4 h-4"
                aria-hidden="true"
                x-file-name="PropertyDetail"
                x-line-number={147}
                x-column={16}
                x-component="MessageCircle"
                x-id="PropertyDetail_147_16"
                x-dynamic="false"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>{" "}
              WhatsApp
            </a>
          </div>
        </div>
      </aside>
    </div>
  </div>
</main>

    )
}