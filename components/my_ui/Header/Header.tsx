"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" },
    { label: "Services", href: "/services" },
    { label: "About Team", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Reviews", href: "/reviews" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-brand-ivory/85 border-b border-brand-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-12 w-12 md:h-20 md:w-20 rounded-2xl overflow-hidden ring-1 ring-brand-red/15 shadow-soft bg-brand-red">
            <img
              src="https://customer-assets.emergentagent.com/job_6764da25-50bd-4908-8adb-2df0bd95bfde/artifacts/oi8qahgx_Dau%20Dada%20Profile%20Image.jpg"
              alt="Dau Dada Properties"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="hidden sm:block">
            <div className="font-display text-xl md:text-3xl font-semibold text-brand-ink">
              Dau Dada
            </div>
            <div className="text-[10px] tracking-[0.28em] uppercase text-brand-red font-semibold">
              Properties
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-ink hover:text-brand-red"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/list-your-property"
            className="px-4 py-2 rounded-full border border-brand-ink hover:bg-brand-ink hover:text-white"
          >
            List Your Property
          </Link>

          <Link
            href="/login"
            className="px-4 py-2 rounded-full bg-brand-red text-white flex items-center"
          >
            <Phone className="w-4 h-4 mr-2" />
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2"
        >
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t p-5 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-brand-ink font-medium"
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-4 border-t space-y-3">
            <Link
              href="/list-your-property"
              className="block w-full text-center border border-brand-ink rounded-full py-2"
            >
              List Your Property
            </Link>

            <Link
              href="/login"
              className="block w-full text-center bg-brand-red text-white rounded-full py-2"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}