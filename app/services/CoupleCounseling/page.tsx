import Link from "next/link";

export default function CoupleCounselingPage() {
  return (
    <main className="bg-[#FFFDF1] text-[#562F00]">
      <section className="border-b border-[#FFCE99]/30 bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
            Couple Counseling
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#2F1500] sm:text-4xl">
            Rebuilding Connection with Care
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[#7A4A1A] sm:text-base">
            When conversations turn into conflicts, silences feel heavy, or you
            both feel misunderstood, couple counseling offers a structured,
            safe space to listen, repair, and reimagine the relationship.
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
              <li>• You keep circling around the same arguments without resolution.</li>
              <li>• One or both of you feel unseen, unheard, or taken for granted.</li>
              <li>• Trust has been shaken and you&apos;re unsure how to rebuild it.</li>
              <li>• You are considering separation and want a calm, guided space to reflect.</li>
              <li>• You simply want to strengthen your bond and communication.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#2F1500]">
              What sessions can look like
            </h2>
            <ul className="space-y-2 text-sm text-[#7A4A1A]">
              <li>• Joint sessions focused on listening without interrupting or defending.</li>
              <li>• Understanding each partner&apos;s emotional history and triggers.</li>
              <li>• Practising new ways of expressing needs, boundaries, and affection.</li>
              <li>• Co-creating rituals and agreements that support a healthier relationship.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-[#FF9644]/14 via-[#FFCE99]/20 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            <div>
              <h2 className="text-xl font-semibold text-[#2F1500]">
                Not sure if you both are ready for therapy?
              </h2>
              <p className="mt-2 text-sm text-[#7A4A1A]">
                It&apos;s okay if one of you is more ready than the other. Start
                with a gentle self-assessment to understand what&apos;s feeling
                heavy and what you&apos;re hoping to change.
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
                Book a Couple Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

