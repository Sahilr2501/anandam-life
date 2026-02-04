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
            Find Work That Feels Aligned
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[#7A4A1A] sm:text-base">
            When you are unsure of your next step, questioning your path, or
            feeling stuck in your current role, career counseling helps you
            reconnect with your strengths, values, and possibilities.
          </p>
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

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#2F1500]">
              This space is for you if…
            </h2>
            <ul className="space-y-2 text-sm text-[#7A4A1A]">
              <li>• You feel lost choosing subjects, courses, or career paths.</li>
              <li>• You&apos;re successful on paper, but feel empty or disconnected at work.</li>
              <li>• You&apos;re considering a career change and want to make an intentional move.</li>
              <li>• You&apos;re struggling with workplace stress, politics, or burnout.</li>
              <li>• You want your work to align with your values and sense of purpose.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#2F1500]">
              What sessions can look like
            </h2>
            <ul className="space-y-2 text-sm text-[#7A4A1A]">
              <li>• Strengths, interests, and personality-based assessments.</li>
              <li>• Mapping your story so far—education, choices, and turning points.</li>
              <li>• Exploring realistic options and experimenting with low-risk next steps.</li>
              <li>• Building confidence, communication, and emotional resilience at work.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-[#FF9644]/14 via-[#FFCE99]/20 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            <div>
              <h2 className="text-xl font-semibold text-[#2F1500]">
                Still not sure which path to choose?
              </h2>
              <p className="mt-2 text-sm text-[#7A4A1A]">
                Before you make the next big decision, pause and check in with
                yourself. Our self-assessment helps you see what your mind and
                body have been trying to tell you about work and wellbeing.
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
                href="/consultation"
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

