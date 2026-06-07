import Link from "next/link";

const SERVICES = [
  {
    title: "Personal Counseling",
    slug: "PersonalCounseling",
    desc: "Space to process anxiety, overthinking, low mood, grief, and life transitions with one-on-one support.",
    image: "/images/Individual Counseling.jpg",
  },
  {
    title: "Career Counseling",
    slug: "CareerCounseling",
    desc: "Guidance for students and professionals seeking clarity on direction, strengths, and next steps.",
    image: "/images/Career Guidance.jpg",
  },
  {
    title: "Couple Counseling",
    slug: "CoupleCounseling",
    desc: "Support for partners navigating conflict, communication issues, trust, and emotional distance.",
    image: "/images/Couple Counseling.jpg",
  },
  { 
    title: "Family Counseling",
    slug: "FamilyCounseling",
    desc: "Facilitated conversations to heal patterns, improve understanding, and restore connection at home.",
    image: "/images/Family Counseling.jpg",
  },
  {
    title: "Life Coaching",
    slug: "LifeCoaching",
    desc: "Move from stuck to aligned with gentle accountability, goal-setting, and inner clarity.",
    image: "/images/Life Coaching.jpg",
  },
  {
    title: "Parental Counseling",
    slug: "ParentalCounseling",
    desc: "Support for parents navigating emotional, behavioural, and relational challenges with children.",
    image: "/images/Parental Counseling.jpg",
  },
  {
    title: "School Counseling",
    slug: "SchoolCounseling",
    desc: "Emotional and academic wellness support for children, teens, and educators.",
    image: "/images/School Counseling.jpg",
  },
  {
    title: "Virtual Counseling",
    slug: "VirtualCounseling",
    desc: "Secure online sessions for those who prefer support from the comfort of home.",
    image: "/images/Virtual Counseling.jpg",
  },
  {
    title: "Corporate Training",
    slug: "CorporateTraining",
    desc: "Workplace mental wellness programs, leadership labs, and emotional skills for teams.",
    image: "/images/Corporate Programs.jpg",
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
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
  key={service.slug}
  className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
>
  {/* Image */}
  <Link href={`/services/${service.slug}`} className="block overflow-hidden">
    <img
      src={service.image}
      alt={service.title}
      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  </Link>

  {/* Content */}
  <div className="p-6">
    {/* Title */}
    <Link href={`/services/${service.slug}`}>
      <h2 className="text-2xl font-semibold text-[#2F1500] transition-colors duration-300 group-hover:text-[#AA5A00]">
        {service.title}
      </h2>
    </Link>

    {/* Description */}
    <p className="mt-4 text-[15px] leading-7 text-[#7A4A1A]">
      {service.desc}
    </p>

    {/* Link */}
    <div className="mt-6">
      <Link
        href={`/services/${service.slug}`}
        className="inline-flex items-center gap-2 text-sm font-medium text-[#C46A00] transition-all duration-300 hover:gap-3"
      >
        Discover more

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
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
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-6 py-3 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all whitespace-nowrap"
            >
              Take the Free Self-Assessment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}