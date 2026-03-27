import Link from "next/link";

export default function WellnessTestPage() {
  return (
    <main className="bg-[#FFFDF1] text-[#562F00]">
      <section className="border-b border-[#FFCE99]/30 bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
            Free Self-Assessment
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#2F1500] sm:text-4xl">
            Emotional Wellness Check-In
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[#7A4A1A] sm:text-base">
            This page will soon host a gentle, guided self-assessment to help
            you reflect on how you&apos;ve really been feeling—mentally,
            emotionally, and physically.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#FFCE99]/50">
          <h2 className="text-lg font-semibold text-[#2F1500]">Coming Soon</h2>
          <p className="mt-3 text-sm text-[#7A4A1A]">
            We&apos;re in the process of designing thoughtful questions that
            help you pause, notice, and name what&apos;s been happening inside
            you—without labels or judgment.
          </p>
          <p className="mt-4 text-xs text-[#A06B3A]">
            This self-assessment is not a diagnostic tool. It is a reflective
            starting point, and it&apos;s completely okay if all you discover is
            that you&apos;re ready to talk to someone.
          </p>
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-[#FF9644]/14 via-[#FFCE99]/20 to-[#FFFDF1] p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-base font-semibold text-[#2F1500]">
                Prefer to speak to a human instead?
              </h3>
              <p className="mt-2 text-sm text-[#7A4A1A] max-w-xl">
                If you&apos;d rather skip the tools and talk directly to a
                therapist, you can request a free consultation.
              </p>
            </div>
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-6 py-3 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

