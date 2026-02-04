import Link from "next/link";

export default function SchoolCounselingPage() {
  return (
    <main className="bg-[#FFFDF1] text-[#562F00]">
      <section className="border-b border-[#FFCE99]/30 bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
            School Counseling
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#2F1500] sm:text-4xl">
            School Counseling: Nurturing Young Minds for a Bright Future
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
            At ANANDAM, we believe that a strong foundation in mental and
            emotional well-being is crucial for students to excel academically and
            personally. Our School Counseling services are designed to support
            students, parents, and educators in creating a balanced and
            stress-free learning environment.
          </p>
          <p>
            Growing academic pressure, social challenges, and personal
            uncertainties can impact a student&apos;s confidence and motivation. Our
            trained counselors help students:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#7A4A1A]">
            <li>Manage stress and exam anxiety</li>
            <li>Develop emotional resilience and coping skills</li>
            <li>Build healthy communication and social interactions</li>
            <li>Navigate peer pressure and bullying</li>
            <li>Explore career and educational pathways</li>
          </ul>
          <p>
            We also provide teacher and parent guidance to foster a nurturing
            atmosphere where children can thrive. By promoting mental well-being
            early on, we help young minds grow into confident, well-rounded
            individuals prepared for the future.
          </p>

          <div className="rounded-2xl bg-[#FFF7EB] border border-[#FFCE99]/40 p-6 mt-8">
            <h2 className="text-xl font-semibold text-[#2F1500] mb-4">
              School Psychology & Project Utkarsh
            </h2>
            <p>
              As part of our commitment to nurturing young minds, our School
              Psychology services provide emotional and academic guidance to
              students, while supporting parents and educators.
            </p>
            <p className="mt-4">
              Our flagship initiative, <strong className="text-[#2F1500]">Project Utkarsh</strong>,
              is an in-school mental wellness program focused on building
              emotional resilience, reducing academic stress, and improving
              overall student well-being. Through counseling, teacher workshops,
              and parental engagement, we create a supportive environment for
              children to thrive.
            </p>
          </div>

          <p className="font-medium text-[#2F1500]">
            Let&apos;s work together to create a supportive learning space for your
            students!
          </p>
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-[#FF9644]/14 via-[#FFCE99]/20 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            <div>
              <h2 className="text-xl font-semibold text-[#2F1500]">
                Interested in Project Utkarsh or school counseling?
              </h2>
              <p className="mt-2 text-sm text-[#7A4A1A]">
                Reach out for schools and institutions.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-6 py-3 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                Get in Touch
              </Link>
              <Link
                href="/partner-with-us"
                className="text-center text-xs font-semibold text-[#AA5A00] hover:text-[#FF9644]"
              >
                Schools & Colleges partnership →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
