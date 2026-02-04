import Link from "next/link";

const SERVICES_AT_GLANCE = [
  "Individual Counseling & Life Coaching",
  "Couple & Family Therapy",
  "Career Counseling",
  "Parental Counseling",
  "School Counseling & Psychology Programs",
  "Corporate Training for Mental Wellness",
  "Virtual Counseling for confidential online support",
  "Internships & Research Opportunities",
];

export default function AboutPage() {
  return (
    <main className="bg-[#FFFDF1] text-[#562F00]">
      {/* Hero */}
      <section className="border-b border-[#FFCE99]/30 bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
            About ANANDAM
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#2F1500] sm:text-4xl">
            Personalized Counseling for a Balanced Life
          </h1>
        </div>
      </section>

      {/* Main intro */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose prose-[#7A4A1A] max-w-none space-y-6 text-[#7A4A1A]">
          <p className="text-base leading-relaxed sm:text-lg">
            At ANANDAM, we understand that life can sometimes feel overwhelming.
            Whether it&apos;s daily stress, anxiety, mood fluctuations, or
            relationship challenges, we believe that inner peace and emotional
            well-being are not only achievable but essential for a fulfilling
            life.
          </p>
          <p className="text-base leading-relaxed sm:text-lg">
            Drawing inspiration from ancient Vedic wisdom, ANANDAM offers
            personalized counseling designed to guide you through life&apos;s
            complexities. Our approach is rooted in the belief that peace of
            mind is the natural state of being, available to everyone, no matter
            where you are in your journey.
          </p>
          <p className="text-base leading-relaxed sm:text-lg">
            We&apos;re here to listen and support you in finding balance.
            Whether you&apos;re navigating the ups and downs of life, exploring
            personal goals, or seeking clarity on how to better manage your
            mental and emotional health, ANANDAM provides the tools and support
            to help you rediscover your inner harmony.
          </p>
          <p className="text-base leading-relaxed sm:text-lg font-medium text-[#2F1500]">
            At ANANDAM, our mission is simple — to help you reconnect with
            yourself, so you can live a life full of joy, peace, and purpose.
            We invite you to embark on a journey with us, where your well-being
            comes first.
          </p>
        </div>
      </section>

      {/* Explore Our Services at a Glance */}
      <section className="bg-[#FFF7EB] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#2F1500] mb-6">
            Explore Our Services at a Glance
          </h2>
          <p className="text-sm text-[#7A4A1A] max-w-2xl mb-8">
            We offer holistic support through personalized, expert-led services,
            including:
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {SERVICES_AT_GLANCE.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-[#FFCE99]/40"
              >
                <span className="text-[#FF9644] mt-0.5">●</span>
                <span className="text-sm text-[#562F00]">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-6 py-3 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              Explore all services →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
