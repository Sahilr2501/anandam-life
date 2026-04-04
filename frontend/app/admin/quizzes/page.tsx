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

export default async function AdminQuizzesPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;

  if (!session) {
    redirect("/admin/login?next=/admin/quizzes");
  }

  const submissions = await getQuizSubmissions();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00]">
              Admin
            </p>
            <h1 className="text-3xl font-bold text-[#2F1500]">Quiz Responses</h1>
            <p className="mt-1 text-sm text-[#7A4A1A]">
              Total saved quiz entries: {submissions.length}
            </p>
          </div>
          <a
            href="/admin/dashboard"
            className="rounded-full border border-[#FFCE99]/70 bg-white px-5 py-2 text-sm font-semibold text-[#562F00] hover:bg-[#FFF7EB]"
          >
            Back to Dashboard
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#FFCE99]/30 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#FFF7EB] text-[#562F00]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Phone</th>
                  <th className="px-4 py-3 font-semibold">Quiz</th>
                  <th className="px-4 py-3 font-semibold">Result</th>
                  <th className="px-4 py-3 font-semibold">Role</th>
                  <th className="px-4 py-3 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((item) => (
                  <tr key={item.id} className="border-t border-[#FFCE99]/30">
                    <td className="px-4 py-3 text-[#2F1500]">{item.name}</td>
                    <td className="px-4 py-3 text-[#562F00]">{item.phoneNumber}</td>
                    <td className="px-4 py-3 text-[#562F00]">{item.testName}</td>
                    <td className="px-4 py-3 text-[#562F00]">
                      {item.resultType} - {item.resultTitle}
                    </td>
                    <td className="px-4 py-3 text-[#7A4A1A]">{item.resultRole}</td>
                    <td className="px-4 py-3 text-[#7A4A1A]">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {submissions.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-[#7A4A1A]">
              No quiz submissions found yet.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
