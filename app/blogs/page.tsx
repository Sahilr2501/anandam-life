import Link from "next/link";

const ARTICLES = [
  {
    title: "How to Identify Burnout?",
    category: "Mental Wellness",
    readTime: "5 min read",
    desc: "It's more than just feeling tired. Learn to notice the emotional, mental, and physical signs before they spiral.",
    date: "Jan 15, 2025",
  },
  {
    title: "High-Functioning Anxiety: The Invisible Load",
    category: "Anxiety & Stress",
    readTime: "7 min read",
    desc: "On the outside, you seem fine. Inside, your mind never stops. Here's what that really feels like.",
    date: "Jan 8, 2025",
  },
  {
    title: "When Relationships Feel Draining",
    category: "Relationships",
    readTime: "6 min read",
    desc: "Why some bonds exhaust you—and how to set gentle but firm emotional boundaries.",
    date: "Dec 28, 2024",
  },
  {
    title: "The Art of Saying No Without Guilt",
    category: "Self-Care",
    readTime: "4 min read",
    desc: "Boundaries aren't walls—they're gates. Learn to protect your energy while staying connected.",
    date: "Dec 20, 2024",
  },
  {
    title: "Understanding Your Attachment Style",
    category: "Relationships",
    readTime: "8 min read",
    desc: "How your early relationships shape your adult connections—and what you can do about it.",
    date: "Dec 12, 2024",
  },
  {
    title: "Navigating Grief During the Holidays",
    category: "Grief & Loss",
    readTime: "5 min read",
    desc: "When celebrations feel heavy, here's how to honor your feelings and find moments of peace.",
    date: "Dec 5, 2024",
  },
];

const EXPERT_VIDEOS = [
  {
    title: "Understanding Anxiety: A Therapist's Perspective",
    duration: "12:30",
    category: "Anxiety & Stress",
    desc: "Dr. Jani explains the difference between normal worry and anxiety, and shares practical grounding techniques.",
  },
  {
    title: "Building Emotional Resilience",
    duration: "15:45",
    category: "Self-Development",
    desc: "Learn how to bounce back from setbacks and build inner strength through daily practices.",
  },
  {
    title: "Communication Skills for Couples",
    duration: "18:20",
    category: "Relationships",
    desc: "Practical techniques to express needs, listen deeply, and resolve conflicts with compassion.",
  },
  {
    title: "Parenting with Emotional Intelligence",
    duration: "14:10",
    category: "Parenting",
    desc: "How to respond to your child's emotions while managing your own—without losing your cool.",
  },
];

const DOWNLOADABLE_PDFS = [
  {
    title: "Daily Mood Tracker",
    type: "Worksheet",
    pages: "2 pages",
    desc: "A simple template to track your emotional patterns, triggers, and what helps you feel better.",
  },
  {
    title: "Boundary-Setting Guide",
    type: "Guide",
    pages: "5 pages",
    desc: "Step-by-step framework for setting healthy boundaries in relationships, work, and family.",
  },
  {
    title: "Anxiety Coping Strategies",
    type: "Resource",
    pages: "3 pages",
    desc: "Quick-reference guide with grounding techniques, breathing exercises, and thought reframing tools.",
  },
  {
    title: "Self-Compassion Journal Prompts",
    type: "Journal",
    pages: "4 pages",
    desc: "Reflective questions to build a kinder relationship with yourself and quiet your inner critic.",
  },
  {
    title: "Career Clarity Workbook",
    type: "Workbook",
    pages: "8 pages",
    desc: "Exercises to explore your values, strengths, and what work truly means to you.",
  },
];

