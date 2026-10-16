"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Sparkles, 
  Mic, 
  Boxes, 
  GraduationCap, 
  Navigation, 
  Printer, 
  Code2, 
  PhoneCall,
  Mail
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { PRODUCTS_DATA } from "@/data/products";

const productIcons: Record<string, React.ReactNode> = {
  "ai-voice-agent": <Mic className="w-5 h-5 text-blue-400" />,
  "business-management-platform": <Boxes className="w-5 h-5 text-indigo-400" />,
  "education-erp": <GraduationCap className="w-5 h-5 text-sky-400" />,
  "fleet-asset-tracking": <Navigation className="w-5 h-5 text-cyan-400" />,
  "cloud-printing-solutions": <Printer className="w-5 h-5 text-blue-300" />,
  "bespoke-web-applications": <Code2 className="w-5 h-5 text-indigo-300" />,
};

interface NavbarProps {
  onOpenDemo?: () => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown and mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090A0C]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40"
          : "bg-transparent border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo - Premium Circular Emblem */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#1E2026] via-[#2A2D35] to-[#141519] ring-1 ring-white/20 group-hover:ring-[#FF5722]/80 shadow-[0_0_20px_rgba(255,87,34,0.3)] group-hover:shadow-[0_0_28px_rgba(255,87,34,0.6)] transition-all duration-300 flex-shrink-0">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-1 overflow-hidden shadow-inner">
                <img
                  src="/logo.png"
                  alt="RISEUP SOLUTIONS"
                  className="w-full h-full object-contain scale-[1.3] transform group-hover:scale-[1.38] transition-transform duration-300"
                />
              </div>
              {/* Micro orbit accent dot */}
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#090A0C] flex items-center justify-center">
                <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#FF5722]" />
              </span>
            </div>

            <span className="font-display font-black text-sm sm:text-base md:text-lg tracking-tight text-white whitespace-nowrap group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#FF8A65] transition-all">
              RISEUP SOLUTIONS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/"
                  ? "text-[#FF5722] bg-white/5 font-semibold"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Home
            </Link>

            {/* Products Mega Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname.startsWith("/products")
                    ? "text-[#FF5722] bg-white/5 font-semibold"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                aria-expanded={productsDropdownOpen}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    productsDropdownOpen ? "rotate-180 text-[#FF5722]" : "text-gray-400"
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-[580px] -ml-20 pt-2 z-50">
                  <div className="p-5 rounded-2xl shadow-2xl border border-white/10 bg-[#121316]/95 backdrop-blur-xl">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#FF8A65] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
                        Flagship Platform Modules
                      </span>
                      <Link
                        href="/products"
                        className="text-xs text-gray-400 hover:text-[#FF8A65] flex items-center gap-1 group/all"
                      >
                        View all products
                        <ArrowRight className="w-3 h-3 group-hover/all:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {PRODUCTS_DATA.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.slug}`}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all group/item"
                        >
                          <div className="p-2 rounded-lg bg-white/5 group-hover/item:bg-[#FF5722]/20 transition-colors">
                            {productIcons[product.slug] || <Boxes className="w-5 h-5 text-[#FF8A65]" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-white group-hover/item:text-[#FF8A65] transition-colors flex items-center justify-between gap-1.5">
                              <span className="truncate">{product.name}</span>
                              <span className="text-[10px] font-mono text-[#FF8A65] bg-[#FF5722]/15 px-1.5 py-0.5 rounded flex-shrink-0">
                                {product.pricing.range.split("/")[0].trim()}
                              </span>
                            </div>
                            <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">
                              {product.tagline}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#FF8A65] font-semibold">Talk to our Advisor:</span>
                        <span className="text-white font-medium">{COMPANY_DATA.advisor.name}</span>
                      </div>
                      <a 
                        href={`tel:${COMPANY_DATA.advisor.phone}`} 
                        className="text-[#FF8A65] font-bold hover:underline flex items-center gap-1"
                      >
                        <span>{COMPANY_DATA.advisor.displayPhone}</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/industries"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname.startsWith("/industries")
                  ? "text-[#FF5722] bg-white/5 font-semibold"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Industries
            </Link>

            <Link
              href="/about"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/about"
                  ? "text-[#FF5722] bg-white/5 font-semibold"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/careers"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/careers"
                  ? "text-[#FF5722] bg-white/5 font-semibold"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Careers
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/contact"
                  ? "text-[#FF5722] bg-white/5 font-semibold"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_DATA.advisor.phone}`}
              className="hidden xl:flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
              title={`Talk to our Advisor: ${COMPANY_DATA.advisor.name}`}
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#FF5722]" />
              <span>Advisor: {COMPANY_DATA.advisor.displayPhone}</span>
            </a>

            <a
              href={`mailto:${COMPANY_DATA.contact.email}`}
              className="text-xs font-semibold px-3 py-2 text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#FF5722]" />
              <span>{COMPANY_DATA.contact.email}</span>
            </a>

            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-white transition-all bg-[#FF5722] hover:bg-[#FF6D3B] rounded-full shadow-[0_4px_20px_rgba(255,87,34,0.35)] hover:shadow-[0_6px_28px_rgba(255,87,34,0.5)] transform hover:-translate-y-0.5"
            >
              <span>Schedule Demo</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090A0C]/98 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              className="px-3 py-2.5 rounded-lg text-base font-medium text-white hover:bg-white/5"
            >
              Home
            </Link>

            <div className="py-2 border-y border-white/5">
              <span className="px-3 text-xs font-semibold uppercase tracking-wider text-[#FF8A65] block mb-2">
                Products
              </span>
              <div className="grid grid-cols-1 gap-1">
                {PRODUCTS_DATA.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5"
                  >
                    {productIcons[product.slug] || <Boxes className="w-4 h-4 text-[#FF8A65]" />}
                    <span>{product.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/industries"
              className="px-3 py-2.5 rounded-lg text-base font-medium text-white hover:bg-white/5"
            >
              Industries
            </Link>

            <Link
              href="/about"
              className="px-3 py-2.5 rounded-lg text-base font-medium text-white hover:bg-white/5"
            >
              About Us
            </Link>

            <Link
              href="/careers"
              className="px-3 py-2.5 rounded-lg text-base font-medium text-white hover:bg-white/5"
            >
              Careers
            </Link>

            <Link
              href="/contact"
              className="px-3 py-2.5 rounded-lg text-base font-medium text-white hover:bg-white/5"
            >
              Contact
            </Link>

            <div className="pt-4 flex flex-col gap-2.5">
              <Link
                href="/contact"
                className="w-full text-center py-3 rounded-full bg-[#FF5722] hover:bg-[#FF6D3B] text-white font-bold text-sm shadow-[0_4px_20px_rgba(255,87,34,0.35)]"
              >
                Schedule Interactive Demo
              </Link>
              <div className="text-center text-xs text-gray-400 pt-1">
                Support: {COMPANY_DATA.contact.email}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
