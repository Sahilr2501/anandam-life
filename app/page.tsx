import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#FFFDF1] text-[#562F00]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">


        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:py-24 lg:px-8">
          <div className="max-w-xl space-y-6">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#2F1500] sm:text-4xl lg:text-5xl">
              Personalized Mental Wellness
              <span className="block text-transparent bg-gradient-to-r from-[#FF9644] to-[#E87B1F] bg-clip-text">
                Rooted in Ancient Wisdom
              </span>
            </h1>
            <p className="text-base leading-relaxed text-[#7A4A1A] sm:text-lg">
              A gentle blend of evidence-based psychology and timeless
              philosophies, helping you slow down, reflect, and realign your
              life with who you truly are.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/wellness-test"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-6 py-3 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                Take Free Wellness Test
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center rounded-full border border-[#FF9644]/60 bg-white/70 px-6 py-3 text-sm font-semibold text-[#AA5A00] hover:bg-[#FFCE99]/20 transition-colors"
              >
                Book a Free Consultation
              </Link>
            </div>

            <p className="text-xs text-[#A06B3A] pt-2">
              1:1 support · completely confidential · for individuals, couples,
              families & professionals
            </p>
          </div>

          <div className="relative ml-auto w-full max-w-md rounded-3xl bg-white/80 p-6 shadow-xl ring-1 ring-[#FFCE99]/50 backdrop-blur">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-[#AA5A00]">
                A moment to pause.
              </p>
              <p className="text-sm text-[#7A4A1A]">
                Imagine a space where you are heard without judgment, guided
                without pressure, and supported with compassion. That&apos;s
                the journey we co-create at Anandam.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center text-xs text-[#7A4A1A]">
                <div className="rounded-2xl bg-[#FFF4E2] px-3 py-3">
                  <p className="font-semibold text-[#2F1500]">10+ yrs</p>
                  <p>Clinical & counseling experience</p>
                </div>
                <div className="rounded-2xl bg-[#FFF4E2] px-3 py-3">
                  <p className="font-semibold text-[#2F1500]">Holistic</p>
                  <p>Ancient wisdom + modern science</p>
                </div>
                <div className="rounded-2xl bg-[#FFF4E2] px-3 py-3">
                  <p className="font-semibold text-[#2F1500]">Personal</p>
                  <p>Plans crafted for you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Journey with ANANDAM */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-[#2F1500]">
            Your Journey with ANANDAM
          </h2>
          <p className="mt-3 text-sm text-[#7A4A1A]">
            Healing is not a one-time event. It&apos;s a journey of gentle
            self-discovery, consistent support, and deep inner transformation.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Self-Awareness",
              desc: "Begin by understanding your patterns, emotions, and inner stories with guided reflections and assessments.",
            },
            {
              title: "Support",
              desc: "Walk alongside a warm, non-judgmental therapist who holds space for your fears, hopes, and questions.",
            },
            {
              title: "Transformation",
              desc: "Integrate new habits, perspectives, and tools that help you live with more clarity, ease, and joy.",
            },
          ].map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#FFCE99]/40"
            >
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FF9644]/10 text-xs font-semibold text-[#AA5A00]">
                {index + 1}
              </div>
              <h3 className="text-base font-semibold text-[#2F1500]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-[#7A4A1A]">{step.desc}</p>
              {index < 2 && (
                <div className="pointer-events-none absolute right-[-40px] top-1/2 hidden h-px w-10 -translate-y-1/2 bg-gradient-to-r from-[#FFCE99] to-[#FF9644] md:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* How Can We Help You Today? */}
      <section className="bg-[#FFF7EB] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-[#2F1500]">
                How Can We Help You Today?
              </h2>
              <p className="mt-2 text-sm text-[#7A4A1A] max-w-xl">
                Choose a space that resonates with where you are right now. We&apos;ll
                meet you there—with empathy and clarity.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Individual Counseling",
                desc: "Anxiety, overthinking, burnout, low mood, or just feeling stuck.",
              },
              {
                title: "Couple Therapy",
                desc: "Rebuild trust, deepen connection, or navigate conflict with care.",
              },
              {
                title: "Career Guidance",
                desc: "Clarity for students & professionals on purpose, strengths & next steps.",
              },
              {
                title: "Life Coaching",
                desc: "Move from surviving to thriving with aligned goals and accountability.",
              },
              {
                title: "School / Parental Counseling",
                desc: "Support for children, teens & parents through changing emotional needs.",
              },
              {
                title: "Corporate Programs",
                desc: "Workplace mental wellness, leadership labs, and emotional skills at work.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex flex-col justify-between rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[#FFCE99]/40 hover:-translate-y-1 hover:shadow-md hover:ring-[#FF9644]/60 transition-all"
              >
                <div>
                  <h3 className="text-base font-semibold text-[#2F1500]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#7A4A1A]">{item.desc}</p>
                </div>
                <div className="mt-4 text-xs font-semibold text-[#AA5A00]">
                  <span className="inline-flex items-center gap-1">
                    Discover more
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Interactive Tools */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
              NEW · FREE TO EXPLORE
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-[#2F1500]">
              Free Interactive Tools
            </h2>
            <p className="mt-2 text-sm text-[#7A4A1A] max-w-xl">
              Start gently, at your own pace. These tools are designed to help
              you reflect, without pressure or labels.
            </p>
          </div>

          <Link
            href="/tools"
            className="inline-flex items-center justify-center rounded-full border border-[#FF9644]/60 bg-white px-5 py-2 text-xs font-semibold text-[#AA5A00] hover:bg-[#FFF4E2] transition-colors"
          >
            Explore All Tools
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Personality Quiz",
              desc: "Understand your natural ways of thinking, feeling and relating.",
            },
            {
              title: "Mood Journal",
              desc: "Track emotional patterns and triggers with simple daily check-ins.",
            },
            {
              title: "Anxiety & Stress Level Test",
              desc: "A quick snapshot of how your mind and body are coping right now.",
            },
            {
              title: "Relationship Compatibility Checker",
              desc: "Explore strengths & growth areas in your romantic or close relationships.",
            },
          ].map((tool) => (
            <div
              key={tool.title}
              className="flex flex-col justify-between rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[#FFCE99]/40 hover:ring-[#FF9644]/70 transition-all"
            >
              <div>
                <h3 className="text-sm font-semibold text-[#2F1500]">
                  {tool.title}
                </h3>
                <p className="mt-3 text-xs text-[#7A4A1A]">{tool.desc}</p>
              </div>
              <button className="mt-4 inline-flex items-center justify-start text-xs font-semibold text-[#AA5A00] hover:text-[#FF9644]">
                Start now →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Stories of Change */}
      <section className="bg-[#1D130D] py-16 text-[#FFF4E2]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Stories of Change</h2>
              <p className="mt-2 text-sm text-[#E6C9A5] max-w-xl">
                Real people. Real struggles. Real shifts. Faces blurred, names
                changed—experiences honored.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col rounded-3xl bg-[#2A1A12] p-5 ring-1 ring-white/5"
              >
                <div className="aspect-video w-full overflow-hidden rounded-2xl bg-[#0E0A08]">
                  {/* Placeholder for video thumbnail */}
                  <div className="flex h-full items-center justify-center text-xs text-[#C2A07D]">
                    Video testimonial {i} (coming soon)
                  </div>
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#E6C9A5]/80">
                  ANONYMOUS JOURNEY
                </p>
                <p className="mt-2 text-sm text-[#F5E4CC]">
                  &quot;I walked in with constant worry and sleepless nights. I
                  walked out with language for my emotions, tools for my mind,
                  and a kinder relationship with myself.&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Dr. Jani & the Team */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
          <div className="relative">
            <div className="h-64 w-full rounded-3xl bg-gradient-to-tr from-[#FF9644]/30 via-[#FFCE99]/40 to-[#FFFDF1] shadow-lg" />
            <div className="absolute -bottom-6 -right-4 w-40 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-[#FFCE99]/60">
              <p className="text-xs font-semibold text-[#2F1500]">
                Gentle. Grounded. Evidence-based.
              </p>
              <p className="mt-1 text-[11px] text-[#7A4A1A]">
                Each conversation is crafted to honor your pace, your story, and
                your inner wisdom.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
              YOUR GUIDES
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#2F1500]">
              Meet Dr. Jani & the Team
            </h2>
            <p className="mt-3 text-sm text-[#7A4A1A]">
              Rooted in clinical training, enriched by ancient philosophies, and
              held together with deep human warmth—our team at Anandam believes
              in meeting you exactly where you are.
            </p>
            <p className="mt-3 text-sm text-[#7A4A1A]">
              From high-achieving professionals to sensitive teenagers, from
              caregivers to corporate leaders, we support diverse journeys with
              humility, cultural sensitivity, and respect.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-[#7A4A1A]">
              <span className="rounded-full bg-[#FFF4E2] px-3 py-1">
                Ph.D. & clinical expertise
              </span>
              <span className="rounded-full bg-[#FFF4E2] px-3 py-1">
                Integrative & holistic lens
              </span>
              <span className="rounded-full bg-[#FFF4E2] px-3 py-1">
                Trauma-informed & compassionate
              </span>
            </div>

            <Link
              href="/about"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-6 py-3 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              Meet Your Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Insights (Blog) */}
      <section className="bg-[#FFF7EB] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-[#2F1500]">
                Featured Insights from ANANDAM
              </h2>
              <p className="mt-2 text-sm text-[#7A4A1A] max-w-xl">
                Short, real-world reflections to help you understand your mind,
                relationships, and everyday emotional health.
              </p>
            </div>

            <Link
              href="/blogs"
              className="inline-flex items-center justify-center rounded-full border border-[#FF9644]/60 bg-white px-5 py-2 text-xs font-semibold text-[#AA5A00] hover:bg-[#FFF4E2] transition-colors"
            >
              View all blogs
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "How to Identify Burnout?",
                desc: "It’s more than just feeling tired. Learn to notice the emotional, mental, and physical signs before they spiral.",
              },
              {
                title: "High-Functioning Anxiety: The Invisible Load",
                desc: "On the outside, you seem fine. Inside, your mind never stops. Here’s what that really feels like.",
              },
              {
                title: "When Relationships Feel Draining",
                desc: "Why some bonds exhaust you—and how to set gentle but firm emotional boundaries.",
              },
            ].map((post) => (
              <article
                key={post.title}
                className="flex flex-col justify-between rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[#FFCE99]/40 hover:-translate-y-1 hover:shadow-md hover:ring-[#FF9644]/70 transition-all"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#AA5A00]">
                    MENTAL WELLNESS
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-[#2F1500]">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#7A4A1A]">{post.desc}</p>
                </div>
                <Link
                  href="/blogs"
                  className="mt-4 text-xs font-semibold text-[#AA5A00] hover:text-[#FF9644]"
                >
                  Read full article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Community */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-3xl bg-gradient-to-r from-[#FF9644]/12 via-[#FFCE99]/18 to-[#FFFDF1] p-8 shadow-sm lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
              JOIN THE ANANDAM CIRCLE
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#2F1500]">
              Join Our Community
            </h2>
            <p className="mt-3 text-sm text-[#7A4A1A]">
              Receive gentle nudges, reflective prompts, mental health content,
              and updates on free circles, workshops, and resources.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#7A4A1A]">
              <li>• Thoughtfully curated, not spammy.</li>
              <li>• Crafted by therapists, not algorithms.</li>
              <li>• You can opt out anytime—no questions asked.</li>
            </ul>
          </div>

          <form className="space-y-4 rounded-2xl bg-white/80 p-6 shadow-md ring-1 ring-[#FFCE99]/60">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold text-[#2F1500]"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="mt-1 w-full rounded-xl border border-[#FFCE99]/70 bg-[#FFFDF1] px-3 py-2 text-sm text-[#2F1500] placeholder:text-[#C69A6C] focus:border-[#FF9644] focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-[#2F1500]"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full rounded-xl border border-[#FFCE99]/70 bg-[#FFFDF1] px-3 py-2 text-sm text-[#2F1500] placeholder:text-[#C69A6C] focus:border-[#FF9644] focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="interest"
                className="block text-xs font-semibold text-[#2F1500]"
              >
                What are you most curious about?
              </label>
              <select
                id="interest"
                className="mt-1 w-full rounded-xl border border-[#FFCE99]/70 bg-[#FFFDF1] px-3 py-2 text-sm text-[#2F1500] focus:border-[#FF9644] focus:outline-none"
              >
                <option>Mental health & self-awareness</option>
                <option>Relationships & emotional skills</option>
                <option>Career & purpose</option>
                <option>Parenting & family dynamics</option>
                <option>All of the above</option>
              </select>
            </div>
            <button
              type="button"
              className="w-full rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-4 py-2.5 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.01] transition-all"
            >
              Join the Community
            </button>
            <p className="text-[10px] text-[#A06B3A]">
              By joining, you agree to receive email updates from Anandam. We
              respect your time, your inbox, and your emotional space.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