const GUIDED_MEDITATIONS = [
  {
    title: "5-Minute Morning Grounding",
    duration: "5 min",
    focus: "Anxiety & Overwhelm",
    desc: "Start your day with presence. A gentle practice to anchor yourself before the day begins.",
  },
  {
    title: "Body Scan for Stress Relief",
    duration: "10 min",
    focus: "Physical Tension",
    desc: "Release stored tension and reconnect with your body through mindful awareness.",
  },
  {
    title: "Loving-Kindness Meditation",
    duration: "12 min",
    focus: "Self-Compassion",
    desc: "Cultivate warmth and kindness toward yourself and others, even when it's hard.",
  },
  {
    title: "Sleep Meditation for Restless Minds",
    duration: "15 min",
    focus: "Sleep & Rest",
    desc: "Quiet racing thoughts and prepare your mind and body for deep, restorative sleep.",
  },
  {
    title: "Grief & Loss: Holding Space",
    duration: "8 min",
    focus: "Grief Processing",
    desc: "A gentle practice to honor your feelings of loss without trying to fix or rush them.",
  },
];

const SHORT_STORIES = [
  {
    title: "The River and the Rock",
    category: "Resilience",
    readTime: "2 min read",
    desc: "A simple story about how water shapes stone—and what that teaches us about persistence and gentleness.",
  },
  {
    title: "The Two Wolves",
    category: "Self-Awareness",
    readTime: "1 min read",
    desc: "An ancient tale about the inner battle we all face, and which wolf we choose to feed.",
  },
  {
    title: "The Gardener's Lesson",
    category: "Growth",
    readTime: "3 min read",
    desc: "Why forcing growth doesn't work—and how patience, care, and timing create lasting change.",
  },
  {
    title: "The Mirror and the Window",
    category: "Relationships",
    readTime: "2 min read",
    desc: "When we look at others, are we seeing them clearly, or seeing ourselves reflected back?",
  },
];

