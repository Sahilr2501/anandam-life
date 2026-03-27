"use client";

import { useState } from "react";

export function CommunityJoinForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "Mental health & self-awareness",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      setSubmitError("");
      setSubmitMessage("");

      const backendUrl =
        process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:4000";

      const response = await fetch(`${backendUrl}/community-subscribers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(
          data?.error ?? "Unable to join community right now. Please try again.",
        );
      }

      setSubmitMessage("Welcome to the community! You are subscribed.");
      setFormData({
        name: "",
        email: "",
        interest: "Mental health & self-awareness",
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to join community right now. Please try again.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl bg-white/80 p-6 shadow-md ring-1 ring-[#FFCE99]/60"
    >
      <div>
        <label htmlFor="name" className="block text-xs font-semibold text-[#2F1500]">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={(event) =>
            setFormData((previous) => ({ ...previous, name: event.target.value }))
          }
          placeholder="Enter your name"
          className="mt-1 w-full rounded-xl border border-[#FFCE99]/70 bg-[#FFFDF1] px-3 py-2 text-sm text-[#2F1500] placeholder:text-[#C69A6C] focus:border-[#FF9644] focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-[#2F1500]">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={(event) =>
            setFormData((previous) => ({ ...previous, email: event.target.value }))
          }
          placeholder="you@example.com"
          className="mt-1 w-full rounded-xl border border-[#FFCE99]/70 bg-[#FFFDF1] px-3 py-2 text-sm text-[#2F1500] placeholder:text-[#C69A6C] focus:border-[#FF9644] focus:outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="interest"
          className="block text-xs font-semibold text-[#2F1500]"
        >
          What are you most curious about?
        </label>
        <select
          id="interest"
          name="interest"
          value={formData.interest}
          onChange={(event) =>
            setFormData((previous) => ({ ...previous, interest: event.target.value }))
          }
          className="mt-1 w-full rounded-xl border border-[#FFCE99]/70 bg-[#FFFDF1] px-3 py-2 text-sm text-[#2F1500] focus:border-[#FF9644] focus:outline-none"
        >
          <option>Mental health & self-awareness</option>
          <option>Relationships & emotional skills</option>
          <option>Career & purpose</option>
          <option>Parenting & family dynamics</option>
          <option>All of the above</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-4 py-2.5 text-sm font-semibold text-[#562F00] shadow-md transition-all hover:shadow-lg hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Joining..." : "Join the Community"}
      </button>
      {submitMessage ? (
        <p className="text-[11px] text-green-700">{submitMessage}</p>
      ) : null}
      {submitError ? <p className="text-[11px] text-red-600">{submitError}</p> : null}
      <p className="text-[10px] text-[#A06B3A]">
        By joining, you agree to receive email updates from Anandam. We respect
        your time, your inbox, and your emotional space.
      </p>
    </form>
  );
}
