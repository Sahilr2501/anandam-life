import Link from "next/link";

export default function CorporateTrainingPage() {
  return (
    <main className="bg-[#FFFDF1] text-[#562F00]">
      <section className="border-b border-[#FFCE99]/30 bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
            Corporate Training
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#2F1500] sm:text-4xl">
            Corporate Training: Enhancing Productivity Through Mindful Leadership
          </h1>
          <div className="mt-4 text-xs text-[#7A4A1A]">
            <Link href="/services" className="text-[#AA5A00] hover:text-[#FF9644]">
              ← Back to all services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
        <div className="prose prose-[#7A4A1A] max-w-none space-y-6 text-[#7A4A1A] text-base leading-relaxed">
          <p>
            In today&apos;s fast-paced professional world, maintaining work-life
            balance, emotional intelligence, and leadership skills is essential for
            success. ANANDAM&apos;s Corporate Training programs are designed to
            empower employees, managers, and executives with skills that enhance
            workplace productivity, communication, and mental well-being.
          </p>
          <p>Our customized training covers:</p>
          <ul className="space-y-3 text-[#7A4A1A]">
            <li className="flex items-start gap-2">
              <span className="text-[#FF9644] mt-0.5">✔</span>
              <span><strong className="text-[#2F1500]">Stress & Anxiety Management</strong> – Learn techniques to stay calm and focused under pressure</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF9644] mt-0.5">✔</span>
              <span><strong className="text-[#2F1500]">Emotional Intelligence & Leadership</strong> – Cultivate self-awareness and effective team leadership</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF9644] mt-0.5">✔</span>
              <span><strong className="text-[#2F1500]">Work-Life Balance Strategies</strong> – Develop habits to enhance personal and professional fulfillment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF9644] mt-0.5">✔</span>
              <span><strong className="text-[#2F1500]">Conflict Resolution & Effective Communication</strong> – Improve relationships at work</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF9644] mt-0.5">✔</span>
              <span><strong className="text-[#2F1500]">Mindfulness & Productivity</strong> – Boost efficiency and job satisfaction</span>
            </li>
          </ul>
          <p>
            Our interactive training sessions help employees thrive in their
            roles, strengthen team dynamics, and create a positive work culture.
          </p>
          <p className="font-medium text-[#2F1500]">
            Invest in your team&apos;s well-being for long-term success!
          </p>
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-[#FF9644]/14 via-[#FFCE99]/20 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            <div>
              <h2 className="text-xl font-semibold text-[#2F1500]">
                Ready to invest in your team?
              </h2>
              <p className="mt-2 text-sm text-[#7A4A1A]">
                Discuss customized corporate programs.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-6 py-3 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                Request Corporate Training
              </Link>
              <Link
                href="/partner-with-us"
                className="text-center text-xs font-semibold text-[#AA5A00] hover:text-[#FF9644]"
              >
                Corporate Tie-ups →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
