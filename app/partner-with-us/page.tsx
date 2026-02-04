import Link from "next/link";

const CORPORATE_TIEUPS = [
  {
    title: "Employee Wellness Programs",
    desc: "Comprehensive mental health support for your workforce, including workshops, counseling access, and stress management programs.",
    benefits: [
      "Reduced burnout and absenteeism",
      "Improved employee retention",
      "Enhanced productivity and engagement",
      "Customized programs for your industry",
    ],
  },
  {
    title: "Leadership Development",
    desc: "Emotional intelligence training for managers and leaders to build psychologically safe, empathetic workplaces.",
    benefits: [
      "Better team communication",
      "Reduced workplace conflicts",
      "Stronger leadership skills",
      "Higher employee satisfaction",
    ],
  },
  {
    title: "Crisis Support & EAP",
    desc: "Employee Assistance Programs (EAP) providing confidential counseling and crisis intervention for your team.",
    benefits: [
      "24/7 crisis support hotline",
      "Confidential counseling sessions",
      "Workplace trauma support",
      "Return-to-work programs",
    ],
  },
];

const SCHOOL_COLLEGE_PROGRAMS = [
  {
    title: "Student Counseling Services",
    desc: "On-campus or virtual counseling support for students dealing with academic stress, anxiety, relationships, and life transitions.",
    benefits: [
      "Individual and group sessions",
      "Crisis intervention support",
      "Academic stress management",
      "Peer support programs",
    ],
  },
  {
    title: "Mental Health Workshops",
    desc: "Interactive workshops on topics like exam anxiety, time management, emotional regulation, and building resilience.",
    benefits: [
      "Evidence-based curriculum",
      "Age-appropriate content",
      "Interactive and engaging format",
      "Follow-up resources provided",
    ],
  },
  {
    title: "Faculty & Staff Support",
    desc: "Support programs for educators and staff to manage stress, prevent burnout, and build emotional resilience.",
    benefits: [
      "Educator-specific workshops",
      "Stress management tools",
      "Work-life balance strategies",
      "Peer support groups",
    ],
  },
  {
    title: "Parent Workshops",
    desc: "Sessions for parents on understanding adolescent mental health, communication strategies, and supporting their children.",
    benefits: [
      "Better parent-child communication",
      "Early intervention awareness",
      "Reduced stigma around mental health",
      "Community building",
    ],
  },
];

const RESEARCH_COLLABORATIONS = [
  {
    title: "Academic Research Partnerships",
    desc: "Collaborate with us on research studies exploring mental health interventions, therapeutic outcomes, and holistic approaches.",
    focus: [
      "Efficacy of integrative counseling approaches",
      "Cultural adaptation of therapeutic models",
      "Long-term mental health outcomes",
      "Preventive mental health strategies",
    ],
  },
  {
    title: "Clinical Trials & Studies",
    desc: "Participate in or sponsor research on new therapeutic techniques, digital mental health tools, and intervention programs.",
    focus: [
      "Evidence-based practice development",
      "Innovation in mental health care",
      "Data-driven program improvements",
      "Publication and knowledge sharing",
    ],
  },
  {
    title: "Community-Based Research",
    desc: "Joint research initiatives focusing on mental health in underserved communities, accessibility, and reducing stigma.",
    focus: [
      "Mental health equity research",
      "Community needs assessment",
      "Barriers to care studies",
      "Advocacy and policy research",
    ],
  },
];

const NGO_ADVOCACY = [
  {
    title: "Mental Health Awareness Campaigns",
    desc: "Collaborate on awareness campaigns, workshops, and community events to reduce stigma and increase access to mental health support.",
    activities: [
      "Community workshops and seminars",
      "Mental health awareness events",
      "Resource distribution",
      "Media campaigns",
    ],
  },
  {
    title: "Pro Bono Counseling Programs",
    desc: "Partner to provide free or subsidized counseling services to underserved populations and communities.",
    activities: [
      "Sliding scale fee structures",
      "Community counseling centers",
      "Mobile mental health units",
      "Volunteer therapist networks",
    ],
  },
  {
    title: "Training & Capacity Building",
    desc: "Train NGO staff, volunteers, and community health workers in basic mental health first aid and support skills.",
    activities: [
      "Mental health first aid training",
      "Crisis intervention workshops",
      "Peer support training",
      "Ongoing supervision and support",
    ],
  },
  {
    title: "Advocacy & Policy Work",
    desc: "Joint advocacy efforts to influence mental health policy, increase funding, and improve mental health infrastructure.",
    activities: [
      "Policy research and recommendations",
      "Stakeholder engagement",
      "Public awareness campaigns",
      "Legislative advocacy",
    ],
  },
];

