import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getServerBackendUrl } from "@/lib/backendUrl";

interface QuizSubmission {
  id: string;
  testName: string;
  name: string;
  phoneNumber: string;
  resultType: "A" | "B" | "C" | "D";
  resultTitle: string;
  resultRole: string;
  createdAt: string;
}

async function getQuizSubmissions() {
  const backendUrl = getServerBackendUrl();

  try {
    const response = await fetch(`${backendUrl}/quiz-submissions`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed with status ${response.status}`);
    }

    const data = (await response.json()) as {
      submissions?: QuizSubmission[];
    };

    return data.submissions ?? [];
  } catch (err) {
    console.error("[admin/quizzes] Backend fetch failed:", backendUrl, err);
    return [];
  }
}

// Helper to get unique result types for filtering
function getUniqueResultTypes(submissions: QuizSubmission[]): string[] {
  const types = new Set(submissions.map((s) => s.resultType));
  return Array.from(types).sort();
}

// Helper to get quiz types
function getUniqueQuizNames(submissions: QuizSubmission[]): string[] {
  const names = new Set(submissions.map((s) => s.testName));
  return Array.from(names).sort();
}

export default async function AdminQuizzesPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;

  if (!session) {
    redirect("/admin/login?next=/admin/quizzes");
  }

  const submissions = await getQuizSubmissions();

  // Calculate statistics
  const totalSubmissions = submissions.length;
  const uniqueParticipants = new Set(submissions.map((s) => s.phoneNumber)).size;
  const resultTypeCounts = submissions.reduce((acc, curr) => {
    acc[curr.resultType] = (acc[curr.resultType] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const popularResult = Object.entries(resultTypeCounts).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100">
      {/* Modern Top Navigation Bar */}
      <nav className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-amber-200/50 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo & Brand */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 shadow-md">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-amber-900 to-orange-700 bg-clip-text text-transparent">
                  QuizFlow
                </h1>
                <p className="text-xs text-amber-600/70 -mt-0.5">Admin Dashboard</p>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-full border border-amber-200">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-amber-800">Live Data</span>
              </div>
              <a
                href="/admin/dashboard"
                className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 text-sm font-semibold text-amber-800 shadow-sm transition-all hover:bg-amber-50 hover:border-amber-400"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Back to Dashboard
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards Row */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md border border-amber-100">
            <div className="absolute right-0 top-0 h-20 w-20 -translate-y-6 translate-x-6 rounded-full bg-amber-50 opacity-50" />
            <div className="relative">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-stone-500">Total Responses</p>
              <p className="mt-1 text-3xl font-bold text-stone-800">{totalSubmissions}</p>
              <p className="mt-2 text-xs text-emerald-600 flex items-center gap-1">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                All time entries
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md border border-amber-100">
            <div className="relative">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-stone-500">Unique Participants</p>
              <p className="mt-1 text-3xl font-bold text-stone-800">{uniqueParticipants}</p>
              <p className="mt-2 text-xs text-stone-500">From {totalSubmissions} submissions</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md border border-amber-100">
            <div className="relative">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <p className="text-sm font-medium text-stone-500">Quiz Types</p>
              <p className="mt-1 text-3xl font-bold text-stone-800">{getUniqueQuizNames(submissions).length}</p>
              <p className="mt-2 text-xs text-stone-500">Different assessments</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md border border-amber-100">
            <div className="relative">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-stone-500">Most Popular</p>
              <p className="mt-1 text-2xl font-bold text-stone-800">
                {popularResult ? `Type ${popularResult[0]}` : '—'}
              </p>
              <p className="mt-2 text-xs text-stone-500">
                {popularResult ? `${popularResult[1]} responses` : 'No data'}
              </p>
            </div>
          </div>
        </div>

        {/* Header & Actions Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-stone-800">Quiz Responses</h2>
            <p className="mt-1 text-sm text-stone-500">
              Review and manage all participant submissions
            </p>
          </div>
          
        </div>

        {/* Table Card */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg border border-amber-100">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-amber-100">
              <thead className="bg-gradient-to-r from-amber-50 to-orange-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-stone-600">
                    Participant
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-stone-600">
                    Contact
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-stone-600">
                    Quiz
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-stone-600">
                    Result
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-stone-600">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-stone-600">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-50 bg-white">
                {submissions.map((item, idx) => (
                  <tr key={item.id} className="transition-colors hover:bg-amber-50/30">
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white text-xs font-medium">
                          {item.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-stone-800">{item.name}</p>
                          <p className="text-xs text-stone-400">ID: {item.id.slice(-8)}</p>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-sm text-stone-700">{item.phoneNumber}</span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                        {item.testName}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                          item.resultType === 'A' ? 'bg-emerald-100 text-emerald-700' :
                          item.resultType === 'B' ? 'bg-blue-100 text-blue-700' :
                          item.resultType === 'C' ? 'bg-amber-100 text-amber-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {item.resultType}
                        </span>
                        <span className="text-sm text-stone-700">{item.resultTitle}</span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <p className="text-sm text-stone-600 max-w-[200px] truncate" title={item.resultRole}>
                        {item.resultRole}
                      </p>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-stone-500">
                      <div className="flex items-center gap-1.5">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(item.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {submissions.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-stone-800">No submissions yet</h3>
              <p className="mt-1 text-sm text-stone-500">
                Quiz responses will appear here once participants start submitting.
              </p>
            </div>
          )}
        </div>

        {/* Footer note */}
        <div className="mt-6 text-center text-xs text-stone-400">
          Showing {submissions.length} total response{submissions.length !== 1 ? 's' : ''} • Last updated in real-time
        </div>
      </div>
    </div>
  );
}