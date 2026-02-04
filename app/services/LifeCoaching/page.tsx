import Link from "next/link";

export default function LifeCoachingPage() {
  return (
    <main className="bg-[#FFFDF1] text-[#562F00]">
      <section className="border-b border-[#FFCE99]/30 bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
            Life Coaching
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#2F1500] sm:text-4xl">
            Life Coaching: Guiding You to a Balanced and Fulfilling Life
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
            At ANANDAM, we believe that you already hold the answers to many of
            life&apos;s challenges. Sometimes, those answers may seem out of reach,
            hidden beneath the complexities of daily life, or clouded by stress
            and uncertainty. Life coaching provides the space and guidance to help
            you uncover these answers, enabling you to take charge of your journey
            toward a more balanced, fulfilling life.
          </p>
          <p>
            Through life coaching, we help you understand the power of your
            choices—how even the smallest decisions can influence the way you
            experience life. From major life changes to everyday moments, coaching
            helps you navigate decisions with clarity, allowing you to create a
            life that feels more meaningful and aligned with your true self.
          </p>
          <p>
            ANANDAM&apos;s Life Coaching program offers a supportive, non-judgmental
            partnership to explore various aspects of your life, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#7A4A1A]">
            <li>Relationship issues and coping</li>
            <li>Stress management and finding balance</li>
            <li>Overcoming anxiety, depression, and mood disorders</li>
            <li>Personal growth and spirituality</li>
            <li>Career planning and development</li>
            <li>Time management and motivation</li>
            <li>Health, lifestyle, and self-care</li>
            <li>Family dynamics and parenting</li>
          </ul>
          <p>
            The coaching process is centered around you—your values, goals, and
            desires. With personalized sessions, our goal is to help you gain
            clarity and confidence, so you can create a life that feels fulfilling
            and authentic.
          </p>
          <p>ANANDAM offers a flexible coaching format to meet your needs, including:</p>
          <ul className="list-disc pl-6 space-y-2 text-[#7A4A1A]">
            <li>A complimentary consultation</li>
            <li>60–90 minute first session</li>
            <li>Ongoing sessions every two weeks or weekly, depending on your needs</li>
            <li>Frequent or occasional virtual support</li>
          </ul>
          <p className="font-medium text-[#2F1500]">
            Our life coaching is about you finding your path, not telling you what
            it should be. Let us support you in discovering your answers and living
            a life full of purpose and balance.
          </p>
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-[#FF9644]/14 via-[#FFCE99]/20 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            <div>
              <h2 className="text-xl font-semibold text-[#2F1500]">
                Ready to find your path?
              </h2>
              <p className="mt-2 text-sm text-[#7A4A1A]">
                Book a complimentary consultation to begin.
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
                Book a Clarity Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
