"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/images/logo.png";

const services = [
  { title: "Personal Counseling", slug: "PersonalCounseling", description: "Individual support for personal growth" },
  { title: "Career Counseling", slug: "CareerCounseling", description: "Navigate your professional journey" },
  { title: "Couple Counseling", slug: "CoupleCounseling", description: "Strengthen your relationship" },
  { title: "Family Counseling", slug: "FamilyCounseling", description: "Build stronger family bonds" },
  { title: "Life Coaching", slug: "LifeCoaching", description: "Achieve your life goals" },
  { title: "Parental Counseling", slug: "ParentalCounseling", description: "Support for parenting challenges" },
  { title: "School Counseling", slug: "SchoolCounseling", description: "Academic and social support" },
  { title: "Virtual Counseling", slug: "VirtualCounseling", description: "Online sessions from anywhere" },
  { title: "Corporate Training", slug: "CorporateTraining", description: "Workplace wellness solutions" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const mobileServicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown when clicking outside
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => pathname === path;
  const isServicesActive = pathname.startsWith("/services");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2"
            : "bg-white shadow-sm py-3"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center shrink-0 group"
              aria-label="Anandam Life - Home"
            >
              {!logoError ? (
                <div className="relative h-12 w-40 sm:h-14 sm:w-48 lg:h-16 lg:w-56">
                  <Image
                    src={Logo}
                    alt="Anandam Life"
                    className="object-contain"
                    priority
                    fill
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
                    onError={() => setLogoError(true)}
                  />
                </div>
              ) : (
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-800 to-orange-600 bg-clip-text text-transparent">
                  Anandam Life
                </span>
              )}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative ${
                  isActive("/")
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
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative ${
                  isActive("/about")
                    ? "text-[#FF9644]"
                    : "text-[#562F00] hover:text-[#FF9644]"
                }`}
              >
                About
                {isActive("/about") && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#FF9644] rounded-full" />
                )}
              </Link>

              {/* Services Dropdown - Desktop */}
              <div ref={servicesRef} className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-1 relative ${
                    isServicesOpen || isServicesActive
                      ? "text-[#FF9644]"
                      : "text-[#562F00] hover:text-[#FF9644]"
                  }`}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                  {isServicesActive && !isServicesOpen && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#FF9644] rounded-full" />
                  )}
                </button>

                {isServicesOpen && (
                  <div className="absolute left-0 top-full mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 animate-fadeIn">
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
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative ${
                  isActive("/tools")
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
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative ${
                  isActive("/pathways")
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
                className={`px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive("/contact")
                    ? "bg-[#FF9644] text-white shadow-md"
                    : "bg-[#FF9644] text-white hover:bg-[#e07d2e] shadow-sm hover:shadow-md"
                }`}
              >
                Contact
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
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            {!logoError ? (
              <div className="relative h-10 w-32">
                <Image
                  src={Logo}
                  alt="Anandam Life"
                  className="object-contain"
                  fill
                  sizes="128px"
                  onError={() => setLogoError(true)}
                />
              </div>
            ) : (
              <span className="text-lg font-bold text-[#562F00]">Anandam Life</span>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#562F00] hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              <Link
                href="/"
                className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive("/")
                    ? "bg-orange-50 text-[#FF9644] font-medium"
                    : "text-[#562F00] hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive("/about")
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
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                    isServicesOpen || isServicesActive
                      ? "bg-orange-50 text-[#FF9644] font-medium"
                      : "text-[#562F00] hover:bg-gray-50"
                  }`}
                >
                  <span>Services</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isServicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
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
                className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive("/tools")
                    ? "bg-orange-50 text-[#FF9644] font-medium"
                    : "text-[#562F00] hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tests
              </Link>

              <Link
                href="/pathways"
                className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive("/pathways")
                    ? "bg-orange-50 text-[#FF9644] font-medium"
                    : "text-[#562F00] hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pathways
              </Link>
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-gray-100 space-y-2">
            <Link
              href="/contact"
              className="block w-full px-4 py-3 bg-[#FF9644] text-white font-medium rounded-lg hover:bg-[#e07d2e] transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/admin-login"
              className="block w-full px-4 py-3 border-2 border-[#562F00] text-[#562F00] font-medium rounded-lg hover:bg-[#562F00] hover:text-white transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Admin Login
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className={`transition-all duration-300 ${isScrolled ? "h-[60px] lg:h-[68px]" : "h-[68px] lg:h-[76px]"}`} />

      <style jsx global>{`
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