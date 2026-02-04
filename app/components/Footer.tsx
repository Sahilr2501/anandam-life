import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#FFCE99]/30 bg-[#FFFDF1]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#562F00] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-[#562F00]/80">
              <li>
                <Link href="/" className="hover:text-[#FF9644] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FF9644] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FF9644] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-[#FF9644] transition-colors">
                  Self-Discovery Tools
                </Link>
              </li>
              <li>
                <Link href="/pathways" className="hover:text-[#FF9644] transition-colors">
                  Guided Pathways
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-[#FF9644] transition-colors">
                  Blogs &amp; Resources
                </Link>
              </li>
              <li>
                <Link href="/internships-careers" className="hover:text-[#FF9644] transition-colors">
                  Internships &amp; Careers
                </Link>
              </li>
              <li>
                <Link href="/partner-with-us" className="hover:text-[#FF9644] transition-colors">
                  Partner with Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FF9644] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Handles */}
          <div>
            <h3 className="text-lg font-semibold text-[#562F00] mb-4">
              Social Handles
            </h3>
            <ul className="space-y-2 text-sm text-[#562F00]/80">
              <li>
                <Link href="#" className="hover:text-[#FF9644] transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF9644] transition-colors">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF9644] transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF9644] transition-colors">
                  YouTube
                </Link>
              </li>
            </ul>
          </div>

          {/* WhatsApp / Newsletter / Policies */}
          <div>
            <h3 className="text-lg font-semibold text-[#562F00] mb-4">
              Stay Connected
            </h3>
            <div className="space-y-3 text-sm text-[#562F00]/80">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/5 px-4 py-2 text-[#075E54] hover:bg-[#25D366]/10 transition-colors"
              >
                <span>WhatsApp Chat</span>
              </Link>

              <Link
                href="#"
                className="block rounded-full border border-[#FFCE99]/60 bg-white px-4 py-2 text-center hover:bg-[#FFCE99]/20 transition-colors"
              >
                Newsletter
              </Link>

              <div className="flex flex-wrap gap-3 text-xs">
                <Link href="#" className="hover:text-[#FF9644] transition-colors">
                  Terms &amp; Conditions
                </Link>
                <span className="text-[#562F00]/30">•</span>
                <Link href="#" className="hover:text-[#FF9644] transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-[#562F00]/30">•</span>
                <Link href="#" className="hover:text-[#FF9644] transition-colors">
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#FFCE99]/20 pt-4 text-xs text-[#562F00]/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Anandam Life. All rights reserved.</span>
          <span>Made with care for emotional wellness.</span>
        </div>
      </div>
    </footer>
  );
}

