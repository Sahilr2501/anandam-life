import Link from "next/link";

const PATHWAYS = [
  {
    id: "stuck-in-life",
    title: "I feel stuck in life",
    description:
      "Feeling directionless, unmotivated, or like you're going through the motions? This pathway helps you find clarity and purpose.",
    icon: "🧭",
    steps: [
      {
        step: 1,
        title: "Start with Self-Awareness",
        type: "Tool",
        items: [
          {
            name: "Who Am I? Personality Quiz",
            link: "/tools",
            desc: "Understand your core traits and what drives you",
          },
          {
            name: "Career Fit Explorer",
            link: "/tools",
            desc: "Clarify what work aligns with your values",
          },
        ],
      },
      {
        step: 2,
        title: "Explore Counseling Support",
        type: "Service",
        items: [
          {
            name: "Life Coaching",
            link: "/services/LifeCoaching",
            desc: "Move from surviving to intentionally living",
          },
          {
            name: "Personal Counseling",
            link: "/services/PersonalCounseling",
            desc: "Process what's holding you back",
          },
        ],
      },
      {
        step: 3,
        title: "Learn from Others",
        type: "Resources",
        items: [
          {
            name: "Blog: When Relationships Feel Draining",
            link: "/blogs",
            desc: "Understand patterns that keep you stuck",
          },
          {
            name: "Video: Building Emotional Resilience",
            link: "/blogs",
            desc: "Learn to bounce back and move forward",
          },
        ],
      },
      {
        step: 4,
        title: "Hear from Others",
        type: "Testimonial",
        items: [
          {
            name: "Anonymous Journey #1",
            quote:
              "I walked in feeling completely lost. Through coaching and counseling, I found clarity on what I actually wanted—not what others expected. Now I'm living with intention.",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    id: "strengthen-relationship",
    title: "I want to strengthen my relationship",
    description:
      "Looking to deepen connection, improve communication, or rebuild trust? This pathway guides you toward healthier relationships.",
    icon: "💕",
    steps: [
      {
        step: 1,
        title: "Understand Your Patterns",
        type: "Tool",
        items: [
          {
            name: "Relationship Pattern Checker",
            link: "/tools",
            desc: "Explore your attachment style and patterns",
          },
          {
            name: "Relationship Compatibility Checker",
            link: "/tools",
            desc: "Identify strengths and growth areas",
          },
        ],
      },
      {
        step: 2,
        title: "Get Professional Support",
        type: "Service",
        items: [
          {
            name: "Couple Counseling",
            link: "/services/CoupleCounseling",
            desc: "Rebuild connection with structured support",
          },
          {
            name: "Family Counseling",
            link: "/services/FamilyCounseling",
            desc: "Heal patterns affecting your relationships",
          },
        ],
      },
      {
        step: 3,
        title: "Learn Communication Skills",
        type: "Resources",
        items: [
          {
            name: "Video: Communication Skills for Couples",
            link: "/blogs",
            desc: "Practical techniques for deeper connection",
          },
          {
            name: "Story: The Mirror and the Window",
            link: "/blogs",
            desc: "A reflection on seeing others clearly",
          },
        ],
      },
      {
        step: 4,
        title: "Hear from Others",
        type: "Testimonial",
        items: [
          {
            name: "Anonymous Journey #2",
            quote:
              "We were on the verge of separating. Couple counseling gave us tools to listen, understand, and repair. Today, we're stronger than we've ever been.",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    id: "manage-anxiety-stress",
    title: "I'm struggling with anxiety and stress",
    description:
      "Feeling overwhelmed, anxious, or constantly on edge? This pathway offers tools and support to find calm and build resilience.",
    icon: "🌊",
    steps: [
      {
        step: 1,
        title: "Assess Your Current State",
        type: "Tool",
        items: [
          {
            name: "Are You Emotionally Exhausted?",
            link: "/tools",
            desc: "Check-in with your stress levels",
          },
          {
            name: "Anxiety & Stress Level Test",
            link: "/tools",
            desc: "Understand how your body and mind are coping",
          },
        ],
      },
      {
        step: 2,
        title: "Access Support",
        type: "Service",
        items: [
          {
            name: "Personal Counseling",
            link: "/services/PersonalCounseling",
            desc: "One-on-one support for anxiety and stress",
          },
          {
            name: "Virtual Counseling",
            link: "/services/VirtualCounseling",
            desc: "Support from the comfort of your space",
          },
        ],
      },
      {
        step: 3,
        title: "Practice Grounding",
        type: "Resources",
        items: [
          {
            name: "Meditation: 5-Minute Morning Grounding",
            link: "/blogs",
            desc: "Start your day with presence",
          },
          {
            name: "Blog: High-Functioning Anxiety",
            link: "/blogs",
            desc: "Understanding the invisible load",
          },
          {
            name: "PDF: Anxiety Coping Strategies",
            link: "/blogs",
            desc: "Quick-reference guide for difficult moments",
          },
        ],
      },
      {
        step: 4,
        title: "Hear from Others",
        type: "Testimonial",
        items: [
          {
            name: "Anonymous Journey #3",
            quote:
              "I thought anxiety was just how I was wired. Through counseling and the tools here, I learned to recognize triggers, use grounding techniques, and actually feel calm. It's possible.",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    id: "career-clarity",
    title: "I need career clarity",
    description:
      "Unsure about your career path, considering a change, or feeling unfulfilled at work? This pathway helps you find direction and alignment.",
    icon: "🎯",
    steps: [
      {
        step: 1,
        title: "Explore Your Interests",
        type: "Tool",
        items: [
          {
            name: "Career Fit Explorer",
            link: "/tools",
            desc: "Discover work that aligns with your values",
          },
          {
            name: "Who Am I? Personality Quiz",
            link: "/tools",
            desc: "Understand your strengths and natural inclinations",
          },
        ],
      },
      {
        step: 2,
        title: "Get Career Guidance",
        type: "Service",
        items: [
          {
            name: "Career Counseling",
            link: "/services/CareerCounseling",
            desc: "Clarity on direction, strengths, and next steps",
          },
          {
            name: "Life Coaching",
            link: "/services/LifeCoaching",
            desc: "Move from stuck to aligned with accountability",
          },
        ],
      },
      {
        step: 3,
        title: "Access Resources",
        type: "Resources",
        items: [
          {
            name: "PDF: Career Clarity Workbook",
            link: "/blogs",
            desc: "Exercises to explore values and purpose",
          },
          {
            name: "Blog: How to Identify Burnout?",
            link: "/blogs",
            desc: "Recognize when work isn't working for you",
          },
        ],
      },
      {
        step: 4,
        title: "Hear from Others",
        type: "Testimonial",
        items: [
          {
            name: "Anonymous Journey #4",
            quote:
              "I was successful on paper but empty inside. Career counseling helped me reconnect with what actually matters to me. I made a pivot, and now work feels meaningful.",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    id: "parenting-support",
    title: "I need parenting support",
    description:
      "Navigating the challenges of raising children? This pathway offers resources and support for parents and families.",
    icon: "👨‍👩‍👧",
    steps: [
      {
        step: 1,
        title: "Understand Your Patterns",
        type: "Tool",
        items: [
          {
            name: "Self-Esteem Mirror",
            link: "/tools",
            desc: "Reflect on your relationship with yourself",
          },
          {
            name: "Mood Tracker Calendar",
            link: "/tools",
            desc: "Notice patterns affecting your parenting",
          },
        ],
      },
      {
        step: 2,
        title: "Access Family Support",
        type: "Service",
        items: [
          {
            name: "Parental Counseling",
            link: "/services/ParentalCounseling",
            desc: "Support for parents navigating challenges",
          },
          {
            name: "Family Counseling",
            link: "/services/FamilyCounseling",
            desc: "Heal patterns and improve family dynamics",
          },
          {
            name: "School Counseling",
            link: "/services/SchoolCounseling",
            desc: "Support for children and teens",
          },
        ],
      },
      {
        step: 3,
        title: "Learn Parenting Skills",
        type: "Resources",
        items: [
          {
            name: "Video: Parenting with Emotional Intelligence",
            link: "/blogs",
            desc: "Respond to emotions while managing your own",
          },
          {
            name: "PDF: Boundary-Setting Guide",
            link: "/blogs",
            desc: "Set healthy boundaries with children",
          },
        ],
      },
      {
        step: 4,
        title: "Hear from Others",
        type: "Testimonial",
        items: [
          {
            name: "Anonymous Journey #5",
            quote:
              "Parenting felt overwhelming and I was constantly second-guessing myself. Parental counseling gave me tools to respond rather than react, and our home feels calmer now.",
            link: "/",
          },
        ],
      },
    ],
  },
];

export default function PathwaysPage() {
  return (
    <main className="bg-[#FFFDF1] text-[#562F00]">
      {/* Hero Section */}
      <section className="border-b border-[#FFCE99]/30 bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
            Guided Pathways
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#2F1500] sm:text-4xl">
            Your Journey from Problem to Solution
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[#7A4A1A] sm:text-base">
            Not sure where to start? We&apos;ve created guided pathways that
            take you from where you are to where you want to be. Each pathway
            combines tools, counseling support, resources, and real stories to
            help you move forward.
          </p>
        </div>
      </section>

      {/* Pathways List */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#2F1500]">
            Choose Your Pathway
          </h2>
          <p className="mt-2 text-sm text-[#7A4A1A] max-w-2xl">
            Select a pathway that matches where you are right now. Follow the
            steps at your own pace—there&apos;s no pressure, just support.
          </p>
        </div>

        <div className="space-y-12">
          {PATHWAYS.map((pathway) => (
            <div
              key={pathway.id}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#FFCE99]/40 sm:p-8"
            >
              {/* Pathway Header */}
              <div className="mb-8 flex items-start gap-4">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF9644]/20 to-[#FFCE99]/30 text-3xl">
                  {pathway.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#2F1500]">
                    {pathway.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#7A4A1A]">
                    {pathway.description}
                  </p>
                </div>
              </div>

              {/* Steps Flow */}
              <div className="space-y-8">
                {pathway.steps.map((step, stepIndex) => (
                  <div key={step.step} className="relative">
                    {/* Step Connector Line */}
                    {stepIndex < pathway.steps.length - 1 && (
                      <div className="absolute left-6 top-12 h-full w-0.5 bg-gradient-to-b from-[#FFCE99] to-[#FF9644]/30" />
                    )}

                    {/* Step Content */}
                    <div className="relative flex gap-6">
                      {/* Step Number */}
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9644] to-[#FFCE99] text-sm font-semibold text-white shadow-md">
                        {step.step}
                      </div>

                      {/* Step Details */}
                      <div className="flex-1 pb-8">
                        <div className="mb-3 flex items-center gap-2">
                          <h4 className="text-lg font-semibold text-[#2F1500]">
                            {step.title}
                          </h4>
                          <span className="rounded-full bg-[#FFF7EB] px-3 py-1 text-xs font-semibold text-[#AA5A00]">
                            {step.type}
                          </span>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          {step.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="rounded-xl bg-[#FFFDF1] p-4 ring-1 ring-[#FFCE99]/30 hover:ring-[#FF9644]/50 transition-all"
                            >
                              {"quote" in item ? (
                                <div>
                                  <p className="text-xs font-semibold text-[#AA5A00] mb-2">
                                    {item.name}
                                  </p>
                                  <p className="text-sm text-[#7A4A1A] italic leading-relaxed">
                                    &quot;{item.quote}&quot;
                                  </p>
                                </div>
                              ) : (
                                <div>
                                  <Link
                                    href={item.link}
                                    className="text-sm font-semibold text-[#2F1500] hover:text-[#FF9644] transition-colors"
                                  >
                                    {item.name} →
                                  </Link>
                                  <p className="mt-1 text-xs text-[#7A4A1A]">
                                    {item.desc}
                                  </p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pathway CTA */}
              <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#FF9644]/12 via-[#FFCE99]/18 to-[#FFFDF1] p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-[#2F1500] mb-2">
                      Ready to take the next step?
                    </h4>
                    <p className="text-sm text-[#7A4A1A]">
                      Start with any step that feels right for you. You can
                      always come back and explore more.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Link
                      href="/consultation"
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-6 py-3 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all whitespace-nowrap"
                    >
                      Book a Consultation
                    </Link>
                    <Link
                      href="/tools"
                      className="inline-flex items-center justify-center rounded-full border border-[#FF9644]/60 bg-white px-6 py-3 text-sm font-semibold text-[#AA5A00] hover:bg-[#FFF4E2] transition-colors whitespace-nowrap"
                    >
                      Explore Tools
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* General CTA */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#FF9644]/14 via-[#FFCE99]/20 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#2F1500] mb-4">
              Don&apos;t see your situation here?
            </h2>
            <p className="text-sm text-[#7A4A1A] mb-6">
              Every journey is unique. If you&apos;re dealing with something
              specific or need personalized guidance, we&apos;re here to help.
              Reach out for a free consultation to discuss what support might
              work best for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-8 py-3 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                Get Personalized Guidance
              </Link>
              <Link
                href="/wellness-test"
                className="inline-flex items-center justify-center rounded-full border border-[#FF9644]/60 bg-white px-8 py-3 text-sm font-semibold text-[#AA5A00] hover:bg-[#FFF4E2] transition-colors"
              >
                Take Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
