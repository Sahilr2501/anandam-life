import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getServerBackendUrl } from "@/lib/backendUrl";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
  createdAt: string;
}

async function getSubmissions() {
  const backendUrl = getServerBackendUrl();

  try {
    const contactsRes = await fetch(`${backendUrl}/contact-submissions`, {
      cache: "no-store",
    });

    const contactsJson = contactsRes.ok
      ? ((await contactsRes.json()) as { submissions?: ContactSubmission[] })
      : null;

    return {
      contacts: contactsJson?.submissions ?? [],
    };
  } catch (err) {
    console.error("[admin/submissions] Backend fetch failed:", backendUrl, err);
    return { contacts: [] };
  }
}

export default async function AdminSubmissionsPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;

  if (!session) {
    redirect("/admin/login?next=/admin/submissions");
  }

  const { contacts } = await getSubmissions();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00]">
              Admin
            </p>
            <h1 className="text-3xl font-bold text-[#2F1500]">
              Contact Submissions
            </h1>
            <p className="mt-1 text-sm text-[#7A4A1A]">
              Contact/appointment requests submitted from the website.
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
            <div className="border-b border-[#FFCE99]/30 bg-[#FFF7EB] px-4 py-3">
              <h2 className="text-sm font-semibold text-[#2F1500]">
                Contact Form Submissions ({contacts.length})
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-xs">
                <thead className="bg-[#FFFDF5] text-[#562F00]">
                  <tr>
                    <th className="px-3 py-2 font-semibold">Name</th>
                    <th className="px-3 py-2 font-semibold">Email</th>
                    <th className="px-3 py-2 font-semibold">Phone</th>
                    <th className="px-3 py-2 font-semibold">Service</th>
                    <th className="px-3 py-2 font-semibold">Preferred Date</th>
                    <th className="px-3 py-2 font-semibold">Preferred Time</th>
                    <th className="px-3 py-2 font-semibold">Message</th>
                    <th className="px-3 py-2 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((item) => (
                    <tr key={item.id} className="border-t border-[#FFCE99]/30">
                      <td className="px-3 py-2 text-[#2F1500]">{item.name}</td>
                      <td className="px-3 py-2 text-[#7A4A1A]">{item.email}</td>
                      <td className="px-3 py-2 text-[#562F00]">{item.phone || "-"}</td>
                      <td className="px-3 py-2 text-[#562F00]">{item.service}</td>
                      <td className="px-3 py-2 text-[#7A4A1A]">
                        {item.preferredDate || "-"}
                      </td>
                      <td className="px-3 py-2 text-[#7A4A1A]">
                        {item.preferredTime || "-"}
                      </td>
                      <td className="px-3 py-2 text-[#7A4A1A] max-w-[220px]">
                        <p className="line-clamp-2 break-words">
                          {item.message?.trim() ? item.message : "-"}
                        </p>
                      </td>
                      <td className="px-3 py-2 text-[#7A4A1A]">
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleDateString()
                          : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {contacts.length === 0 ? (
                <p className="px-4 py-6 text-center text-xs text-[#7A4A1A]">
                  No contact submissions found.
                </p>
              ) : null}
            </div>
        </div>
      </div>
    </div>
  );
}
