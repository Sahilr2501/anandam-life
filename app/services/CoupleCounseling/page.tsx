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
            Couple Counseling: Strengthening Bonds, Building Understanding
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
            In today&apos;s fast-paced, digital world, relationships often face
            challenges that can feel overwhelming. As technology brings us
            closer, the dynamics of communication, expectations, and emotional
            connection in relationships are constantly evolving. At ANANDAM, we
            recognize the impact these changes can have, and we are here to
            support you through those challenges with a deeper understanding and
            care for your relationship.
          </p>
          <p>
            Couples sometimes find themselves questioning their compatibility,
            wondering whether the bond they once shared is still strong or if the
            distance between them has grown too wide. At ANANDAM, we offer a
            safe, non-judgmental space where couples can explore the issues
            affecting their relationship, without the fear of being misunderstood.
          </p>
          <p>
            We know that even the strongest relationships can face moments of
            doubt. It&apos;s common for partners to feel disconnected or unsure,
            especially when:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#7A4A1A]">
            <li>&quot;We&apos;ve been together for years, but now it feels like we don&apos;t see eye-to-eye on anything.&quot;</li>
            <li>&quot;I love him/her, but it seems like our trust has faded over time.&quot;</li>
            <li>&quot;Despite everything we&apos;ve been through, I feel like my expectations aren&apos;t being met.&quot;</li>
          </ul>
          <p>
            These are normal feelings, and it&apos;s okay to admit that things
            aren&apos;t always as perfect as they once seemed. Relationships
            evolve, and it&apos;s natural for couples to face moments of
            uncertainty. The key is recognizing that these moments can be
            opportunities to strengthen your bond.
          </p>
          <p>
            ANANDAM offers compassionate support that helps you and your partner
            better understand each other&apos;s needs, rebuild trust, and
            reconnect. Through counseling, we guide you in navigating the tough
            conversations, while fostering mutual respect, patience, and empathy.
            Our approach isn&apos;t just about solving problems, but about
            teaching coping skills that promote lasting harmony and understanding.
          </p>
          <p>
            Whether you&apos;re struggling with communication, trust issues, or
            simply the stress of daily life affecting your relationship, we are
            here to help you rediscover the connection that brought you together.
            We believe in the power of partnerships and provide guidance on how
            to nurture and protect what you share.
          </p>
          <p className="font-medium text-[#2F1500]">
            ANANDAM is here to walk with you, supporting both you and your
            partner to explore and strengthen your emotional bonds. Together,
            we&apos;ll help you rediscover the value in your relationship and
            find a new path forward—one built on mutual respect, understanding,
            and renewed trust.
          </p>
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-[#FF9644]/14 via-[#FFCE99]/20 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            <div>
              <h2 className="text-xl font-semibold text-[#2F1500]">
                Ready to strengthen your relationship?
              </h2>
              <p className="mt-2 text-sm text-[#7A4A1A]">
                Book a consultation for you and your partner.
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
                Book a Couple Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
