import Link from "next/link";

export default function ConsultationPage() {
  return (
    <main className="bg-[#FFFDF1] text-[#562F00]">
      <section className="border-b border-[#FFCE99]/30 bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
            Free Consultation
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#2F1500] sm:text-4xl">
            Book a Gentle First Conversation
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[#7A4A1A] sm:text-base">
            This is a space to understand your needs, ask questions, and see if
            Anandam&apos;s way of working feels right for you—without pressure
            or obligation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#FFCE99]/50 space-y-4">
            <h2 className="text-lg font-semibold text-[#2F1500]">
              What this conversation can look like
            </h2>
            <ul className="space-y-2 text-sm text-[#7A4A1A]">
              <li>• 20–30 minutes over phone or video call</li>
              <li>• A brief sharing of what brings you here</li>
              <li>• Space to ask questions about therapy or coaching</li>
              <li>• Clarity on next steps, if and when you&apos;re ready</li>
            </ul>
            <p className="text-xs text-[#A06B3A]">
              This is not a crisis support line. If you are in immediate danger
              or experiencing a mental health emergency, please reach out to
              local emergency services or a trusted helpline.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#FFCE99]/50 space-y-4">
            <h2 className="text-lg font-semibold text-[#2F1500]">
              How to request a call
            </h2>
            <p className="text-sm text-[#7A4A1A]">
              You can reach us through the contact page with a short note about
              what you&apos;d like support with, and your preferred time slots.
            </p>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-6 py-3 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              Go to Contact Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

