import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";
import { getServerBackendUrl } from "@/lib/backendUrl";

// In-memory store for demo (shared with GET route in this file scope)
// NOTE: In production, replace with a real database.
// This is the same data source that GET populates (via initializeMockSubmissions).
let mockSubmissions: Map<string, any> = new Map();





export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const backendUrl = getServerBackendUrl();

  try {
    // Try to call real backend
    const response = await fetch(`${backendUrl}/contact-submissions/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json(data);
    }
    
    // If backend fails, use mock (for development)
    console.log("[API] Backend PATCH failed, using mock");
    if (mockSubmissions.has(id)) {
      const submission = mockSubmissions.get(id);
      Object.assign(submission, body);
      mockSubmissions.set(id, submission);
      return NextResponse.json(submission);
    }
    
    return NextResponse.json({ error: "Submission not found" }, { status: 404 });
  } catch (err) {
    console.error("[API] Failed to update submission:", err);
    
    // Mock fallback for development
    if (mockSubmissions.has(id)) {
      const submission = mockSubmissions.get(id);
      Object.assign(submission, body);
      mockSubmissions.set(id, submission);
      return NextResponse.json(submission);
    }
    
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const backendUrl = getServerBackendUrl();

  try {
    // Try to call real backend
    const response = await fetch(`${backendUrl}/contact-submissions/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    }
    
    // If backend returns 404, try mock
    if (response.status === 404) {
      console.log("[API] Backend DELETE returned 404, checking mock...");
      if (mockSubmissions.has(id)) {
        mockSubmissions.delete(id);
        return NextResponse.json({ success: true, mock: true });
      }
    }
    
    return NextResponse.json({ error: "Failed to delete" }, { status: response.status });
  } catch (err) {
    console.error("[API] Failed to delete submission:", err);
    
    // Mock fallback for development
    if (mockSubmissions.has(id)) {
      mockSubmissions.delete(id);
      return NextResponse.json({ success: true, mock: true });
    }
    
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// Helper to initialize mock data from initial contacts
export function initializeMockSubmissions(submissions: any[]) {
  submissions.forEach(sub => {
    if (!mockSubmissions.has(sub.id)) {
      mockSubmissions.set(sub.id, { ...sub });
    }
  });
}