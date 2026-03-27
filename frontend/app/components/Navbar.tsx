"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Try different import approaches
// Option 1: If logo.png is in public/images folder
import Logo from "@/images/logo.png";
// Option 2: If logo.png is in public folder
// import Logo from "/logo.png";
// Option 3: If logo.png is in assets folder
// import Logo from "@/assets/logo.png";

const services = [
  { title: "Personal Counseling", slug: "personal-counseling", description: "Individual support for personal growth" },
  { title: "Career Counseling", slug: "career-counseling", description: "Navigate your professional journey" },
  { title: "Couple Counseling", slug: "couple-counseling", description: "Strengthen your relationship" },
  { title: "Family Counseling", slug: "family-counseling", description: "Build stronger family bonds" },
  { title: "Life Coaching", slug: "life-coaching", description: "Achieve your life goals" },
  { title: "Parental Counseling", slug: "parental-counseling", description: "Support for parenting challenges" },
  { title: "School Counseling", slug: "school-counseling", description: "Academic and social support" },
  { title: "Virtual Counseling", slug: "virtual-counseling", description: "Online sessions from anywhere" },
  { title: "Corporate Training", slug: "corporate-training", description: "Workplace wellness solutions" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-white py-5"
          }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Fixed with fallback */}
            <Link
              href="/"
              className="flex items-center shrink-0 group"
              aria-label="Anandam Life - Home"
            >
              {!logoError ? (
                <div className="relative h-10 w-32 lg:h-12 lg:w-40">
                  <Image
                    src={Logo}
                    alt="Anandam Life"
                    className="object-contain"
                    priority
                    fill
                    sizes="(max-width: 768px) 128px, 160px"
                    onError={() => setLogoError(true)}
                  />
                </div>
              ) : (
                // Fallback text logo if image fails to load
                <span className="text-xl font-bold text-[#562F00]">
                  Anandam Life
                </span>
              )}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className={`px-4 py-2 font-medium transition-colors relative ${isActive("/")
                  ? "text-[#FF9644]"
                  : "text-[#562F00] hover:text-[#FF9644]"
                  }`}
              >
                Home
                {isActive("/") && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#FF9644] rounded-full" />
                )}
              </Link>

              <Link
                href="/about"
                className={`px-4 py-2 font-medium transition-colors relative ${isActive("/about")
                  ? "text-[#FF9644]"
                  : "text-[#562F00] hover:text-[#FF9644]"
                  }`}
              >
                About
                {isActive("/about") && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#FF9644] rounded-full" />
                )}
              </Link>

              {/* Services Dropdown */}
              <div ref={servicesRef} className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`px-4 py-2 font-medium transition-colors flex items-center gap-1 relative ${isServicesOpen || pathname.startsWith("/services")
                    ? "text-[#FF9644]"
                    : "text-[#562F00] hover:text-[#FF9644]"
                    }`}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                  {pathname.startsWith("/services") && !isServicesOpen && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#FF9644] rounded-full" />
                  )}
                </button>

                {isServicesOpen && (
                  <div className="absolute left-0 top-full mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 animate-fadeIn">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Our Services
                      </span>
                    </div>

                    <Link
                      href="/services"
                      className="block px-4 py-2.5 text-sm text-[#AA5A00] font-medium hover:bg-orange-50 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <span>View all services</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>

                    <div className="border-t border-gray-100 my-2"></div>

                    <div className="max-h-96 overflow-y-auto">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block px-4 py-2.5 hover:bg-gray-50 transition-colors group"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className="text-sm font-medium text-gray-900 group-hover:text-[#FF9644] transition-colors">
                            {service.title}
                          </div>
                          <div className="text-xs text-gray-500 group-hover:text-gray-600">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/tools"
                className={`px-4 py-2 font-medium transition-colors relative ${isActive("/tools")
                  ? "text-[#FF9644]"
                  : "text-[#562F00] hover:text-[#FF9644]"
                  }`}
              >
                Tests
                {isActive("/tools") && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#FF9644] rounded-full" />
                )}
              </Link>

              <Link
                href="/pathways"
                className={`px-4 py-2 font-medium transition-colors relative ${isActive("/pathways")
                  ? "text-[#FF9644]"
                  : "text-[#562F00] hover:text-[#FF9644]"
                  }`}
              >
                Pathways
                {isActive("/pathways") && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#FF9644] rounded-full" />
                )}
              </Link>
            </div>

            {/* Desktop Right Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                href="/contact"
                className={`px-5 py-2 font-medium rounded-md transition-all duration-200 ${isActive("/contact")
                  ? "bg-[#FF9644] text-white shadow-md"
                  : "bg-[#FF9644] text-white hover:bg-[#e07d2e] shadow-sm hover:shadow"
                  }`}
              >
                Contact
              </Link>

              <Link
                href="/admin-login"
                className="px-5 py-2 font-medium text-[#562F00] border border-[#562F00] rounded-md hover:bg-[#562F00] hover:text-white transition-all duration-200"
              >
                Admin
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#562F00] hover:bg-gray-100 rounded-lg transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
          >
            <div className="py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-1">
                <Link
                  href="/"
                  className={`px-4 py-3 rounded-lg transition-colors ${isActive("/")
                    ? "bg-orange-50 text-[#FF9644] font-medium"
                    : "text-[#562F00] hover:bg-gray-50"
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className={`px-4 py-3 rounded-lg transition-colors ${isActive("/about")
                    ? "bg-orange-50 text-[#FF9644] font-medium"
                    : "text-[#562F00] hover:bg-gray-50"
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>

                {/* Mobile Services Accordion */}
                <div className="space-y-1">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`w-full px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${isServicesOpen || pathname.startsWith("/services")
                      ? "bg-orange-50 text-[#FF9644] font-medium"
                      : "text-[#562F00] hover:bg-gray-50"
                      }`}
                  >
                    <span>Services</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="pl-4 space-y-1 mt-1">
                      <Link
                        href="/services"
                        className="block px-4 py-2.5 text-sm text-[#AA5A00] font-medium hover:bg-orange-50 rounded-lg transition-colors"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span>All Services</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>

                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#FF9644] rounded-lg transition-colors"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsServicesOpen(false);
                          }}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href="/tools"
                  className={`px-4 py-3 rounded-lg transition-colors ${isActive("/tools")
                    ? "bg-orange-50 text-[#FF9644] font-medium"
                    : "text-[#562F00] hover:bg-gray-50"
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Test
                </Link>

                <Link
                  href="/pathways"
                  className={`px-4 py-3 rounded-lg transition-colors ${isActive("/pathways")
                    ? "bg-orange-50 text-[#FF9644] font-medium"
                    : "text-[#562F00] hover:bg-gray-50"
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pathways
                </Link>

                <div className="pt-4 mt-2 border-t border-gray-100 space-y-2">
                  <Link
                    href="/contact"
                    className="block px-4 py-3 bg-[#FF9644] text-white font-medium rounded-lg hover:bg-[#e07d2e] transition-colors text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>

                  <Link
                    href="/admin-login"
                    className="block px-4 py-3 border border-[#562F00] text-[#562F00] font-medium rounded-lg hover:bg-[#562F00] hover:text-white transition-colors text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Admin Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer */}
      <div className={`transition-all duration-300 ${isScrolled ? "h-16 lg:h-[72px]" : "h-20 lg:h-[88px]"}`} />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
}