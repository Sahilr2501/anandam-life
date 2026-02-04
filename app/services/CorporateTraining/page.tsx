import Link from "next/link";

export default function CorporateTrainingPage() {
  return (
    <main className="bg-[#FFFDF1] text-[#562F00]">
      <section className="border-b border-[#FFCE99]/30 bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
            Corporate Training & Programs
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#2F1500] sm:text-4xl">
            Emotionally Healthy Workplaces, One Conversation at a Time
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[#7A4A1A] sm:text-base">
            For organisations that want to go beyond check-the-box wellness,
            Anandam designs experiences that build psychological safety,
            emotional skills, and sustainable performance.
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
              This space is for your organisation if…
            </h2>
            <ul className="space-y-2 text-sm text-[#7A4A1A]">
              <li>• Teams are experiencing burnout, disengagement, or quiet quitting.</li>
              <li>• Leaders want to hold psychologically safe conversations but feel unsure how.</li>
              <li>• You&apos;ve tried one-off webinars that didn&apos;t create lasting change.</li>
              <li>• You want wellbeing woven into culture, not just policies.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#2F1500]">
              What programs can look like
            </h2>
            <ul className="space-y-2 text-sm text-[#7A4A1A]">
              <li>• Leadership labs on empathy, feedback, and emotional regulation.</li>
              <li>• Team workshops on burnout, boundaries, and everyday mental health.</li>
              <li>• Listening circles and safe spaces after organisational changes.</li>
              <li>• Long-term partnerships to embed emotional wellbeing into systems.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-[#FF9644]/14 via-[#FFCE99]/20 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            <div>
              <h2 className="text-xl font-semibold text-[#2F1500]">
                Unsure what kind of program your team needs?
              </h2>
              <p className="mt-2 text-sm text-[#7A4A1A]">
                Start by understanding how your people are actually feeling—beyond
                metrics and dashboards. Our self-assessment is a first, gentle
                step toward more honest conversations.
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
                Book a Corporate Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

