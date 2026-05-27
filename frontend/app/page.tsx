'use client'

import Image from "next/image";
import Link from "next/link";
import { CommunityJoinForm } from "@/components/CommunityJoinForm";

export default function Home() {
  return (
    <main className="bg-[#FFFDF1] text-[#562F00]">
      {/* Hero Section - Refined spacing and visual flow */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:py-24 lg:px-8">
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

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/wellness-test"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-6 py-3 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
              >
                Take Free Wellness Test
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center rounded-full border border-[#FF9644]/60 bg-white/70 px-6 py-3 text-sm font-semibold text-[#AA5A00] hover:bg-[#FFCE99]/20 transition-colors duration-200"
              >
                Book a Free Consultation
              </Link>
            </div>

            <p className="text-xs text-[#A06B3A] pt-2">
              1:1 support · completely confidential · for individuals, couples,
              families & professionals
            </p>
          </div>

          <div className="relative ml-auto w-full max-w-md rounded-3xl bg-white/80 p-6 shadow-xl ring-1 ring-[#FFCE99]/50 backdrop-blur-sm">
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

      {/* Your Journey with ANANDAM - Simplified step indicators */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-[#2F1500]">
            Your Journey with ANANDAM
          </h2>
          <p className="mt-4 text-base text-[#7A4A1A]">
            Healing is not a one-time event. It&apos;s a journey of gentle
            self-discovery, consistent support, and deep inner transformation.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
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
              className="relative rounded-3xl bg-white p-8 shadow-sm ring-1 ring-[#FFCE99]/40 hover:shadow-md transition-all duration-200"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FF9644]/10 text-sm font-semibold text-[#AA5A00]">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-[#2F1500]">
                {step.title}
              </h3>
              <p className="mt-4 text-sm text-[#7A4A1A] leading-relaxed">{step.desc}</p>
              {index < 2 && (
                <div className="pointer-events-none absolute right-[-40px] top-1/2 hidden h-px w-10 -translate-y-1/2 bg-gradient-to-r from-[#FFCE99] to-[#FF9644] md:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* How Can We Help You Today? - Cleaner card grid */}
      <section className="bg-[#FFF7EB] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-[#2F1500]">
                How Can We Help You Today?
              </h2>
              <p className="mt-3 text-base text-[#7A4A1A] max-w-xl">
                Choose a space that resonates with where you are right now. We&apos;ll
                meet you there—with empathy and clarity.
              </p>
            </div>
          </div>

          <div className="mt-12">
  <div className="grid gap-8 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {[
      {
        title: "Individual Counseling",
        desc: "Anxiety, overthinking, burnout, low mood, or just feeling stuck.",
        href: "/services/PersonalCounseling",
        image: "/images/Individual Counseling.jpg",
      },
      {
        title: "Couple Therapy",
        desc: "Rebuild trust, deepen connection, or navigate conflict with care.",
        href: "/services/CoupleCounseling",
        image: "/images/Couple Counseling.jpg",
      },
      {
        title: "Career Guidance",
        desc: "Clarity for students & professionals on purpose, strengths & next steps.",
        href: "/services/CareerCounseling",
        image: "/images/Career Guidance.jpg",
      },
      {
        title: "Life Coaching",
        desc: "Move from surviving to thriving with aligned goals and accountability.",
        href: "/services/LifeCoaching",
        image: "/images/Life Coaching.jpg",
      },
      {
        title: "School / Parental Counseling",
        desc: "Support for children, teens & parents through changing emotional needs.",
        href: "/services/SchoolCounseling",
        image: "/images/Parental Counseling.jpg",
      },
      {
        title: "Corporate Programs",
        desc: "Workplace mental wellness, leadership labs, and emotional skills at work.",
        href: "/services/CorporateTraining",
        image: "/images/Corporate Programs.jpg",
      },
    ].map((item) => (
      <Link href={item.href} key={item.title}>
        <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100/80 hover:border-[#FFCE99] hover:-translate-y-2">
          
          {/* Image Section - Full width top */}
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#FFF7E8] to-[#FFE4C4]">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay gradient for better text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content Section */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-[#2F1500] mb-3 transition-colors duration-300 group-hover:text-[#AA5A00]">
              {item.title}
            </h3>

            <p className="text-sm text-[#7A4A1A] leading-relaxed line-clamp-2">
              {item.desc}
            </p>

            <div className="mt-5 flex items-center text-sm font-medium text-[#AA5A00] group-hover:gap-2 transition-all duration-300 gap-1">
              <span>Discover more</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Decorative accent line on hover */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF9644] to-[#FFCE99] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
      </Link>
    ))}
  </div>
</div>

        </div>
      </section>

      {/* Free Interactive Tools - Better card distinction */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
              NEW · FREE TO EXPLORE
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[#2F1500]">
              Free Interactive Tools
            </h2>
            <p className="mt-3 text-base text-[#7A4A1A] max-w-xl">
              Start gently, at your own pace. These tools are designed to help
              you reflect, without pressure or labels.
            </p>
          </div>

          <Link
            href="/tools"
            className="inline-flex items-center justify-center rounded-full border border-[#FF9644]/60 bg-white px-5 py-2.5 text-sm font-semibold text-[#AA5A00] hover:bg-[#FFF4E2] transition-colors duration-200"
          >
            Explore All Tools
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Personality Quiz",
              desc: "Understand your natural ways of thinking, feeling and relating.",
              href: "/tools/PersonalityQuiz",
            },
            {
              title: "Mood Journal",
              desc: "Track emotional patterns and triggers with simple daily check-ins.",
              href: "/tools/MoodTrackerCalendar",
            },
            {
              title: "Anxiety & Stress Level Test",
              desc: "A quick snapshot of how your mind and body are coping right now.",
              href: "/tools/Burnout&StressQuiz",
            },
            {
              title: "Relationship Compatibility Checker",
              desc: "Explore strengths & growth areas in your romantic or close relationships.",
              href: "/tools/RelationshipPatternChecker",
            },
          ].map((tool) => (
            <div
              key={tool.title}
              className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#FFCE99]/40 hover:shadow-md hover:ring-[#FF9644]/60 transition-all duration-200"
            >
              <div>
                <h3 className="text-lg font-semibold text-[#2F1500]">
                  {tool.title}
                </h3>
                <p className="mt-3 text-sm text-[#7A4A1A] leading-relaxed">{tool.desc}</p>
              </div>
              <Link href={tool.href} className="mt-5 inline-flex items-center text-sm font-semibold text-[#AA5A00] hover:text-[#FF9644] transition-colors">
                Start now →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Join Our Community - Streamlined two-column layout */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 rounded-3xl bg-gradient-to-br from-[#FF9644]/10 via-[#FFCE99]/15 to-[#FFFDF1] p-8 shadow-md lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
              JOIN THE ANANDAM CIRCLE
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[#2F1500]">
              Join Our Community
            </h2>
            <p className="mt-4 text-base text-[#7A4A1A] leading-relaxed">
              Receive gentle nudges, reflective prompts, mental health content,
              and updates on free circles, workshops, and resources.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-[#7A4A1A]">
              <li className="flex items-center gap-2">• Thoughtfully curated, not spammy.</li>
              <li className="flex items-center gap-2">• Crafted by therapists, not algorithms.</li>
              <li className="flex items-center gap-2">• You can opt out anytime—no questions asked.</li>
            </ul>
          </div>

          <CommunityJoinForm />
        </div>
      </section>
    </main>
  );
}