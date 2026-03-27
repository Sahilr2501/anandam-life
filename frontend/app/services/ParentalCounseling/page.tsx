import Link from "next/link";

export default function ParentalCounselingPage() {
  return (
    <main className="bg-[#FFFDF1] text-[#562F00]">
      <section className="border-b border-[#FFCE99]/30 bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
            Parental Counseling
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#2F1500] sm:text-4xl">
            Parental Counseling: Empowering Parents to Build Stronger Bonds
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
            Parenting comes with its challenges, and every parent deserves the
            right guidance and support. ANANDAM&apos;s Parental Counseling services
            are designed to help parents navigate the complexities of raising
            children in today&apos;s fast-changing world.
          </p>
          <p>We address common parenting concerns such as:</p>
          <ul className="list-disc pl-6 space-y-2 text-[#7A4A1A]">
            <li><strong className="text-[#2F1500]">New Parent Stress</strong> – Adjusting to the journey of parenthood</li>
            <li><strong className="text-[#2F1500]">Child Behavior & Emotional Issues</strong> – Understanding tantrums, emotional outbursts, and developmental changes</li>
            <li><strong className="text-[#2F1500]">Academic & Social Pressures</strong> – Supporting children through school challenges</li>
            <li><strong className="text-[#2F1500]">Parent-Child Communication</strong> – Strengthening bonds and trust</li>
            <li><strong className="text-[#2F1500]">Co-Parenting & Family Dynamics</strong> – Managing parenting challenges after separation or divorce</li>
          </ul>
          <p>
            Our goal is to equip parents with tools to create a nurturing, loving,
            and healthy environment for their children, ensuring they grow into
            happy and confident individuals.
          </p>
          <p className="font-medium text-[#2F1500]">
            Let us support you in becoming the best parent for your child.
          </p>
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-[#FF9644]/14 via-[#FFCE99]/20 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            <div>
              <h2 className="text-xl font-semibold text-[#2F1500]">
                Ready for parenting support?
              </h2>
              <p className="mt-2 text-sm text-[#7A4A1A]">
                Book a consultation and get the guidance you need.
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
                Book a Parenting Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
