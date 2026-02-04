"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/images/logo.png";
import { useState } from "react";

const services = [
  { title: "Personal Counseling", slug: "PersonalCounseling" },
  { title: "Career Counseling", slug: "CareerCounseling" },
  { title: "Couple Counseling", slug: "CoupleCounseling" },
  { title: "Family Counseling", slug: "FamilyCounseling" },
  { title: "Life Coaching", slug: "LifeCoaching" },
  { title: "Parental Counseling", slug: "ParentalCounseling" },
  { title: "School Counseling", slug: "SchoolCounseling" },
  { title: "Virtual Counseling", slug: "VirtualCounseling" },
  { title: "Corporate Training", slug: "CorporateTraining" },
];

const navItemBaseClasses =
  "text-base font-medium text-[#562F00] hover:text-[#FF9644] transition-all duration-300 hover:scale-[1.02]";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="border-b border-[#FFCE99]/20 bg-[#FFFDF1] shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-14 w-auto">
              <Image
                src={Logo}
                alt="Anandam Life logo"
                className="h-full w-auto object-contain drop-shadow-sm"
                priority
                width={200}
                height={59}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <div className="flex items-center space-x-1 bg-white/50 rounded-full px-6 py-2 shadow-inner">
              <Link
                href="/"
                className="px-4 py-2 rounded-full hover:bg-[#FFCE99]/20 transition-colors duration-300"
              >
                <span className={navItemBaseClasses}>Home</span>
              </Link>

              <Link
                href="/about"
                className="px-4 py-2 rounded-full hover:bg-[#FFCE99]/20 transition-colors duration-300"
              >
                <span className={navItemBaseClasses}>About Us</span>
              </Link>

              <Link
                href="/internships-careers"
                className="px-4 py-2 rounded-full hover:bg-[#FFCE99]/20 transition-colors duration-300"
              >
                <span className={navItemBaseClasses}>Internships & Careers</span>
              </Link>

              <Link
                href="/blogs"
                className="px-4 py-2 rounded-full hover:bg-[#FFCE99]/20 transition-colors duration-300"
              >
                <span className={navItemBaseClasses}>Blogs</span>
              </Link>

              <Link
                href="/tools"
                className="px-4 py-2 rounded-full hover:bg-[#FFCE99]/20 transition-colors duration-300"
              >
                <span className={navItemBaseClasses}>Tools</span>
              </Link>

              <Link
                href="/pathways"
                className="px-4 py-2 rounded-full hover:bg-[#FFCE99]/20 transition-colors duration-300"
              >
                <span className={navItemBaseClasses}>Pathways</span>
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`px-4 py-2 rounded-full hover:bg-[#FFCE99]/20 transition-all duration-300 flex items-center gap-2 ${isServicesOpen ? 'bg-[#FFCE99]/20' : ''}`}
                >
                  <span className={navItemBaseClasses}>Our Services</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isServicesOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsServicesOpen(false)}
                    />
                    <div className="absolute left-0 top-full mt-2 z-50 w-72 rounded-2xl border border-[#FFCE99]/30 bg-white shadow-2xl p-4 animate-fade-in">
                      <div className="grid grid-cols-1 gap-2">
                        <Link
                          href="/services"
                          className="mb-1 block rounded-lg bg-[#FFF7EB] px-4 py-3 text-xs font-semibold text-[#AA5A00] hover:bg-[#FFCE99]/30 hover:text-[#562F00] transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          View all services →
                        </Link>
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="group flex items-center p-3 rounded-xl hover:bg-gradient-to-r hover:from-[#FF9644]/10 hover:to-[#FFCE99]/10 transition-all duration-300 hover:scale-[1.02]"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <div className="w-2 h-2 rounded-full bg-[#FF9644] mr-3 group-hover:scale-125 transition-transform duration-300" />
                            <span className="text-[#562F00] group-hover:text-[#FF9644] font-medium transition-colors duration-300">
                              {service.title}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="ml-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] text-[#562F00] font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 group"
            >
              <span>Contact Us</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#FFCE99]/20 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-[#562F00] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-2'}`} />
              <span className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-[#562F00] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-[#562F00] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-2'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-[#FFCE99]/20">
            <div className="space-y-4">
              <Link
                href="/"
                className="flex items-center p-4 rounded-xl hover:bg-[#FFCE99]/10 transition-all duration-300 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-2 h-2 rounded-full bg-[#FF9644] mr-4 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-lg font-medium text-[#562F00]">Home</span>
              </Link>

              <Link
                href="/about"
                className="flex items-center p-4 rounded-xl hover:bg-[#FFCE99]/10 transition-all duration-300 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-2 h-2 rounded-full bg-[#FF9644] mr-4 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-lg font-medium text-[#562F00]">About Us</span>
              </Link>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-4 rounded-xl">
                  <span className="text-lg font-medium text-[#562F00]">Our Services</span>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="p-2 rounded-lg hover:bg-[#FFCE99]/20 transition-colors duration-300"
                  >
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                <div className={`overflow-hidden transition-all duration-500 ${isServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="ml-6 pl-4 border-l-2 border-[#FFCE99]/30 space-y-2">
                    <Link
                      href="/services"
                      className="block py-3 px-4 rounded-lg font-semibold text-[#AA5A00] hover:bg-[#FFCE99]/10 hover:text-[#562F00] transition-all duration-300"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsServicesOpen(false);
                      }}
                    >
                      View all services →
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block py-3 px-4 rounded-lg hover:bg-[#FFCE99]/10 text-[#562F00] hover:text-[#FF9644] transition-all duration-300"
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
                href="/internships-careers"
                className="flex items-center p-4 rounded-xl hover:bg-[#FFCE99]/10 transition-all duration-300 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-2 h-2 rounded-full bg-[#FF9644] mr-4 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-lg font-medium text-[#562F00]">Internships & Careers</span>
              </Link>

              <Link
                href="/blogs"
                className="flex items-center p-4 rounded-xl hover:bg-[#FFCE99]/10 transition-all duration-300 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-2 h-2 rounded-full bg-[#FF9644] mr-4 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-lg font-medium text-[#562F00]">Blogs</span>
              </Link>

              <Link
                href="/tools"
                className="flex items-center p-4 rounded-xl hover:bg-[#FFCE99]/10 transition-all duration-300 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-2 h-2 rounded-full bg-[#FF9644] mr-4 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-lg font-medium text-[#562F00]">Tools</span>
              </Link>

              <Link
                href="/pathways"
                className="flex items-center p-4 rounded-xl hover:bg-[#FFCE99]/10 transition-all duration-300 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-2 h-2 rounded-full bg-[#FF9644] mr-4 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-lg font-medium text-[#562F00]">Pathways</span>
              </Link>

              <Link
                href="/partner-with-us"
                className="flex items-center p-4 rounded-xl hover:bg-[#FFCE99]/10 transition-all duration-300 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-2 h-2 rounded-full bg-[#FF9644] mr-4 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-lg font-medium text-[#562F00]">Partner with Us</span>
              </Link>

              <Link
                href="/contact"
                className="mt-6 block text-center py-4 rounded-xl bg-gradient-to-r from-[#FF9644] to-[#FFCE99] text-[#562F00] font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}