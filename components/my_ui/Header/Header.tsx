import Link from "next/link"
import { IoCallOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  return (
    <header className="header-wrapper">
      <div className="border-b py-1">
        <div className="container">
          <div className="flex justify-between">
            <a href="tel:+919876543210" className="contact-link flex gap-3 items-center">
              <div>
                <div className="bg-orange-500 rounded-full text-white p-1.5"><IoCallOutline size={20} /></div>
              </div>
              <div>
                <p className="text-xs leading-none">Call Anytime</p>
                <span className="font-bold leading-none">+91-9876-543-210</span>
              </div>
            </a>
            <Link className="logo" href="/" data-discover="true">
            <Image src="/images/Profile_Image2-02-1.png" alt="Dau Dada Property" width={150} height={70} />
          </Link>
            <a href="mailto:info@brijbhoomi.com" className="contact-link flex gap-3 items-center">
              <div>
                <div className="bg-orange-500 rounded-full text-white p-1.5"><IoMailOpenOutline size={20} /></div>
              </div>
              <div>
                <p className="text-xs leading-none">Mail Us</p>
                <span className="font-bold leading-none">info@baudada.in</span>
              </div>
            </a>
            
            {/* <span className="contact-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin" aria-hidden="true">
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>Goverdhan, Mathura</span>
        </span> */}
          </div>
        </div>
      </div>
      <nav className="flex py-3">
        <div className="container mx-auto">
          
          <div className="nav-links flex justify-center gap-6">
            {/* <Link className="nav-link" href="/" data-discover="true">
              Home
            </Link> */}
            <Link className="nav-link" href="/properties" data-discover="true">
              Properties
            </Link>
            <div className="nav-dropdown">
              <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer flex items-center"><span>Services</span> <IoIosArrowDown /> </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60 z-[999]" align="start">
        <DropdownMenuGroup>
          {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
          <DropdownMenuItem className="flex-col items-start">
            <span className="text-red-800 font-bold">Legal & Compliance</span>
            <span>MVDA, RERA & Document Vetting</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex-col items-start">
           <span className="text-red-800 font-bold">Free Consultation</span>
<span>Expert advice & Risk assessment</span>
          </DropdownMenuItem>
         <DropdownMenuItem className="flex-col items-start">
           <span className="text-red-800 font-bold">30-Year Title Search</span>
<span>Complete historical audit</span>
          </DropdownMenuItem>
         <DropdownMenuItem className="flex-col items-start">
         <span className="text-red-800 font-bold">Documentation & Mutation</span>
<span>Registry to Dakhil-Kharij</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        
      </DropdownMenuContent>
    </DropdownMenu>
              {/* <Link
                className="nav-link dropdown-trigger"
                href="/services"
                data-discover="true"
              >
                Services
                <IoIosArrowDown />
              </Link> */}
            </div>
            <Link className="nav-link" href="/about" data-discover="true">
              About Us
            </Link>
            <Link className="nav-link" href="/news" data-discover="true">
              News
            </Link>
            <Link
              className="nav-link contact-btn"
              href="/contact"
              data-discover="true"
            >
             Property Listing
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