export default function BlogsPage() {
  return (
    <main className="bg-[#FFFDF1] text-[#562F00]">
      {/* Hero Section */}
      <section className="border-b border-[#FFCE99]/30 bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
            Insights & Resources
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#2F1500] sm:text-4xl">
            Mental Health Resources That Empower
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[#7A4A1A] sm:text-base">
            Explore articles, videos, worksheets, meditations, and stories
            designed to support your mental wellness journey. All resources are
            created by our team or carefully curated for their practical value.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-[#2F1500]">Articles</h2>
            <p className="mt-2 text-sm text-[#7A4A1A] max-w-2xl">
              Evidence-based articles on mental health, relationships, self-care,
              and emotional wellness.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article, index) => (
            <article
              key={index}
              className="flex flex-col justify-between rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[#FFCE99]/40 hover:-translate-y-1 hover:shadow-md hover:ring-[#FF9644]/70 transition-all"
            >
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-[#FFF7EB] px-3 py-1 text-xs font-semibold text-[#AA5A00]">
                    {article.category}
                  </span>
                  <span className="text-xs text-[#A06B3A]">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#2F1500]">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm text-[#7A4A1A]">{article.desc}</p>
                <p className="mt-3 text-xs text-[#A06B3A]">{article.date}</p>
              </div>
              <Link
                href={`/blogs/article/${index + 1}`}
                className="mt-4 text-xs font-semibold text-[#AA5A00] hover:text-[#FF9644]"
              >
                Read full article →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Expert Videos Section */}
      <section className="bg-[#FFF7EB] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-[#2F1500]">
              Expert Videos
            </h2>
            <p className="mt-2 text-sm text-[#7A4A1A] max-w-2xl">
              Watch our therapists share insights, techniques, and practical
              guidance on mental health topics.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {EXPERT_VIDEOS.map((video, index) => (
              <div
                key={index}
                className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#FFCE99]/40 hover:ring-[#FF9644]/70 transition-all"
              >
                <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#FF9644]/20 to-[#FFCE99]/30 mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-2 text-4xl">▶</div>
                    <p className="text-xs font-semibold text-[#AA5A00]">
                      {video.duration}
                    </p>
                  </div>
                </div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-[#FFF7EB] px-3 py-1 text-xs font-semibold text-[#AA5A00]">
                    {video.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#2F1500] mb-2">
                  {video.title}
                </h3>
                <p className="text-sm text-[#7A4A1A] mb-4">{video.desc}</p>
                <a
                  href="#"
                  className="text-xs font-semibold text-[#AA5A00] hover:text-[#FF9644]"
                >
                  Watch video →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable PDFs Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#2F1500]">
            Downloadable PDFs
          </h2>
          <p className="mt-2 text-sm text-[#7A4A1A] max-w-2xl">
            Practical worksheets, guides, and workbooks you can download and use
            at your own pace.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DOWNLOADABLE_PDFS.map((pdf, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[#FFCE99]/40 hover:-translate-y-1 hover:shadow-md hover:ring-[#FF9644]/70 transition-all"
            >
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-2xl">📄</span>
                  <span className="rounded-full bg-[#FFF7EB] px-3 py-1 text-xs font-semibold text-[#AA5A00]">
                    {pdf.type}
                  </span>
                  <span className="text-xs text-[#A06B3A]">{pdf.pages}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#2F1500]">
                  {pdf.title}
                </h3>
                <p className="mt-3 text-sm text-[#7A4A1A]">{pdf.desc}</p>
              </div>
              <a
                href="#"
                className="mt-4 inline-flex items-center justify-center rounded-full border border-[#FF9644]/60 bg-white px-4 py-2 text-xs font-semibold text-[#AA5A00] hover:bg-[#FFF4E2] transition-colors"
              >
                Download PDF →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Guided Meditations Section */}
      <section className="bg-[#FFF7EB] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-[#2F1500]">
              Guided Meditations
            </h2>
            <p className="mt-2 text-sm text-[#7A4A1A] max-w-2xl">
              Audio-guided practices to help you ground, rest, process emotions,
              and find moments of peace.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {GUIDED_MEDITATIONS.map((meditation, index) => (
              <div
                key={index}
                className="flex flex-col rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[#FFCE99]/40 hover:-translate-y-1 hover:shadow-md hover:ring-[#FF9644]/70 transition-all"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9644]/20 to-[#FFCE99]/30">
                    <span className="text-2xl">🧘</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#AA5A00]">
                      {meditation.duration}
                    </span>
                    <p className="text-xs text-[#7A4A1A]">{meditation.focus}</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#2F1500] mb-2">
                  {meditation.title}
                </h3>
                <p className="text-sm text-[#7A4A1A] mb-4">{meditation.desc}</p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-4 py-2 text-xs font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                >
                  Play Meditation →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Short Stories & Analogies Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#2F1500]">
            Short Stories & Analogies
          </h2>
          <p className="mt-2 text-sm text-[#7A4A1A] max-w-2xl">
            Simple stories and metaphors that help complex emotional concepts
            feel more accessible and relatable.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {SHORT_STORIES.map((story, index) => (
            <article
              key={index}
              className="flex flex-col justify-between rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[#FFCE99]/40 hover:-translate-y-1 hover:shadow-md hover:ring-[#FF9644]/70 transition-all"
            >
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-[#FFF7EB] px-3 py-1 text-xs font-semibold text-[#AA5A00]">
                    {story.category}
                  </span>
                  <span className="text-xs text-[#A06B3A]">
                    {story.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#2F1500]">
                  {story.title}
                </h3>
                <p className="mt-3 text-sm text-[#7A4A1A]">{story.desc}</p>
              </div>
              <Link
                href={`/blogs/story/${index + 1}`}
                className="mt-4 text-xs font-semibold text-[#AA5A00] hover:text-[#FF9644]"
              >
                Read story →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#FF9644]/14 via-[#FFCE99]/20 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            <div>
              <h2 className="text-xl font-semibold text-[#2F1500] mb-3">
                Want More Personalized Support?
              </h2>
              <p className="text-sm text-[#7A4A1A]">
                While these resources are helpful, sometimes you need one-on-one
                guidance tailored to your unique situation. Our counselors are
                here to support you on your journey.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-6 py-3 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                Book a Free Consultation
              </Link>
              <Link
                href="/services"
                className="text-center text-xs font-semibold text-[#AA5A00] hover:text-[#FF9644] transition-colors"
              >
                Explore our services →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
