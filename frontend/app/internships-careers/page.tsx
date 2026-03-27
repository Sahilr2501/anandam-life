import Link from "next/link";

const INTERNSHIP_DETAILS = [
  {
    title: "Duration & Commitment",
    desc: "3-6 month internships with flexible hours (15-20 hours/week). Remote and hybrid options available.",
  },
  {
    title: "What You'll Learn",
    desc: "Hands-on experience in counseling practices, client communication, mental health assessments, and therapeutic techniques.",
  },
  {
    title: "Mentorship",
    desc: "Regular supervision sessions with experienced therapists, personalized feedback, and professional development guidance.",
  },
  {
    title: "Who Can Apply",
    desc: "Students pursuing psychology, counseling, social work, or related fields. Recent graduates and career changers welcome.",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya M.",
    role: "Psychology Graduate, 2024",
    quote: "My internship at Anandam transformed my understanding of holistic counseling. The mentorship was incredible, and I felt genuinely supported while learning. It gave me the confidence to pursue my counseling career.",
    highlight: "Transformed understanding",
  },
  {
    name: "Rahul K.",
    role: "Masters in Social Work, 2023",
    quote: "The hands-on experience with real clients (under supervision) was invaluable. I learned not just techniques, but also how to hold space with empathy and cultural sensitivity. Highly recommend!",
    highlight: "Invaluable hands-on experience",
  },
  {
    name: "Ananya S.",
    role: "Career Changer, 2024",
    quote: "Coming from a corporate background, I was nervous about transitioning into mental health. The team at Anandam made me feel welcome and helped me build foundational skills. Now I'm pursuing my counseling certification with confidence.",
    highlight: "Smooth career transition",
  },
];

const CURRENT_OPENINGS = [
  {
    title: "Counseling Intern",
    type: "Full-time Internship",
    duration: "6 months",
    location: "Remote / Hybrid",
    description: "Support our counseling team with client intake, assessments, and co-facilitation of group sessions.",
    requirements: ["Pursuing or completed degree in Psychology/Counseling", "Strong communication skills", "Empathetic and non-judgmental approach"],
  },
  {
    title: "Research & Content Intern",
    type: "Part-time Internship",
    duration: "3-4 months",
    location: "Remote",
    description: "Help develop mental health content, research best practices, and assist with blog posts and resources.",
    requirements: ["Background in Psychology/Social Work", "Strong writing skills", "Interest in mental health advocacy"],
  },
  {
    title: "Community Outreach Intern",
    type: "Part-time Internship",
    duration: "3-6 months",
    location: "Hybrid",
    description: "Support our community programs, workshops, and outreach initiatives. Great for those interested in program development.",
    requirements: ["Passion for mental health awareness", "Event planning experience preferred", "Comfortable with public speaking"],
  },
];

