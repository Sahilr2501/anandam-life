import { AdminLoginClient } from "./AdminLoginClient";

export default function AdminLoginPage({
  searchParams,
}: {
  searchParams?: Promise<{ next?: string }>;
}) {
  const nextPathPromise = searchParams ?? Promise.resolve({});

  return (
    <AdminLoginPageContent nextPathPromise={nextPathPromise} />
  );
}

async function AdminLoginPageContent({
  nextPathPromise,
}: {
  nextPathPromise: Promise<{ next?: string }>;
}) {
  const nextPath = (await nextPathPromise).next;

  return <AdminLoginClient nextPath={nextPath} />;
}

