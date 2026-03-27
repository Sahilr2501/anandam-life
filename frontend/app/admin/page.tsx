import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;

  if (session) {
    redirect("/admin/dashboard");
  }

  redirect("/admin/login?next=/admin/dashboard");
}
