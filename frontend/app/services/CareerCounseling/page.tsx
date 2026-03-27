import Link from "next/link";

export default function CareerCounselingPage() {
  return (
    <main className="bg-[#FFFDF1] text-[#562F00]">
      <section className="border-b border-[#FFCE99]/30 bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
            Career Counseling
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#2F1500] sm:text-4xl">
            Career Counseling: Discover Your Path Forward
          </h1>
          <div className="mt-4 text-xs text-[#7A4A1A]">
            <Link
              href="/services"
              className="text-[#AA5A00] hover:text-[#FF9644]"
            >
              ← Back to all services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
        <div className="prose prose-[#7A4A1A] max-w-none space-y-6 text-[#7A4A1A] text-base leading-relaxed">
          <p>
            At ANANDAM, we understand that choosing the right career can feel
            challenging, especially when it involves balancing your strengths and
            interests. Our career counseling services are here to guide you in
            finding a path that truly fits who you are.
          </p>
          <p>
            Through personalized psychometric assessments and psychological
            tools, we help you explore your natural abilities and genuine
            interests. This process allows you to gain insight into areas where
            you can truly thrive, helping you identify career options that align
            with your skills and passions.
          </p>
          <p>
            Our aim is to help you build confidence in your career choices,
            leading to greater satisfaction and a stronger sense of fulfillment.
            With the support of one-on-one counseling, we assist in narrowing the
            gap between what you&apos;re good at and what you enjoy doing, so you
            can feel more certain and content with your career decisions.
          </p>
          <p className="font-medium text-[#2F1500]">
            At ANANDAM, we are committed to helping you find a career that is not
            only successful but also meaningful and true to who you are.
          </p>
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-[#FF9644]/14 via-[#FFCE99]/20 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            <div>
              <h2 className="text-xl font-semibold text-[#2F1500]">
                Ready to explore your path?
              </h2>
              <p className="mt-2 text-sm text-[#7A4A1A]">
                Take our free self-assessment or book a consultation to start
                your career clarity journey.
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
                Book a Career Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
