"use client";

import Link from "next/link";
import { useState } from "react";
import { getBrowserBackendUrl } from "@/lib/backendUrl";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      setSubmitMessage("");
      setSubmitError("");

      const backendUrl = getBrowserBackendUrl();
      const response = await fetch(`${backendUrl}/contact-submissions`, {
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
        throw new Error(data?.error ?? "Unable to submit form right now.");
      }

      setSubmitMessage("Thank you! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to submit form right now.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="bg-[#FFFDF1] text-[#562F00]">
      {/* Hero Section */}
      <section className="border-b border-[#FFCE99]/30 bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AA5A00]">
            Get in Touch
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#2F1500] sm:text-4xl">
            Let&apos;s Talk
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[#7A4A1A] sm:text-base">
            Whether you&apos;re ready to book a session, have questions, or
            want to explore how we can support you, we&apos;re here to listen.
            Reach out through any of the ways below.
          </p>
        </div>
      </section>

      {/* Appointment Form & WhatsApp Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          {/* Appointment Form */}
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#FFCE99]/40 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#2F1500] mb-6">
              Book an Appointment
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold text-[#2F1500] mb-1"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#FFCE99]/70 bg-[#FFFDF1] px-4 py-2.5 text-sm text-[#2F1500] placeholder:text-[#C69A6C] focus:border-[#FF9644] focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-[#2F1500] mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#FFCE99]/70 bg-[#FFFDF1] px-4 py-2.5 text-sm text-[#2F1500] placeholder:text-[#C69A6C] focus:border-[#FF9644] focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold text-[#2F1500] mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#FFCE99]/70 bg-[#FFFDF1] px-4 py-2.5 text-sm text-[#2F1500] placeholder:text-[#C69A6C] focus:border-[#FF9644] focus:outline-none"
                    placeholder="+91 12345 67890"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-xs font-semibold text-[#2F1500] mb-1"
                >
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#FFCE99]/70 bg-[#FFFDF1] px-4 py-2.5 text-sm text-[#2F1500] focus:border-[#FF9644] focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="personal-counseling">Personal Counseling</option>
                  <option value="career-counseling">Career Counseling</option>
                  <option value="couple-counseling">Couple Counseling</option>
                  <option value="family-counseling">Family Counseling</option>
                  <option value="life-coaching">Life Coaching</option>
                  <option value="parental-counseling">Parental Counseling</option>
                  <option value="school-counseling">School Counseling</option>
                  <option value="virtual-counseling">Virtual Counseling</option>
                  <option value="corporate-training">Corporate Training</option>
                </select>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="preferredDate"
                    className="block text-xs font-semibold text-[#2F1500] mb-1"
                  >
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#FFCE99]/70 bg-[#FFFDF1] px-4 py-2.5 text-sm text-[#2F1500] focus:border-[#FF9644] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="preferredTime"
                    className="block text-xs font-semibold text-[#2F1500] mb-1"
                  >
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#FFCE99]/70 bg-[#FFFDF1] px-4 py-2.5 text-sm text-[#2F1500] focus:border-[#FF9644] focus:outline-none"
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                    <option value="evening">Evening (4 PM - 7 PM)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-[#2F1500] mb-1"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#FFCE99]/70 bg-[#FFFDF1] px-4 py-2.5 text-sm text-[#2F1500] placeholder:text-[#C69A6C] focus:border-[#FF9644] focus:outline-none"
                  placeholder="Tell us a bit about what you're looking for support with..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-6 py-3 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                {isSubmitting
                  ? "Submitting..."
                  : "Submit Appointment Request"}
              </button>
              {submitMessage ? (
                <p className="text-xs text-green-700 text-center">{submitMessage}</p>
              ) : null}
              {submitError ? (
                <p className="text-xs text-red-600 text-center">{submitError}</p>
              ) : null}

              <p className="text-[10px] text-[#A06B3A] text-center">
                By submitting this form, you agree to be contacted by Anandam
                Life. We respect your privacy and will never share your
                information.
              </p>
            </form>
          </div>

          {/* WhatsApp & Quick Contact */}
          <div className="space-y-6">
            {/* WhatsApp Chat Button */}
            <div className="rounded-3xl bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/10 p-6 shadow-sm ring-1 ring-[#25D366]/30">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2F1500]">
                    Chat on WhatsApp
                  </h3>
                  <p className="text-xs text-[#7A4A1A]">
                    Quick questions? We&apos;re here!
                  </p>
                </div>
              </div>
              <p className="mb-4 text-sm text-[#7A4A1A]">
                Prefer messaging? Send us a WhatsApp message and we&apos;ll get
                back to you as soon as possible.
              </p>
              <a
                href="https://wa.me/911234567890?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#20BA5A] hover:shadow-lg transition-all"
              >
                <span>💬</span>
                Start WhatsApp Chat
              </a>
              <p className="mt-2 text-[10px] text-[#7A4A1A] text-center">
                Available Mon-Sat, 9 AM - 7 PM IST
              </p>
            </div>

            {/* Quick Contact Info */}
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#FFCE99]/40">
              <h3 className="text-lg font-semibold text-[#2F1500] mb-4">
                Other Ways to Reach Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📧</span>
                  <div>
                    <p className="text-xs font-semibold text-[#2F1500]">Email</p>
                    <a
                      href="mailto:info@anandamlife.com"
                      className="text-sm text-[#AA5A00] hover:text-[#FF9644]"
                    >
                      info@anandamlife.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="text-xs font-semibold text-[#2F1500]">Phone</p>
                    <a
                      href="tel:+911234567890"
                      className="text-sm text-[#AA5A00] hover:text-[#FF9644]"
                    >
                      +91 12345 67890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">🕐</span>
                  <div>
                    <p className="text-xs font-semibold text-[#2F1500]">
                      Office Hours
                    </p>
                    <p className="text-sm text-[#7A4A1A]">
                      Mon-Sat: 9 AM - 7 PM IST
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Counseling Access */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#FF9644]/14 via-[#FFCE99]/20 to-[#FFFDF1] p-6 sm:p-8 shadow-sm">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-[#2F1500] mb-4">
                Virtual Counseling Access
              </h2>
              <p className="text-sm text-[#7A4A1A] mb-4">
                Can&apos;t make it to our office? We offer secure, confidential
                virtual counseling sessions via video call. Access support from
                the comfort of your home, office, or any private space.
              </p>
              <ul className="space-y-2 text-sm text-[#7A4A1A] mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9644] mt-0.5">✓</span>
                  <span>
                    <strong className="text-[#2F1500]">Secure Platform:</strong>{" "}
                    HIPAA-compliant video conferencing
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9644] mt-0.5">✓</span>
                  <span>
                    <strong className="text-[#2F1500]">Same Quality:</strong>{" "}
                    Full therapeutic experience, just online
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9644] mt-0.5">✓</span>
                  <span>
                    <strong className="text-[#2F1500]">Flexible Scheduling:</strong>{" "}
                    Available across different time zones
                  </span>
                </li>
              </ul>
              <Link
                href="/services/VirtualCounseling"
                className="inline-flex items-center text-sm font-semibold text-[#AA5A00] hover:text-[#FF9644]"
              >
                Learn more about Virtual Counseling →
              </Link>
            </div>
            <div className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-[#FFCE99]/60">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9644]/20 to-[#FFCE99]/30">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#2F1500]">
                    Ready for Virtual Session?
                  </h3>
                  <p className="text-xs text-[#7A4A1A]">
                    Book your online appointment
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#7A4A1A] mb-4">
                After booking, you&apos;ll receive a secure video link and
                instructions for your session.
              </p>
              <Link
                href="/consultation"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#FF9644] to-[#FFCE99] px-6 py-3 text-sm font-semibold text-[#562F00] shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                Book Virtual Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
