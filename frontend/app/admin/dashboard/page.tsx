import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

interface DashboardStats {
  totalQuizSubmissions: number;
  totalContactSubmissions: number;
  totalCommunitySubscribers: number;
  totalSubmissions: number;
  uniqueParticipants: number;
  todaySubmissions: number;
  totalQuizzes: number;
}

interface DashboardSubmission {
  id: string;
  name: string;
  type: string;
  date: string;
}

interface DashboardAction {
  label: string;
  count: number;
  href: string;
  color: string;
}

const getDashboardStats = async () => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:4000";
  try {
    const response = await fetch(`${backendUrl}/admin/dashboard/summary`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Dashboard API failed with status ${response.status}`);
    }

    const data = (await response.json()) as {
      stats: DashboardStats;
      recentSubmissions: DashboardSubmission[];
      quickActions: DashboardAction[];
    };

    return {
      stats: data.stats,
      recentSubmissions: data.recentSubmissions,
      quickActions: data.quickActions,
    };
  } catch {
    return {
      stats: {
        totalQuizSubmissions: 0,
        totalContactSubmissions: 0,
        totalCommunitySubscribers: 0,
        totalSubmissions: 0,
        uniqueParticipants: 0,
        todaySubmissions: 0,
        totalQuizzes: 0,
      },
      recentSubmissions: [],
      quickActions: [
        {
          label: "Quiz Responses",
          count: 0,
          href: "/admin/quizzes",
          color: "#AA5A00",
        },
      ],
    };
  }
};

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;

  // Redirect if no session
  if (!session) {
    redirect("/admin/login");
  }

  const dashboardData = await getDashboardStats();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1] py-12">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#FF9644]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFCE99]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00] mb-2">
                Admin Dashboard
              </p>
              <h1 className="text-3xl font-bold text-[#2F1500]">
                Welcome back, Admin
              </h1>
              <p className="text-[#7A4A1A] mt-1">
                Here's what's happening with your site today
              </p>
            </div>

            {/* Session Status Badge */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#FFCE99]/30 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-[#562F00]">Session Active</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {[
              { label: "Total Submissions", value: dashboardData.stats.totalSubmissions, icon: "📥", change: "all collections" },
              { label: "Quiz Responses", value: dashboardData.stats.totalQuizSubmissions, icon: "📊", change: "database" },
              { label: "Contact Requests", value: dashboardData.stats.totalContactSubmissions, icon: "📨", change: "database" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#FFCE99]/30 p-5 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-[#7A4A1A] mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-[#2F1500]">{stat.value}</p>
                    <p className="text-xs text-[#AA5A00] mt-1">{stat.change}</p>
                  </div>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Quick Actions */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Actions Card */}
            <div className="bg-white rounded-2xl border border-[#FFCE99]/30 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-[#2F1500] mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-[#FF9644] rounded-full" />
                Quick Actions
              </h2>

              <div className="space-y-3">
                {dashboardData.quickActions.map((action, index) => (
                  <Link
                    key={index}
                    href={action.href}
                    className="flex items-center justify-between p-3 rounded-xl border border-[#FFCE99]/30 hover:border-[#FF9644] hover:bg-[#FFF7EB] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: action.color }}
                      />
                      <span className="text-[#562F00] font-medium">{action.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[#AA5A00]">{action.count}</span>
                      <svg className="w-4 h-4 text-[#7A4A1A] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-[#FFCE99]/30">
                <Link
                  href="/admin/login"
                  className="flex items-center justify-between rounded-xl p-3 text-red-600 transition-all hover:bg-red-50"
                >
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Logout</span>
                  </span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Recent Activity & Suggestions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Submissions */}
            <div className="bg-white rounded-2xl border border-[#FFCE99]/30 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-[#2F1500] flex items-center gap-2">
                  <span className="w-1 h-5 bg-[#FF9644] rounded-full" />
                  Recent Submissions
                </h2>
                <Link
                  href="/admin/submissions"
                  className="text-sm text-[#AA5A00] hover:text-[#FF9644] transition-colors"
                >
                  View all →
                </Link>
              </div>

              <div className="space-y-3">
                {dashboardData.recentSubmissions.map((submission) => (
                  <div
                    key={submission.id}
                    className="flex items-center justify-between p-3 rounded-xl border border-[#FFCE99]/30 hover:bg-[#FFF7EB] transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#FFF7EB] rounded-full flex items-center justify-center text-[#562F00] font-semibold">
                        {submission.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-[#562F00]">{submission.name}</p>
                        <p className="text-xs text-[#7A4A1A]">{submission.type}</p>
                      </div>
                    </div>
                    <span className="text-xs text-[#AA5A00]">{submission.date}</span>
                  </div>
                ))}
                {dashboardData.recentSubmissions.length === 0 ? (
                  <p className="text-sm text-[#7A4A1A]">No submissions found in database yet.</p>
                ) : null}
              </div>
            </div>

            {/* Next Steps / Suggestions */}
            <div className="bg-white rounded-2xl border border-[#FFCE99]/30 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-[#2F1500] mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-[#FF9644] rounded-full" />
                Suggested Next Steps
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Review Quiz Responses",
                    description: `${dashboardData.stats.totalQuizSubmissions} results saved`,
                    icon: "📊",
                    href: "/admin/quizzes",
                    color: "#FF9644"
                  },
                  {
                    title: "Review Contact Requests",
                    description: `${dashboardData.stats.totalContactSubmissions} contact forms received`,
                    icon: "📨",
                    href: "/admin/submissions",
                    color: "#562F00"
                  },
                  {
                    title: "Check Community Growth",
                    description: `${dashboardData.stats.totalCommunitySubscribers} people joined community`,
                    icon: "🌱",
                    href: "/admin/submissions",
                    color: "#AA5A00"
                  },
                  {
                    title: "Track Today's Activity",
                    description: `${dashboardData.stats.todaySubmissions} new submissions today`,
                    icon: "🗂️",
                    href: "/admin/submissions",
                    color: "#FF9644"
                  },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="p-4 rounded-xl border border-[#FFCE99]/30 hover:border-[#FF9644] hover:bg-[#FFF7EB] transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h3 className="font-medium text-[#562F00] mb-1 group-hover:text-[#FF9644] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#7A4A1A]">{item.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}