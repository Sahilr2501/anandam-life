import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

interface DashboardSummaryResponse {
  stats: {
    totalQuizSubmissions: number;
    totalContactSubmissions: number;
    totalCommunitySubscribers: number;
    totalSubmissions: number;
  };
  recentSubmissions: Array<{
    id: string;
    name: string;
    type: string;
    date: string;
  }>;
}

interface QuizSubmissionsResponse {
  submissions: Array<{
    id: string;
    resultType: "A" | "B" | "C" | "D";
  }>;
}

async function getAnalyticsData() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:4000";

  try {
    const [summaryResponse, quizResponse] = await Promise.all([
      fetch(`${backendUrl}/admin/dashboard/summary`, { cache: "no-store" }),
      fetch(`${backendUrl}/quiz-submissions`, { cache: "no-store" }),
    ]);

    const summary = summaryResponse.ok
      ? ((await summaryResponse.json()) as DashboardSummaryResponse)
      : null;
    const quizzes = quizResponse.ok
      ? ((await quizResponse.json()) as QuizSubmissionsResponse)
      : null;

    const resultBreakdown = { A: 0, B: 0, C: 0, D: 0 };
    for (const item of quizzes?.submissions ?? []) {
      resultBreakdown[item.resultType] += 1;
    }

    return {
      stats: summary?.stats ?? {
        totalQuizSubmissions: 0,
        totalContactSubmissions: 0,
        totalCommunitySubscribers: 0,
        totalSubmissions: 0,
      },
      recentSubmissions: summary?.recentSubmissions ?? [],
      resultBreakdown,
    };
  } catch {
    return {
      stats: {
        totalQuizSubmissions: 0,
        totalContactSubmissions: 0,
        totalCommunitySubscribers: 0,
        totalSubmissions: 0,
      },
      recentSubmissions: [],
      resultBreakdown: { A: 0, B: 0, C: 0, D: 0 },
    };
  }
}

export default async function AdminAnalyticsPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;

  if (!session) {
    redirect("/admin/login?next=/admin/analytics");
  }

  const data = await getAnalyticsData();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00]">
              Admin Analytics
            </p>
            <h1 className="text-3xl font-bold text-[#2F1500]">Performance Overview</h1>
            <p className="mt-1 text-sm text-[#7A4A1A]">
              Real-time data from quiz, contact, and community collections.
            </p>
          </div>
          <Link
            href="/admin/dashboard"
            className="rounded-full border border-[#FFCE99]/70 bg-white px-5 py-2 text-sm font-semibold text-[#562F00] hover:bg-[#FFF7EB]"
          >
            Back to Dashboard
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {[
            {
              label: "Total Submissions",
              value: data.stats.totalSubmissions,
              icon: "📥",
            },
            {
              label: "Quiz Responses",
              value: data.stats.totalQuizSubmissions,
              icon: "📊",
            },
            {
              label: "Contact Requests",
              value: data.stats.totalContactSubmissions,
              icon: "📨",
            },
            {
              label: "Community Joins",
              value: data.stats.totalCommunitySubscribers,
              icon: "🌱",
            },
          ].map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-[#FFCE99]/30 bg-white p-5 shadow-sm"
            >
              <p className="text-xs uppercase tracking-wide text-[#AA5A00]">{metric.label}</p>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-3xl font-bold text-[#2F1500]">{metric.value}</p>
                <span className="text-2xl">{metric.icon}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#FFCE99]/30 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[#2F1500]">Quiz Result Distribution</h2>
            <p className="mt-1 text-xs text-[#7A4A1A]">
              Breakdown of quiz result types (A, B, C, D)
            </p>
            <div className="mt-5 space-y-3">
              {(["A", "B", "C", "D"] as const).map((type) => {
                const count = data.resultBreakdown[type];
                const total = data.stats.totalQuizSubmissions || 1;
                const width = Math.round((count / total) * 100);

                return (
                  <div key={type}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="font-semibold text-[#562F00]">Type {type}</span>
                      <span className="text-[#7A4A1A]">
                        {count} ({width}%)
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[#FFCE99]/30">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99]"
                        style={{ width: `${width}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-[#FFCE99]/30 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[#2F1500]">Recent Activity</h2>
            <p className="mt-1 text-xs text-[#7A4A1A]">Latest records across all collections</p>
            <div className="mt-4 space-y-3">
              {data.recentSubmissions.length === 0 ? (
                <p className="text-sm text-[#7A4A1A]">No recent records found.</p>
              ) : (
                data.recentSubmissions.slice(0, 8).map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-xl border border-[#FFCE99]/30 p-3"
                  >
                    <div>
                      <p className="font-medium text-[#562F00]">{item.name}</p>
                      <p className="text-xs text-[#7A4A1A]">{item.type}</p>
                    </div>
                    <p className="text-xs text-[#AA5A00]">{item.date}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
