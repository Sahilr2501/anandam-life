"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export function AdminLoginClient({ nextPath }: { nextPath?: string }) {
  const router = useRouter();

  const safeNextPath = useMemo(() => {
    return nextPath && nextPath.startsWith("/") ? nextPath : "/admin/dashboard";
  }, [nextPath]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        setError(data?.error ?? "Login failed. Please check your credentials.");
        return;
      }

      router.replace(safeNextPath);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF9644]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#FFCE99]/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="rounded-3xl border border-[#FFCE99]/30 bg-white/95 backdrop-blur-sm p-8 shadow-2xl">
          {/* Decorative top bar */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#FF9644] to-[#FFCE99] rounded-full" />

          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#FFF7EB] rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#FFCE99]/30">
              <svg className="w-8 h-8 text-[#FF9644]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-[#2F1500] mb-2">Admin Login</h1>
            <p className="text-sm text-[#7A4A1A]">
              Sign in to access the admin dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-5">
            {/* Username Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#562F00] block">
                Username
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#AA5A00]">
                  👤
                </span>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  className="h-12 w-full rounded-xl border-2 border-[#FFCE99]/30 bg-white pl-10 pr-4 text-[#562F00] placeholder:text-[#7A4A1A]/50 outline-none transition-all focus:border-[#FF9644] focus:ring-2 focus:ring-[#FF9644]/20"
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#562F00] block">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#AA5A00]">
                  🔒
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="h-12 w-full rounded-xl border-2 border-[#FFCE99]/30 bg-white pl-10 pr-12 text-[#562F00] placeholder:text-[#7A4A1A]/50 outline-none transition-all focus:border-[#FF9644] focus:ring-2 focus:ring-[#FF9644]/20"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#AA5A00] hover:text-[#FF9644] transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <button
                type="button"
                onClick={() => alert("Please contact your administrator to reset your password.")}
                className="text-xs text-[#AA5A00] hover:text-[#FF9644] transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3"
              >
                <p className="text-sm text-red-600 flex items-center gap-2">
                  <span>⚠️</span>
                  {error}
                </p>
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="relative h-12 w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#FF9644] to-[#FFCE99] font-semibold text-[#562F00] shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {submitting ? (
                  <>
                    <svg className="h-5 w-5 animate-spin text-[#562F00]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Sign in</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </span>
            </button>
          </form>

          {/* Security Note */}
          <div className="mt-8 p-4 bg-[#FFF7EB] rounded-xl border border-[#FFCE99]/30">
            <div className="flex items-start gap-3">
              <span className="text-[#AA5A00] text-lg">🛡️</span>
              <div>
                <p className="text-xs font-medium text-[#562F00] mb-1">
                  Protected Area
                </p>
                <p className="text-xs text-[#7A4A1A]">
                  This is a secure admin area. If you don't have access, please contact the site administrator.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-sm text-[#AA5A00] hover:text-[#FF9644] transition-colors group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Demo Credentials (Remove in production) */}
          <div className="mt-4 text-center">
            <p className="text-xs text-[#7A4A1A] opacity-60">
              Demo: username: admin • password: admin123
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}