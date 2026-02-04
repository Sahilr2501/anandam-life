import Link from "next/link";

export default function FamilyCounselingPage() {
  return (
    <main className="bg-[#FFFDF1] text-[#562F00]">
      <section className="border-b border-[#FFCE99]/30 bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
            Family Counseling
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#2F1500] sm:text-4xl">
            Family Counseling: Rebuilding Bonds, Finding Harmony
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
            Family is meant to be a place of safety, comfort, and support—a space
            where we feel understood, valued, and loved. Yet, at times, the
            dynamics within a family can feel overwhelming, and we may find
            ourselves disconnected from the very people we cherish most. It&apos;s
            not uncommon to feel like something is missing, even in a loving
            family.
          </p>
          <p>
            At ANANDAM, we understand that every family is unique, with
            different personalities, values, and ways of communicating. These
            differences can sometimes lead to tension, misunderstandings, and
            even a sense of isolation. Family members may love each other, but
            the constant disagreements, clashes of values, or emotional distance
            can leave you feeling like you don&apos;t belong.
          </p>
          <p>We often hear phrases like:</p>
          <ul className="list-disc pl-6 space-y-2 text-[#7A4A1A]">
            <li>&quot;I love my family, but it&apos;s so hard to keep us together—we just don&apos;t match.&quot;</li>
            <li>&quot;I expect peace at home, but every time I walk through the door, the energy is heavy, and I just want to leave.&quot;</li>
            <li>&quot;Our differences seem to push us further apart, and I don&apos;t know how to fix it.&quot;</li>
            <li>&quot;I love my spouse, but I just can&apos;t get along with my in-laws, and it&apos;s creating tension.&quot;</li>
          </ul>
          <p>
            These struggles are normal. ANANDAM is here to help you navigate the
            challenges that arise within families, helping you reconnect and
            rebuild the bonds that matter most. Our family counseling approach is
            centered on understanding and empathy, providing a safe space where
            everyone can express themselves and be heard.
          </p>
          <p>
            We focus on nurturing family relationships while honoring each
            individual&apos;s unique needs and perspectives. Our aim is to help
            you manage conflicts, communicate better, and strengthen your
            emotional connections. We believe that the heart of a family lies in
            its ability to listen, support, and grow together, despite the
            differences that may exist.
          </p>
          <p>
            At ANANDAM, we guide you through the process of bringing back
            harmony, understanding, and a sense of togetherness. We help
            families reestablish their values, find common ground, and rediscover
            joy in their time together. Our counseling isn&apos;t about changing
            who you are—it&apos;s about finding ways to celebrate your
            differences while creating a unified, peaceful home.
          </p>
          <p className="font-medium text-[#2F1500]">
            We&apos;re here to help you rebuild the foundation of your family bond,
            so you can experience the peace and support you deserve. Let us help
            you create a nurturing environment that brings out the best in every
            family member, fostering love, respect, and understanding for years to
            come.
          </p>
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-[#FF9644]/14 via-[#FFCE99]/20 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            <div>
              <h2 className="text-xl font-semibold text-[#2F1500]">
                Ready to find harmony at home?
              </h2>
              <p className="mt-2 text-sm text-[#7A4A1A]">
                Book a family consultation and take the first step together.
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
                Book a Family Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
