import { property } from "@/types/property";

type Props = {
  property: property
}

export default function PropertyCard({property}:Props){
    console.log(property)
    return(
        <div
  
    data-testid="property-card-6a9ac87f-a1ee-400d-9cdd-ec39d91df642"
    className="group bg-white rounded-2xl overflow-hidden border border-brand-cream hover:shadow-soft hover:-translate-y-1 transition-all duration-300 flex flex-col"
    x-file-name="PropertyCard"
    x-line-number={19}
    x-column={4}
    x-component="div"
    x-id="PropertyCard_19_4"
    x-dynamic="false"
  >
    <a
      className="relative aspect-[4/3] overflow-hidden block"
      href="/properties/6a9ac87f-a1ee-400d-9cdd-ec39d91df642"
      data-discover="true"
    >
      <img
        alt="30,000 Sq. Ft. Plot Near Luk Luk Dau Ji Temple"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        x-file-name="PropertyCard"
        x-line-number={24}
        x-column={8}
        x-component="img"
        x-id="PropertyCard_24_8"
        x-dynamic="false"
        src="https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=1400&q=80"
      />
      <div
        className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-medium text-brand-red"
        x-file-name="PropertyCard"
        x-line-number={25}
        x-column={8}
        x-component="div"
        x-id="PropertyCard_25_8"
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
          className="lucide lucide-shield-check w-3.5 h-3.5"
          aria-hidden="true"
          x-file-name="PropertyCard"
          x-line-number={26}
          x-column={10}
          x-component="ShieldCheck"
          x-id="PropertyCard_26_10"
          x-dynamic="false"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>{" "}
        Legally Verified
      </div>
      <div
        className="absolute top-3 right-3 px-3 py-1 rounded-full bg-brand-red text-white text-[10px] uppercase tracking-widest font-semibold"
        x-file-name="PropertyCard"
        x-line-number={29}
        x-column={10}
        x-component="div"
        x-id="PropertyCard_29_10"
        x-dynamic="false"
      >
        Featured
      </div>
    </a>
    <div
      className="p-5 flex flex-col gap-3 flex-1"
      x-file-name="PropertyCard"
      x-line-number={35}
      x-column={6}
      x-component="div"
      x-id="PropertyCard_35_6"
      x-dynamic="false"
    >
      <a
        className="flex flex-col gap-3"
        href="/properties/6a9ac87f-a1ee-400d-9cdd-ec39d91df642"
        data-discover="true"
      >
        <div
          className="flex items-center text-xs text-brand-ink-soft gap-1"
          x-file-name="PropertyCard"
          x-line-number={37}
          x-column={10}
          x-component="div"
          x-id="PropertyCard_37_10"
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
            className="lucide lucide-map-pin w-3.5 h-3.5"
            aria-hidden="true"
            x-file-name="PropertyCard"
            x-line-number={38}
            x-column={12}
            x-component="MapPin"
            x-id="PropertyCard_38_12"
            x-dynamic="false"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx={12} cy={10} r={3} />
          </svg>
          <span
            x-file-name="PropertyCard"
            x-line-number={39}
            x-column={12}
            x-component="span"
            x-id="PropertyCard_39_12"
            x-dynamic="true"
            x-source-type="prop"
            x-source-var="p"
            x-source-path="locality"
            x-source-editable="false"
          >
            <span
              data-ve-dynamic="true"
              x-excluded="true"
              x-file-name="PropertyCard"
              x-line-number={39}
              x-column={12}
              x-component="span"
              x-id="PropertyCard_39_12_expr0"
              x-dynamic="true"
              x-source-type="prop"
              x-source-var="p"
              x-source-path="locality"
              x-source-editable="false"
              style={{ display: "contents" }}
            >
              Near Luk Luk Dau Ji Temple
            </span>
            ,{" "}
            <span
              data-ve-dynamic="true"
              x-excluded="true"
              x-file-name="PropertyCard"
              x-line-number={39}
              x-column={12}
              x-component="span"
              x-id="PropertyCard_39_12_expr2"
              x-dynamic="true"
              x-source-type="prop"
              x-source-var="p"
              x-source-path="location"
              x-source-editable="false"
              style={{ display: "contents" }}
            >
              {property?.location}
            </span>
          </span>
        </div>
        <h3
          className="font-display text-2xl font-medium text-brand-ink leading-snug line-clamp-2 group-hover:text-brand-red transition-colors"
          x-file-name="PropertyCard"
          x-line-number={41}
          x-column={10}
          x-component="h3"
          x-id="PropertyCard_41_10"
          x-dynamic="true"
          x-source-type="prop"
          x-source-var="p"
          x-source-path="title"
          x-source-editable="false"
        >
           {property?.title}
        </h3>
        <div
          className="flex items-center gap-4 text-xs text-brand-ink-soft mt-auto pt-3 border-t border-brand-cream"
          x-file-name="PropertyCard"
          x-line-number={42}
          x-column={10}
          x-component="div"
          x-id="PropertyCard_42_10"
          x-dynamic="true"
          x-source-type="computed"
          x-source-editable="false"
        >
          <span
            className="flex items-center gap-1"
            x-file-name="PropertyCard"
            x-line-number={43}
            x-column={12}
            x-component="span"
            x-id="PropertyCard_43_12"
            x-dynamic="true"
            x-source-type="prop"
            x-source-var="p"
            x-source-path="area_value"
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
              className="lucide lucide-maximize2 lucide-maximize-2 w-3.5 h-3.5"
              aria-hidden="true"
              x-file-name="PropertyCard"
              x-line-number={43}
              x-column={54}
              x-component="Maximize2"
              x-id="PropertyCard_43_54"
              x-dynamic="false"
            >
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1={21} x2={14} y1={3} y2={10} />
              <line x1={3} x2={10} y1={21} y2={14} />
            </svg>
            30000 sqft
          </span>
        </div>
      </a>
      <div
        className="grid grid-cols-2 gap-2 pt-1"
        x-file-name="PropertyCard"
        x-line-number={50}
        x-column={8}
        x-component="div"
        x-id="PropertyCard_50_8"
        x-dynamic="false"
      >
        <a
          href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20a%20price%20quote%20for%3A%2030%2C000%20Sq.%20Ft.%20Plot%20Near%20Luk%20Luk%20Dau%20Ji%20Temple%20(Near%20Luk%20Luk%20Dau%20Ji%20Temple%2C%20Govardhan)"
          target="_blank"
          rel="noreferrer"
          data-testid="card-wa-6a9ac87f-a1ee-400d-9cdd-ec39d91df642"
          className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-green-600 text-white text-xs font-semibold py-2.5 hover:bg-green-700 transition-colors"
          x-file-name="PropertyCard"
          x-line-number={51}
          x-column={10}
          x-component="a"
          x-id="PropertyCard_51_10"
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
            className="lucide lucide-message-circle w-3.5 h-3.5"
            aria-hidden="true"
            x-file-name="PropertyCard"
            x-line-number={59}
            x-column={12}
            x-component="MessageCircle"
            x-id="PropertyCard_59_12"
            x-dynamic="false"
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>
          Price on Request
        </a>
        <a
          data-testid="card-visit-6a9ac87f-a1ee-400d-9cdd-ec39d91df642"
          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-brand-ink text-brand-ink text-xs font-semibold py-2.5 hover:bg-brand-ink hover:text-white transition-colors"
          href="/properties/6a9ac87f-a1ee-400d-9cdd-ec39d91df642"
          data-discover="true"
        >
          Get Quote · Visit
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
            className="lucide lucide-arrow-up-right w-3.5 h-3.5"
            aria-hidden="true"
            x-file-name="PropertyCard"
            x-line-number={68}
            x-column={12}
            x-component="ArrowUpRight"
            x-id="PropertyCard_68_12"
            x-dynamic="false"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
      </div>
      <span
        className="text-[10px] uppercase tracking-widest text-brand-ink-soft text-center -mt-1"
        x-file-name="PropertyCard"
        x-line-number={71}
        x-column={8}
        x-component="span"
        x-id="PropertyCard_71_8"
        x-dynamic="true"
        x-source-type="prop"
        x-source-var="p"
        x-source-path="transaction_type"
        x-source-editable="false"
      >
        <span
          data-ve-dynamic="true"
          x-excluded="true"
          x-file-name="PropertyCard"
          x-line-number={71}
          x-column={8}
          x-component="span"
          x-id="PropertyCard_71_8_expr0"
          x-dynamic="true"
          x-source-type="prop"
          x-source-var="p"
          x-source-path="transaction_type"
          x-source-editable="false"
          style={{ display: "contents" }}
        >
          buy
        </span>{" "}
        ·{" "}
        <span
          data-ve-dynamic="true"
          x-excluded="true"
          x-file-name="PropertyCard"
          x-line-number={71}
          x-column={8}
          x-component="span"
          x-id="PropertyCard_71_8_expr2"
          x-dynamic="true"
          x-source-type="prop"
          x-source-var="p"
          x-source-path="property_type"
          x-source-editable="false"
          style={{ display: "contents" }}
        >
          plot
        </span>
      </span>
    </div>
  </div>
    )
}