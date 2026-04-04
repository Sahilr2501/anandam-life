function trimTrailingSlash(url: string): string {
  return url.replace(/\/$/, "");
}

/** Client Components — uses `NEXT_PUBLIC_BACKEND_URL` (inlined at build time on Vercel). */
export function getBrowserBackendUrl(): string {
  const raw = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:4000";
  return trimTrailingSlash(raw);
}

/**
 * Server Components / Route Handlers — prefers `BACKEND_URL`, then public URL.
 * Set both on Vercel: `BACKEND_URL` and `NEXT_PUBLIC_BACKEND_URL` to the same Render API URL.
 */
export function getServerBackendUrl(): string {
  const raw =
    process.env.BACKEND_URL ??
    process.env.NEXT_PUBLIC_BACKEND_URL ??
    "http://localhost:4000";
  return trimTrailingSlash(raw);
}
