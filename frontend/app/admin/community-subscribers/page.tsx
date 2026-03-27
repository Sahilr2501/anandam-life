import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

interface CommunitySubscriber {
  id: string;
  name: string;
  email: string;
  interest: string;
  createdAt: string;
}

async function getCommunitySubscribers() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:4000";

  try {
    const response = await fetch(`${backendUrl}/community-subscribers`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed with status ${response.status}`);
    }

    const data = (await response.json()) as {
      subscribers?: CommunitySubscriber[];
    };

    return data.subscribers ?? [];
  } catch {
    return [];
  }
}

export default async function CommunitySubscribersAdminPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;

  if (!session) {
    redirect("/admin/login?next=/admin/community-subscribers");
  }

  const subscribers = await getCommunitySubscribers();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00]">
              Admin
            </p>
            <h1 className="text-3xl font-bold text-[#2F1500]">
              Community Subscribers
            </h1>
            <p className="mt-1 text-sm text-[#7A4A1A]">
              Total community signups: {subscribers.length}
            </p>
          </div>
          <Link
            href="/admin/dashboard"
            className="rounded-full border border-[#FFCE99]/70 bg-white px-5 py-2 text-sm font-semibold text-[#562F00] hover:bg-[#FFF7EB]"
          >
            Back to Dashboard
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#FFCE99]/30 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#FFF7EB] text-[#562F00]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="px-4 py-3 font-semibold">Interest</th>
                  <th className="px-4 py-3 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((item) => (
                  <tr key={item.id} className="border-t border-[#FFCE99]/30">
                    <td className="px-4 py-3 text-[#2F1500]">{item.name}</td>
                    <td className="px-4 py-3 text-[#562F00]">{item.email}</td>
                    <td className="px-4 py-3 text-[#7A4A1A]">{item.interest}</td>
                    <td className="px-4 py-3 text-[#7A4A1A]">
                      {item.createdAt
                        ? new Date(item.createdAt).toLocaleDateString()
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {subscribers.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-[#7A4A1A]">
              No community subscribers found yet.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
