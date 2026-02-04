import Link from "next/link";

export default function FamilyCounselingPage() {
  return (
    <main className="bg-[#FFFDF1] text-[#562F00]">
      <section className="border-b border-[#FFCE99]/30 bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
            Family Counseling
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#2F1500] sm:text-4xl">
            Healing Patterns at Home
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[#7A4A1A] sm:text-base">
            Families carry stories, loyalties, and unspoken expectations across
            generations. Family counseling creates a grounded space to name what
            is happening and move toward healthier ways of relating.
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
              <li>• Home feels tense, distant, or full of unspoken conflict.</li>
              <li>• The same misunderstandings repeat across parent–child or sibling dynamics.</li>
              <li>• Major life changes (loss, illness, moves, separation) have shifted the family balance.</li>
              <li>• You want to build a more emotionally safe and respectful family culture.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#2F1500]">
              What sessions can look like
            </h2>
            <ul className="space-y-2 text-sm text-[#7A4A1A]">
              <li>• Structured conversations guided by a neutral facilitator.</li>
              <li>• Helping each member feel heard without blame or shaming.</li>
              <li>• Naming unhelpful patterns and co-creating new agreements.</li>
              <li>• Gentle practices to build trust, respect, and emotional safety at home.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-[#FF9644]/14 via-[#FFCE99]/20 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            <div>
              <h2 className="text-xl font-semibold text-[#2F1500]">
                Unsure where to begin with your family story?
              </h2>
              <p className="mt-2 text-sm text-[#7A4A1A]">
                Start by checking in with yourself. Our self-assessment helps
                you notice what feels heavy, what feels hopeful, and what you
                may want to bring into a shared conversation.
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
                Book a Family Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

