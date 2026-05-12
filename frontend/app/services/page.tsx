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
              className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 ring-1 ring-[#FFCE99]/40 hover:ring-[#FF9644]/70 hover:-translate-y-2 active:scale-[0.98]"
            >
              {/* Clickable Image */}
              <Link href={`/services/${service.slug}`} className="block">
                <div className="flex justify-center mb-5">
                  <div className="rounded-full bg-gradient-to-br from-[#FFF7E8] to-[#FFE4C4] p-4 group-hover:from-[#FFCE99] group-hover:to-[#FFE4C4] transition-all duration-300">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              </Link>

              {/* Title */}
              <Link href={`/services/${service.slug}`}>
                <h2 className="text-center text-lg sm:text-xl font-semibold text-[#2F1500] mb-3 transition-colors duration-300 group-hover:text-[#AA5A00]">
                  {service.title}
                </h2>
              </Link>

              {/* Description */}
              <p className="text-center text-sm text-[#7A4A1A] line-clamp-3">
                {service.desc}
              </p>

              {/* Button */}
              <div className="mt-5 text-center">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-sm font-medium text-[#AA5A00] group-hover:gap-3 transition-all duration-300 gap-1 border-b-2 border-transparent group-hover:border-[#AA5A00] pb-1"
                >
                  Explore this service
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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