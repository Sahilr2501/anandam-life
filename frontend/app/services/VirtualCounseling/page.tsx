import Link from "next/link";

export default function VirtualCounselingPage() {
  return (
    <main className="bg-[#FFFDF1] text-[#562F00]">
      <section className="border-b border-[#FFCE99]/30 bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
            Virtual Counseling
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#2F1500] sm:text-4xl">
            Virtual Counseling: Confidential Support at Your Convenience
          </h1>
          <div className="mt-4 text-xs text-[#7A4A1A]">
            <Link href="/services" className="text-[#AA5A00] hover:text-[#FF9644]">
              ← Back to all services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
        <div className="prose prose-[#7A4A1A] max-w-none space-y-6 text-[#7A4A1A] text-base leading-relaxed">
          <p>
            At ANANDAM, we understand that seeking help can be a deeply personal
            experience, and not everyone feels comfortable with in-person
            counseling. That&apos;s why we offer virtual counseling—designed to
            provide the same level of care, understanding, and support, all while
            respecting your privacy.
          </p>
          <p>
            For many, discussing sensitive issues in person can feel intimidating
            or overwhelming. Virtual counseling offers you the opportunity to
            connect with our team from the comfort of your own space, without the
            fear of judgment or the stress of face-to-face interactions. Whether
            you&apos;re dealing with anxiety, relationship challenges, personal
            struggles, or simply need someone to talk to, we&apos;re here to
            provide a safe and confidential space for you to express yourself
            freely.
          </p>
          <p>
            We know that privacy is essential, and our virtual counseling service
            ensures that your identity remains protected. By logging into a secure
            platform with a provided ID and password, you can have your session
            discreetly, allowing you to open up without feeling exposed.
          </p>
          <p>
            We&apos;ve also made virtual counseling affordable, offering a
            low-cost initial session so you can explore if this format works for
            you. After that, if you&apos;re satisfied with the experience, you can
            proceed with regular sessions at our standard rates.
          </p>
          <p className="font-medium text-[#2F1500]">
            At ANANDAM, we believe that everyone deserves the chance to seek
            support in a way that feels comfortable. If you&apos;re hesitant
            about starting the journey, our virtual counseling option is here to
            help you take the first step, on your terms.
          </p>
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-[#FF9644]/14 via-[#FFCE99]/20 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            <div>
              <h2 className="text-xl font-semibold text-[#2F1500]">
                Ready to try virtual counseling?
              </h2>
              <p className="mt-2 text-sm text-[#7A4A1A]">
                Book a session and we&apos;ll send you secure access details.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <Link
                href="/wellness-test"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-6 py-3 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                Take the Free Self-Assessment
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#FF9644]/60 bg-white px-6 py-3 text-sm font-semibold text-[#AA5A00] hover:bg-[#FFF4E2] transition-colors"
              >
                Book a Virtual Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
