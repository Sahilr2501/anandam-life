import Link from "next/link";

const TOOLS = [
  {
    title: "Who Am I?",
    subtitle: "Personality Quiz",
    desc: "Discover your core personality traits, strengths, and natural ways of thinking, feeling, and relating to others.",
    icon: "🧭",
    formUrl: "/tools/PersonalityQuiz", // Replace with Google Forms/Typeform URL
    insights: "Understand your unique personality blueprint and how it shapes your daily life.",
  },
  {
    title: "Are You Emotionally Exhausted?",
    subtitle: "Burnout & Stress Assessment",
    desc: "A gentle check-in to recognize signs of emotional exhaustion, burnout, and chronic stress before they spiral.",
    icon: "💭",
    formUrl: "/tools/Burnout&StressQuiz", // Replace with Google Forms/Typeform URL
    insights: "Identify early warning signs and learn practical ways to restore your emotional energy.",
  },
  {
    title: "Relationship Pattern Checker",
    subtitle: "Connection & Attachment Style",
    desc: "Explore your relationship patterns, attachment style, and how you show up in romantic and close friendships.",
    icon: "💕",
    formUrl: "/tools/RelationshipPatternChecker", // Replace with Google Forms/Typeform URL
    insights: "Understand your relationship blueprint and discover healthier ways to connect.",
  },
  {
    title: "Career Fit Explorer",
    subtitle: "Purpose & Alignment Assessment",
    desc: "Clarify what work environments, roles, and values align with your strengths, interests, and sense of purpose.",
    icon: "🎯",
    formUrl: "/tools/CareerFitExplorerQuiz", // Replace with Google Forms/Typeform URL
    insights: "Find clarity on career direction and work that feels meaningful to you.",
  },
  {
    title: "Mood Tracker Calendar",
    subtitle: "Emotional Patterns & Triggers",
    desc: "Track your daily moods, emotional patterns, and triggers over time to build self-awareness and notice trends.",
    icon: "📅",
    formUrl: "/tools/MoodTrackerCalendar", // Replace with Google Forms/Typeform URL
    insights: "Spot patterns in your emotional landscape and identify what supports or drains you.",
  },
  {
    title: "Self-Esteem Mirror",
    subtitle: "Self-Worth & Inner Voice Assessment",
    desc: "Reflect on your relationship with yourself, inner critic, and self-compassion practices.",
    icon: "🪞",
    formUrl: "/tools/SelfEsteemMirror", // Replace with Google Forms/Typeform URL
    insights: "Understand your inner dialogue and build a kinder relationship with yourself.",
  },
];

export default function ToolsPage() {
  return (
    <main className="bg-[#FFFDF1] text-[#562F00]">
      {/* Hero Section */}
      <section className="border-b border-[#FFCE99]/30 bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
            Self-Discovery Tools
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#2F1500] sm:text-4xl">
            Free Tools to Understand Yourself Better
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[#7A4A1A] sm:text-base">
            Start gently, at your own pace. These interactive quizzes and tools
            are designed to help you reflect, without pressure or labels. Each
            tool offers personalized insights and small, actionable tips.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool, index) => (
            <article
              key={index}
              className="group flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#FFCE99]/40 hover:-translate-y-1 hover:shadow-md hover:ring-[#FF9644]/70 transition-all"
            >
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-3xl">{tool.icon}</span>
                  <div>
                    <h2 className="text-lg font-semibold text-[#2F1500]">
                      {tool.title}
                    </h2>
                    <p className="text-xs font-medium text-[#AA5A00]">
                      {tool.subtitle}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-[#7A4A1A] leading-relaxed">
                  {tool.desc}
                </p>
                <div className="mt-4 rounded-lg bg-[#FFF7EB] p-3 text-xs text-[#7A4A1A]">
                  <span className="font-semibold text-[#AA5A00]">✨ Insight:</span>{" "}
                  {tool.insights}
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <a
                  href={tool.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-5 py-2.5 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                >
                  Start Quiz →
                </a>
                <p className="text-[10px] text-center text-[#A06B3A]">
                  Takes 5-10 minutes · Free & confidential
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Results & CTA Section */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#FF9644]/14 via-[#FFCE99]/20 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-xl font-semibold text-[#2F1500]">
                What happens after you complete a tool?
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-[#7A4A1A]">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9644] mt-0.5">✓</span>
                  <span>
                    <strong className="text-[#2F1500]">Instant Results:</strong> Get
                    personalized insights and a summary of your responses
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9644] mt-0.5">✓</span>
                  <span>
                    <strong className="text-[#2F1500]">Actionable Tips:</strong> Small,
                    practical suggestions tailored to your results
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9644] mt-0.5">✓</span>
                  <span>
                    <strong className="text-[#2F1500]">Optional Next Steps:</strong> If
                    you want deeper support, we&apos;re here to help
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-[#FFCE99]/60">
                <p className="text-sm font-semibold text-[#2F1500] mb-2">
                  Ready to go deeper?
                </p>
                <p className="text-xs text-[#7A4A1A] mb-4">
                  If your results resonate or raise questions, consider booking
                  a free consultation to explore what personalized support might
                  look like for you.
                </p>
                <Link
                  href="/consultation"
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-5 py-2.5 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                >
                  Book a Free Consultation
                </Link>
              </div>
              <Link
                href="/services"
                className="text-center text-xs font-semibold text-[#AA5A00] hover:text-[#FF9644] transition-colors"
              >
                Explore our counseling services →
              </Link>
            </div>
          </div>
        </div>

        {/* Note about Forms */}
        <div className="mt-8 rounded-xl bg-[#FFF7EB] border border-[#FFCE99]/40 p-4 text-xs text-[#7A4A1A]">
          <p className="font-semibold text-[#AA5A00] mb-1">
            📝 Note for Administrators:
          </p>
          <p>
            Each tool currently links to a placeholder URL. To activate a tool,
            replace the <code className="bg-white/60 px-1 rounded">formUrl</code>{" "}
            value in the code with your Google Forms or Typeform link. Results
            can be viewed in your form dashboard, and you can set up automated
            email responses with insights and tips.
          </p>
        </div>
      </section>
    </main>
  );
}
