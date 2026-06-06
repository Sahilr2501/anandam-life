"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="border-t border-[#FFCE99]/40 bg-gradient-to-b from-[#FFF7EB] to-[#FFEFDF]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold text-[#562F00] mb-3">
              Anandam Life
            </h2>
            <p className="text-sm text-[#562F00]/70 leading-relaxed">
              Your companion on the journey to emotional wellness and self-discovery.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-5">
            <h3 className="text-base font-semibold text-[#562F00] mb-4 tracking-wide">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              <Link
                href="/tools"
                className="text-sm text-[#562F00]/70 hover:text-[#FF9644] transition-all duration-200 hover:translate-x-1"
              >
                Self-Discovery Tools
              </Link>
              <Link
                href="/pathways"
                className="text-sm text-[#562F00]/70 hover:text-[#FF9644] transition-all duration-200 hover:translate-x-1"
              >
                Guided Pathways
              </Link>
              <Link
                href="/blogs"
                className="text-sm text-[#562F00]/70 hover:text-[#FF9644] transition-all duration-200 hover:translate-x-1"
              >
                Blogs & Resources
              </Link>
              <Link
                href="/internships-careers"
                className="text-sm text-[#562F00]/70 hover:text-[#FF9644] transition-all duration-200 hover:translate-x-1"
              >
                Internships & Careers
              </Link>
              <Link
                href="/partner-with-us"
                className="text-sm text-[#562F00]/70 hover:text-[#FF9644] transition-all duration-200 hover:translate-x-1"
              >
                Partner with Us
              </Link>
              <Link
                href="/admin/login"
                className="text-sm text-[#562F00]/70 hover:text-[#FF9644] transition-all duration-200 hover:translate-x-1"
              >
                Admin Login
              </Link>
            </div>
          </div>

          {/* Stay Connected */}
          <div className="md:col-span-3">
            <h3 className="text-base font-semibold text-[#562F00] mb-4 tracking-wide">
              Stay Connected
            </h3>
            <div className="space-y-3">
              <Link
                href="https://wa.me/"
                className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/50 bg-[#25D366]/5 px-5 py-2.5 text-sm font-medium text-[#075E54] hover:bg-[#25D366]/15 transition-all duration-200 hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[#25D366]"
                >
                  <path d="M12.032 2.016c-5.52 0-10 4.48-10 10 0 1.776.48 3.456 1.296 4.944L2.016 21.984l5.088-1.296c1.44.768 3.072 1.248 4.944 1.248 5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18.016c-1.44 0-2.784-.384-3.984-1.056l-2.784.72.72-2.688c-.72-1.2-1.152-2.592-1.152-4.032 0-4.416 3.6-8.016 8.016-8.016s8.016 3.6 8.016 8.016-3.6 8.016-8.016 8.016zm4.272-5.856c-.24-.12-1.392-.672-1.584-.768-.192-.096-.336-.144-.48.144-.144.24-.528.768-.672.96-.144.192-.288.216-.528.096-.24-.12-1.008-.384-1.92-1.2-.72-.648-1.2-1.44-1.344-1.68-.144-.24-.016-.384.096-.528.096-.12.192-.24.288-.36.096-.12.144-.24.216-.384.072-.144.024-.264-.024-.384-.048-.12-.48-1.152-.672-1.584-.144-.36-.288-.288-.384-.288-.096 0-.192-.024-.288-.024-.096 0-.24.048-.384.144-.144.096-.528.528-.528 1.248 0 .72.528 1.44.624 1.536.096.096 1.056 1.632 2.544 2.256 1.488.624 1.488.432 1.776.384.288-.048.96-.384 1.104-.768.144-.384.144-.72.096-.768-.048-.048-.144-.072-.336-.168z" />
                </svg>
                WhatsApp Chat
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#FFCE99]/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#562F00]/60">
            <span>© {new Date().getFullYear()} Anandam Life. All rights reserved.</span>
            <span className="flex items-center gap-1">
              Made with <span className="text-red-400">❤️</span> for emotional wellness.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}