export default function PartnerWithUsPage() {
  return (
    <main className="bg-[#FFFDF1] text-[#562F00]">
      {/* Hero Section */}
      <section className="border-b border-[#FFCE99]/30 bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
            Partner with Us
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#2F1500] sm:text-4xl">
            Workshops. Research. Healing Together.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[#7A4A1A] sm:text-base">
            We believe mental health support is stronger when we collaborate.
            Whether you&apos;re a corporation, educational institution,
            research organization, or NGO, let&apos;s work together to make mental
            wellness accessible, understood, and prioritized.
          </p>
        </div>
      </section>

      {/* Corporate Tie-ups */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#2F1500]">
            Corporate Tie-ups
          </h2>
          <p className="mt-2 text-sm text-[#7A4A1A] max-w-2xl">
            Build a mentally healthy workplace with programs tailored to your
            organization&apos;s needs. From one-time workshops to ongoing
            wellness initiatives, we partner with companies to support their
            employees&apos; emotional wellbeing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {CORPORATE_TIEUPS.map((program, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#FFCE99]/40 hover:-translate-y-1 hover:shadow-md hover:ring-[#FF9644]/70 transition-all"
            >
              <div>
                <h3 className="text-lg font-semibold text-[#2F1500] mb-3">
                  {program.title}
                </h3>
                <p className="text-sm text-[#7A4A1A] mb-4">{program.desc}</p>
                <div>
                  <p className="text-xs font-semibold text-[#2F1500] mb-2">
                    Key Benefits:
                  </p>
                  <ul className="space-y-1">
                    {program.benefits.map((benefit, bIndex) => (
                      <li
                        key={bIndex}
                        className="text-xs text-[#7A4A1A] flex items-start gap-2"
                      >
                        <span className="text-[#FF9644] mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-gradient-to-r from-[#FF9644]/12 via-[#FFCE99]/18 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            <div>
              <h3 className="text-xl font-semibold text-[#2F1500] mb-3">
                Why Partner with Anandam for Corporate Wellness?
              </h3>
              <ul className="space-y-2 text-sm text-[#7A4A1A]">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9644] mt-0.5">•</span>
                  <span>
                    <strong className="text-[#2F1500]">Customized Solutions:</strong>{" "}
                    Programs designed for your industry, team size, and specific
                    challenges
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9644] mt-0.5">•</span>
                  <span>
                    <strong className="text-[#2F1500]">Measurable Impact:</strong>{" "}
                    Regular assessments and reports on program effectiveness
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9644] mt-0.5">•</span>
                  <span>
                    <strong className="text-[#2F1500]">Flexible Formats:</strong>{" "}
                    In-person, virtual, or hybrid delivery options
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-6 py-3 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                Request Corporate Partnership
              </Link>
              <Link
                href="/services/CorporateTraining"
                className="text-center text-xs font-semibold text-[#AA5A00] hover:text-[#FF9644] transition-colors"
              >
                Learn more about Corporate Training →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schools & Colleges */}
      <section className="bg-[#FFF7EB] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-[#2F1500]">
              Schools & Colleges
            </h2>
            <p className="mt-2 text-sm text-[#7A4A1A] max-w-2xl">
              Support your students&apos; mental health and academic success
              with comprehensive counseling services, workshops, and training
              programs for your entire educational community.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {SCHOOL_COLLEGE_PROGRAMS.map((program, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#FFCE99]/40 hover:-translate-y-1 hover:shadow-md hover:ring-[#FF9644]/70 transition-all"
              >
                <div>
                  <h3 className="text-lg font-semibold text-[#2F1500] mb-3">
                    {program.title}
                  </h3>
                  <p className="text-sm text-[#7A4A1A] mb-4">{program.desc}</p>
                  <div>
                    <p className="text-xs font-semibold text-[#2F1500] mb-2">
                      What We Offer:
                    </p>
                    <ul className="space-y-1">
                      {program.benefits.map((benefit, bIndex) => (
                        <li
                          key={bIndex}
                          className="text-xs text-[#7A4A1A] flex items-start gap-2"
                        >
                          <span className="text-[#FF9644] mt-0.5">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#FFCE99]/40 sm:p-8">
            <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
              <div>
                <h3 className="text-xl font-semibold text-[#2F1500] mb-3">
                  Partnership Benefits for Educational Institutions
                </h3>
                <ul className="space-y-2 text-sm text-[#7A4A1A]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF9644] mt-0.5">•</span>
                    <span>
                      Improved student wellbeing and academic performance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF9644] mt-0.5">•</span>
                    <span>
                      Reduced dropout rates and behavioral issues
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF9644] mt-0.5">•</span>
                    <span>
                      Enhanced school reputation and parent satisfaction
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF9644] mt-0.5">•</span>
                    <span>
                      Support for faculty and staff mental health
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-6 py-3 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                >
                  Partner with Us
                </Link>
                <Link
                  href="/services/SchoolCounseling"
                  className="text-center text-xs font-semibold text-[#AA5A00] hover:text-[#FF9644] transition-colors"
                >
                  Explore School Counseling Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Collaborations */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#2F1500]">
            Research Collaborations
          </h2>
          <p className="mt-2 text-sm text-[#7A4A1A] max-w-2xl">
            Advance mental health knowledge and practice through collaborative
            research. We partner with universities, research institutions, and
            organizations to conduct studies that inform better mental health
            care.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {RESEARCH_COLLABORATIONS.map((collab, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#FFCE99]/40 hover:-translate-y-1 hover:shadow-md hover:ring-[#FF9644]/70 transition-all"
            >
              <div>
                <h3 className="text-lg font-semibold text-[#2F1500] mb-3">
                  {collab.title}
                </h3>
                <p className="text-sm text-[#7A4A1A] mb-4">{collab.desc}</p>
                <div>
                  <p className="text-xs font-semibold text-[#2F1500] mb-2">
                    Research Focus Areas:
                  </p>
                  <ul className="space-y-1">
                    {collab.focus.map((item, fIndex) => (
                      <li
                        key={fIndex}
                        className="text-xs text-[#7A4A1A] flex items-start gap-2"
                      >
                        <span className="text-[#FF9644] mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-gradient-to-r from-[#FF9644]/12 via-[#FFCE99]/18 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            <div>
              <h3 className="text-xl font-semibold text-[#2F1500] mb-3">
                Why Collaborate on Research?
              </h3>
              <p className="text-sm text-[#7A4A1A] mb-4">
                Research partnerships allow us to contribute to the broader
                mental health field while improving our own practice. We offer
                access to clinical data (anonymized), practitioner expertise,
                and real-world implementation insights.
              </p>
              <ul className="space-y-2 text-sm text-[#7A4A1A]">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9644] mt-0.5">•</span>
                  <span>
                    Ethical research practices with IRB approval
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9644] mt-0.5">•</span>
                  <span>
                    Co-authorship opportunities for academic partners
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9644] mt-0.5">•</span>
                  <span>
                    Knowledge translation and practical application focus
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-6 py-3 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                Discuss Research Collaboration
              </Link>
              <p className="text-xs text-[#7A4A1A] text-center">
                Email us at{" "}
                <a
                  href="mailto:research@anandamlife.com"
                  className="text-[#AA5A00] hover:text-[#FF9644] font-semibold"
                >
                  research@anandamlife.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NGO/Mental Health Advocacy */}
      <section className="bg-[#FFF7EB] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-[#2F1500]">
              NGO/Mental Health Advocacy
            </h2>
            <p className="mt-2 text-sm text-[#7A4A1A] max-w-2xl">
              Join forces with us to expand mental health access, reduce stigma,
              and advocate for better mental health policies. We partner with
              NGOs and advocacy organizations to create lasting change.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {NGO_ADVOCACY.map((program, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#FFCE99]/40 hover:-translate-y-1 hover:shadow-md hover:ring-[#FF9644]/70 transition-all"
              >
                <div>
                  <h3 className="text-lg font-semibold text-[#2F1500] mb-3">
                    {program.title}
                  </h3>
                  <p className="text-sm text-[#7A4A1A] mb-4">{program.desc}</p>
                  <div>
                    <p className="text-xs font-semibold text-[#2F1500] mb-2">
                      Partnership Activities:
                    </p>
                    <ul className="space-y-1">
                      {program.activities.map((activity, aIndex) => (
                        <li
                          key={aIndex}
                          className="text-xs text-[#7A4A1A] flex items-start gap-2"
                        >
                          <span className="text-[#FF9644] mt-0.5">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#FFCE99]/40 sm:p-8">
            <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
              <div>
                <h3 className="text-xl font-semibold text-[#2F1500] mb-3">
                  Our Commitment to Advocacy Partnerships
                </h3>
                <p className="text-sm text-[#7A4A1A] mb-4">
                  We believe mental health is a human right. Through
                  partnerships with NGOs and advocacy groups, we work to:
                </p>
                <ul className="space-y-2 text-sm text-[#7A4A1A]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF9644] mt-0.5">•</span>
                    <span>
                      Expand access to mental health services in underserved
                      communities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF9644] mt-0.5">•</span>
                    <span>
                      Reduce stigma through awareness campaigns and education
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF9644] mt-0.5">•</span>
                    <span>
                      Advocate for better mental health policies and funding
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF9644] mt-0.5">•</span>
                    <span>
                      Build capacity in communities to support mental wellness
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-6 py-3 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                >
                  Partner for Advocacy
                </Link>
                <p className="text-xs text-[#7A4A1A] text-center">
                  Let&apos;s work together to create systemic change
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Partnership CTA */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#FF9644]/14 via-[#FFCE99]/20 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#2F1500] mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-sm text-[#7A4A1A] mb-6">
              Whether you&apos;re interested in corporate wellness, educational
              programs, research collaboration, or advocacy work, we&apos;d love
              to explore how we can work together. Reach out to discuss
              partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-8 py-3 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                Get in Touch
              </Link>
              <a
                href="mailto:partnerships@anandamlife.com"
                className="inline-flex items-center justify-center rounded-full border border-[#FF9644]/60 bg-white px-8 py-3 text-sm font-semibold text-[#AA5A00] hover:bg-[#FFF4E2] transition-colors"
              >
                Email Partnerships Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
