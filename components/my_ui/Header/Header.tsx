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
    <header className="header-wrapper">
      <div className="border-b py-2">
        <div className="container">
          <div className="flex justify-between">
            <div className="flex gap-5">
              <a
                href="tel:+919876543210"
                className="contact-link flex items-center gap-1"
              >
                <div className="text-yellow-600">
                  <IoCallOutline size={18} />
                </div>
                <span className="text-sm leading-none">+91-9876543210</span>
              </a>
              <a
                href="mailto:info@brijbhoomi.com"
                className="contact-link flex items-center gap-1"
              >
                <div className="text-yellow-600">
                  <IoMailOpenOutline size={18} />
                </div>
                <span className="text-sm leading-none">info@baudada.in</span>
              </a>
            </div>
            <div><Link
                className="bg-yellow-600 rounded text-white font-bold text-sm py-1 px-2"
                href="/contact"
                data-discover="true"
              >
                Property Listing
              </Link></div>
          </div>
        </div>
      </div>
      <nav className="flex py-1">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div>
              <Image
                src="/images/Profile_Image2-02-1.png"
                alt="Dau Dada Property"
                width={150}
                height={70}
              />
            </div>
            <div className="nav-links flex justify-center gap-6">
              {/* <Link className="nav-link" href="/" data-discover="true">
              Home
            </Link> */}
              <Link
                className="nav-link"
                href="/properties"
                data-discover="true"
              >
                Properties
              </Link>
              <div className="nav-dropdown">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex cursor-pointer items-center nav-link">
                      <span>Services</span> <IoIosArrowDown />{" "}
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="z-[999] w-60" align="start">
                    <DropdownMenuGroup>
                      {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                      <DropdownMenuItem className="py-2">
                         Legal & Compliance
                      </DropdownMenuItem>
                      <DropdownMenuItem className="py-2">
                       Free Consultation
                      </DropdownMenuItem>
                      <DropdownMenuItem className="py-2">
                        30-Year Title Search
                      </DropdownMenuItem>
                      <DropdownMenuItem className="py-2">
                         Documentation & Mutation
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
                className="nav-link"
                href="/contact"
                data-discover="true"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
