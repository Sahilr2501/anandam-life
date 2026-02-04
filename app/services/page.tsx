import Link from "next/link";

const SERVICES = [
  {
    title: "Personal Counseling",
    slug: "PersonalCounseling",
    desc: "Space to process anxiety, overthinking, low mood, grief, and life transitions with one-on-one support.",
  },
  {
    title: "Career Counseling",
    slug: "CareerCounseling",
    desc: "Guidance for students and professionals seeking clarity on direction, strengths, and next steps.",
  },
  {
    title: "Couple Counseling",
    slug: "CoupleCounseling",
    desc: "Support for partners navigating conflict, communication issues, trust, and emotional distance.",
  },
  {
    title: "Family Counseling",
    slug: "FamilyCounseling",
    desc: "Facilitated conversations to heal patterns, improve understanding, and restore connection at home.",
  },
  {
    title: "Life Coaching",
    slug: "LifeCoaching",
    desc: "Move from stuck to aligned with gentle accountability, goal-setting, and inner clarity.",
  },
  {
    title: "Parental Counseling",
    slug: "ParentalCounseling",
    desc: "Support for parents navigating emotional, behavioural, and relational challenges with children.",
  },
  {
    title: "School Counseling",
    slug: "SchoolCounseling",
    desc: "Emotional and academic wellness support for children, teens, and educators.",
  },
  {
    title: "Virtual Counseling",
    slug: "VirtualCounseling",
    desc: "Secure online sessions for those who prefer support from the comfort of home.",
  },
  {
    title: "Corporate Training",
    slug: "CorporateTraining",
    desc: "Workplace mental wellness programs, leadership labs, and emotional skills for teams.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#FFFDF1] text-[#562F00]">
      <section className="border-b border-[#FFCE99]/30 bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
            Our Services
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#2F1500] sm:text-4xl">
            Find Support That Feels Right
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[#7A4A1A] sm:text-base">
            Whether you are navigating stress, relationship changes, career
            crossroads, or deeper emotional patterns, Anandam offers different
            paths to meet you where you are.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.slug}
              className="flex flex-col justify-between rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[#FFCE99]/40 hover:-translate-y-1 hover:shadow-md hover:ring-[#FF9644]/70 transition-all"
            >
              <div>
                <h2 className="text-lg font-semibold text-[#2F1500]">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm text-[#7A4A1A]">{service.desc}</p>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <Link
                  href={`/services/${service.slug}`}
                  className="font-semibold text-[#AA5A00] hover:text-[#FF9644]"
                >
                  Explore this service →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#FF9644]/12 via-[#FFCE99]/18 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-[#2F1500]">
                Still not sure what fits you?
              </h2>
              <p className="mt-2 text-sm text-[#7A4A1A] max-w-xl">
                You don&apos;t have to figure it out alone. Take a gentle
                self-assessment to understand where you are emotionally and
                which support spaces may help you most.
              </p>
            </div>
            <Link
              href="/wellness-test"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-6 py-3 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              Take the Free Self-Assessment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