export default function InternshipsCareersPage() {
  return (
    <main className="bg-[#FFFDF1] text-[#562F00]">
      {/* Hero Section */}
      <section className="border-b border-[#FFCE99]/30 bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
            Internships & Careers
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#2F1500] sm:text-4xl">
            Grow with ANANDAM
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[#7A4A1A] sm:text-base">
            Join a team that believes in learning, growth, and making mental
            health support accessible. Whether you&apos;re a student, recent
            graduate, or career changer, we offer meaningful internship
            opportunities to build your skills in a supportive environment.
          </p>
        </div>
      </section>

      {/* Internships: Gain Practical Experience */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-[#2F1500] mb-6">
          Internships: Gain Practical Experience in Mental Health & Counseling
        </h2>
        <p className="text-[#7A4A1A] text-base leading-relaxed mb-6">
          Are you passionate about psychology, counseling, or mental wellness?
          ANANDAM&apos;s Internship Program provides hands-on experience for
          students and professionals looking to deepen their understanding of
          mental health counseling, coaching, and therapy techniques.
        </p>
        <p className="text-[#7A4A1A] text-base leading-relaxed mb-4">
          As an ANANDAM Intern, you will:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#7A4A1A] mb-8">
          <li>Gain exposure to real-life counseling scenarios</li>
          <li>Learn assessment tools and intervention techniques</li>
          <li>Work alongside experienced professionals</li>
          <li>Understand different therapeutic approaches</li>
          <li>Develop essential communication and counseling skills</li>
        </ul>
        <p className="text-[#7A4A1A] text-base leading-relaxed mb-4">
          Our structured internship is ideal for psychology students, aspiring
          counselors, and mental health advocates who want to apply theory to
          practice and build confidence in their skills.
        </p>
        <div className="rounded-2xl bg-[#FFF7EB] border border-[#FFCE99]/40 p-6 mt-8">
          <h3 className="text-lg font-semibold text-[#2F1500] mb-4">
            What We Expect from You
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-[#7A4A1A]">
            <li>A genuine interest in mental health and a willingness to learn</li>
            <li>Respect for client confidentiality and ethical guidelines</li>
            <li>Professional behavior and a commitment to punctuality</li>
            <li>Active participation in sessions, discussions, and feedback</li>
            <li>Openness to constructive criticism and a growth mindset</li>
          </ul>
        </div>
        <p className="text-[#2F1500] font-medium mt-6">
          Join our internship program and take the first step toward a fulfilling
          career in mental health.
        </p>
      </section>

      {/* Internship Program Details */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#2F1500]">
            Internship Program Details
          </h2>
          <p className="mt-2 text-sm text-[#7A4A1A] max-w-2xl">
            Our internship program is designed to provide real-world experience
            while supporting your professional growth in mental health and
            counseling.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {INTERNSHIP_DETAILS.map((detail, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#FFCE99]/40"
            >
              <h3 className="text-lg font-semibold text-[#2F1500]">
                {detail.title}
              </h3>
              <p className="mt-3 text-sm text-[#7A4A1A] leading-relaxed">
                {detail.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-gradient-to-r from-[#FF9644]/12 via-[#FFCE99]/18 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-[#2F1500] mb-4">
            What Makes Our Internship Different
          </h3>
          <ul className="space-y-3 text-sm text-[#7A4A1A]">
            <li className="flex items-start gap-2">
              <span className="text-[#FF9644] mt-0.5">✓</span>
              <span>
                <strong className="text-[#2F1500]">Holistic Approach:</strong> Learn
                to integrate ancient wisdom practices with modern therapeutic
                techniques
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF9644] mt-0.5">✓</span>
              <span>
                <strong className="text-[#2F1500]">Cultural Sensitivity:</strong> Work
                with diverse clients and learn culturally responsive counseling
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF9644] mt-0.5">✓</span>
              <span>
                <strong className="text-[#2F1500]">Real Impact:</strong> Contribute to
                making mental health support more accessible and less stigmatized
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF9644] mt-0.5">✓</span>
              <span>
                <strong className="text-[#2F1500]">Flexible Learning:</strong> Balance
                your internship with studies or other commitments
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#FFF7EB] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-[#2F1500]">
              Testimonials from Past Interns
            </h2>
            <p className="mt-2 text-sm text-[#7A4A1A] max-w-2xl">
              Hear from those who have grown with us and are now building their
              careers in mental health.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#FFCE99]/40"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#AA5A00] mb-3">
                    {testimonial.highlight}
                  </p>
                  <p className="text-sm text-[#7A4A1A] leading-relaxed italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#FFCE99]/30">
                  <p className="text-sm font-semibold text-[#2F1500]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#7A4A1A]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#2F1500]">
            Current Openings
          </h2>
          <p className="mt-2 text-sm text-[#7A4A1A] max-w-2xl">
            We&apos;re always looking for passionate individuals who want to
            learn and grow in the mental health field. Check out our current
            internship opportunities below.
          </p>
        </div>

        <div className="space-y-6">
          {CURRENT_OPENINGS.map((opening, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#FFCE99]/40 hover:ring-[#FF9644]/70 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-[#2F1500]">
                      {opening.title}
                    </h3>
                    <span className="rounded-full bg-[#FFF7EB] px-3 py-1 text-xs font-semibold text-[#AA5A00]">
                      {opening.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-[#7A4A1A] mb-4">
                    <span className="flex items-center gap-1">
                      <span className="text-[#FF9644]">⏱</span> {opening.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-[#FF9644]">📍</span> {opening.location}
                    </span>
                  </div>
                  <p className="text-sm text-[#7A4A1A] mb-4">{opening.description}</p>
                  <div>
                    <p className="text-xs font-semibold text-[#2F1500] mb-2">
                      Requirements:
                    </p>
                    <ul className="space-y-1">
                      {opening.requirements.map((req, reqIndex) => (
                        <li
                          key={reqIndex}
                          className="text-xs text-[#7A4A1A] flex items-start gap-2"
                        >
                          <span className="text-[#FF9644] mt-0.5">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:ml-6">
                  <a
                    href="#apply"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-6 py-2.5 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all whitespace-nowrap"
                  >
                    Apply Now →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl bg-[#FFF7EB] border border-[#FFCE99]/40 p-4 text-xs text-[#7A4A1A]">
          <p className="font-semibold text-[#AA5A00] mb-1">
            💡 Don&apos;t see a role that fits?
          </p>
          <p>
            We&apos;re open to customizing internship experiences based on your
            interests and our needs. Feel free to reach out and discuss
            possibilities.
          </p>
        </div>
      </section>

      {/* How to Apply */}
      <section
        id="apply"
        className="bg-[#FFF7EB] py-12 border-t border-[#FFCE99]/30"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-[#2F1500]">
              How to Apply
            </h2>
            <p className="mt-2 text-sm text-[#7A4A1A] max-w-2xl">
              Ready to start your journey with Anandam? Follow these simple
              steps to apply for an internship.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Review Openings",
                desc: "Browse our current openings and find the role that aligns with your interests and goals.",
              },
              {
                step: "02",
                title: "Prepare Your Application",
                desc: "Gather your resume, cover letter, and any relevant academic transcripts or certificates.",
              },
              {
                step: "03",
                title: "Submit Application",
                desc: "Send your application via email or use our online form. Include why you're interested in mental health.",
              },
              {
                step: "04",
                title: "Interview & Selection",
                desc: "Shortlisted candidates will be invited for an interview. We'll discuss your goals and answer your questions.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#FFCE99]/40"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FF9644]/10 text-sm font-semibold text-[#AA5A00]">
                  {step.step}
                </div>
                <h3 className="text-base font-semibold text-[#2F1500] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#7A4A1A] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#FF9644]/14 via-[#FFCE99]/20 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
              <div>
                <h3 className="text-xl font-semibold text-[#2F1500] mb-3">
                  Ready to Apply?
                </h3>
                <p className="text-sm text-[#7A4A1A] mb-4">
                  Send your resume and a brief cover letter explaining your
                  interest in mental health and what you hope to learn during
                  your internship. We review applications on a rolling basis.
                </p>
                <div className="space-y-2 text-sm text-[#7A4A1A]">
                  <p>
                    <strong className="text-[#2F1500]">Email:</strong>{" "}
                    <a
                      href="mailto:careers@anandamlife.com"
                      className="text-[#AA5A00] hover:text-[#FF9644] underline"
                    >
                      careers@anandamlife.com
                    </a>
                  </p>
                  <p>
                    <strong className="text-[#2F1500]">Subject Line:</strong>{" "}
                    Internship Application - [Your Name] - [Position Title]
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:careers@anandamlife.com?subject=Internship Application"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-6 py-3 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                >
                  Send Application Email
                </a>
                <Link
                  href="/contact"
                  className="text-center text-xs font-semibold text-[#AA5A00] hover:text-[#FF9644] transition-colors"
                >
                  Or contact us with questions →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contract / Paid Research */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#FFCE99]/40 sm:p-8">
          <h2 className="text-2xl font-semibold text-[#2F1500] mb-4">
            Contract / Paid Research: Collaborate With ANANDAM for In-Depth Insights
          </h2>
          <p className="text-[#7A4A1A] text-base leading-relaxed mb-6">
            At ANANDAM, we actively engage in psychological research, mental health
            studies, and counseling innovations. If you&apos;re a researcher,
            institution, or professional looking to collaborate, we offer:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#7A4A1A] mb-6">
            <li><strong className="text-[#2F1500]">Paid Research & Consultancy</strong> – Partner with us for in-depth studies on psychology, counseling, and mental health trends.</li>
            <li><strong className="text-[#2F1500]">Workshops & Expert Talks</strong> – Conduct training sessions and discussions with our expert counselors.</li>
            <li><strong className="text-[#2F1500]">Customized Mental Health Reports</strong> – Gain insights into emotional wellness, stress management, and workplace well-being.</li>
          </ul>
          <p className="text-[#7A4A1A] text-base leading-relaxed mb-4">
            For inquiries about research projects, consulting, or collaboration
            opportunities, feel free to reach out.
          </p>
          <p className="font-medium text-[#2F1500] mb-4">
            Let&apos;s work together to make mental health knowledge accessible and impactful.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-6 py-3 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            Get in Touch for Research Collaboration
          </Link>
        </div>
      </section>
    </main>
  );
}
