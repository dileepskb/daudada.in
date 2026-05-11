import Link from "next/link"
import { IoCallOutline } from "react-icons/io5"
import { IoMailOpenOutline } from "react-icons/io5"
import Image from "next/image"
import { IoIosArrowDown } from "react-icons/io"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-brand-ivory/85 border-b border-brand-cream" data-testid="site-header">
   <div className="max-w-7xl mx-auto px-5 md:px-10 py-3 md:py-4 flex items-center justify-between gap-3">
      <Link className="flex items-center gap-3 md:gap-4 flex-shrink-0" data-testid="logo-link" href="/" data-discover="true">
         <div className="h-14 w-14 md:h-20 md:w-20 rounded-2xl overflow-hidden ring-1 ring-brand-red/15 shadow-soft bg-brand-red flex-shrink-0">
         <img alt="Dau Dada Properties" className="h-full w-full object-cover" loading="eager" decoding="async" src="https://customer-assets.emergentagent.com/job_6764da25-50bd-4908-8adb-2df0bd95bfde/artifacts/oi8qahgx_Dau%20Dada%20Profile%20Image.jpg" style={{ imageRendering: 'auto'}} />
         </div>
         <div className="hidden sm:block leading-tight">
            <div className="font-display text-2xl md:text-3xl font-semibold text-brand-ink">Dau Dada</div>
            <div className="text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-brand-red font-semibold">Properties</div>
         </div>
      </Link>
      <nav className="hidden lg:flex items-center gap-8">
        <Link data-testid="nav-home" aria-current="page" className="text-sm font-medium tracking-wide transition-colors text-brand-red" href="/" data-discover="true">Home</Link>
        <Link data-testid="nav-properties" className="text-sm font-medium tracking-wide transition-colors text-brand-ink hover:text-brand-red" href="/properties" data-discover="true">Properties</Link>
        <Link data-testid="nav-services" className="text-sm font-medium tracking-wide transition-colors text-brand-ink hover:text-brand-red" href="/services" data-discover="true">Services</Link>
        <Link data-testid="nav-about-team" className="text-sm font-medium tracking-wide transition-colors text-brand-ink hover:text-brand-red" href="/about" data-discover="true">About Team</Link>
        <Link data-testid="nav-blog" className="text-sm font-medium tracking-wide transition-colors text-brand-ink hover:text-brand-red" href="/blog" data-discover="true">Blog</Link>
        <Link data-testid="nav-reviews" className="text-sm font-medium tracking-wide transition-colors text-brand-ink hover:text-brand-red" href="/reviews" data-discover="true">Reviews</Link>
        </nav>
      <div className="hidden md:flex items-center gap-3">
         <Link href={'/list-your-property'} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-sm h-9 px-4 py-2 rounded-full border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-white" data-testid="header-list-property-btn">List Your Property</Link>
         <Link href={'/signin'} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow h-9 px-4 py-2 rounded-full bg-brand-red text-white hover:bg-brand-red-dark shadow-brand" data-testid="header-login-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone w-4 h-4 mr-2" aria-hidden="true">
               <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Login
         </Link>
      </div>
      <button className="lg:hidden p-2 ml-2 flex-shrink-0" data-testid="mobile-menu-btn" aria-label="menu">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu w-6 h-6" aria-hidden="true">
            <path d="M4 12h16"></path>
            <path d="M4 18h16"></path>
            <path d="M4 6h16"></path>
         </svg>
      </button>
   </div>
</header>
  )
}
