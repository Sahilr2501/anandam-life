import Link from "next/link";

export default function PersonalCounselingPage() {
  return (
    <main className="bg-[#FFFDF1] text-[#562F00]">
      <section className="border-b border-[#FFCE99]/30 bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
            Personal Counseling
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#2F1500] sm:text-4xl">
            A Safe Space for Your Inner World
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[#7A4A1A] sm:text-base">
            For the moments when your thoughts feel loud, your heart feels
            heavy, or life feels like it&apos;s moving faster than you can
            process—personal counseling offers a gentle, confidential space to
            pause and realign.
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
              <li>• You feel anxious, restless, or constantly &quot;on edge&quot;.</li>
              <li>• You&apos;re experiencing low mood, emptiness, or lack of motivation.</li>
              <li>• You&apos;re navigating grief, heartbreak, or major life changes.</li>
              <li>• You want to understand recurring patterns in your thoughts or reactions.</li>
              <li>• You&apos;re not in crisis, but you want deeper clarity and inner ease.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#2F1500]">
              What sessions can look like
            </h2>
            <ul className="space-y-2 text-sm text-[#7A4A1A]">
              <li>• Gentle, structured conversations guided by a trained therapist.</li>
              <li>• Exploration of emotions, beliefs, stories, and body signals.</li>
              <li>• Practical tools for grounding, boundary-setting, and self-care.</li>
              <li>• Integrating ancient wisdom practices (like reflection and stillness) with modern psychology.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-[#FF9644]/14 via-[#FFCE99]/20 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            <div>
              <h2 className="text-xl font-semibold text-[#2F1500]">
                Still not sure if this is the right space?
              </h2>
              <p className="mt-2 text-sm text-[#7A4A1A]">
                You don&apos;t have to label what you&apos;re going through to ask
                for support. Start by understanding where you are emotionally,
                and we&apos;ll help you choose the format that fits.
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
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

