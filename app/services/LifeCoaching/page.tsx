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
            Moving from Surviving to Intentionally Living
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[#7A4A1A] sm:text-base">
            When you&apos;re not in acute distress but feel called to grow,
            life coaching supports you in aligning your actions with your
            values, goals, and inner wisdom.
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
              <li>• You feel like you&apos;re on autopilot and want more intentionality.</li>
              <li>• You have goals but struggle with consistency and follow-through.</li>
              <li>• You&apos;re transitioning into a new life chapter and want clarity.</li>
              <li>• You want to build habits that support mental, emotional, and spiritual wellbeing.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#2F1500]">
              What sessions can look like
            </h2>
            <ul className="space-y-2 text-sm text-[#7A4A1A]">
              <li>• Clarifying what &quot;aligned living&quot; means for you personally.</li>
              <li>• Gentle accountability around goals, routines, and boundaries.</li>
              <li>• Tools to work with resistance, procrastination, and self-doubt.</li>
              <li>• Integrating reflection, mindfulness, and values-based choices.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-[#FF9644]/14 via-[#FFCE99]/20 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            <div>
              <h2 className="text-xl font-semibold text-[#2F1500]">
                Unsure whether you need therapy or coaching?
              </h2>
              <p className="mt-2 text-sm text-[#7A4A1A]">
                Many people are somewhere in between. Our self-assessment helps
                you notice what kind of support—healing, growth, or both—would
                be most helpful right now.
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
                Book a Clarity Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

