import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getServerBackendUrl } from "@/lib/backendUrl";
import AdminSubmissionsClient from "./AdminSubmissionsClient";

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
  status?: "new" | "read" | "replied" | "archived";
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

    // Add mock statuses for demo
    const submissions = (contactsJson?.submissions ?? []).map((sub, idx) => ({
      ...sub,
      status: ["new", "read", "replied", "archived"][idx % 4] as ContactSubmission["status"],
    }));

    return submissions;
  } catch (err) {
    console.error("[admin/submissions] Backend fetch failed:", backendUrl, err);
    return [];
  }
}

export default async function SubmissionsPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;

  if (!session) {
    redirect("/admin/login?next=/admin/submissions");
  }

  const initialContacts = await getSubmissions();

  return <AdminSubmissionsClient initialContacts={initialContacts} />;
}