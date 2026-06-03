import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getServerBackendUrl } from "@/lib/backendUrl";

// In-memory store for demo (shared with PATCH/DELETE route in this file scope)
// NOTE: In production, replace with a real database.
import type { NextRequest } from "next/server";

// NOTE: actual mock Map lives in the [id] route file.
// We call initializeMockSubmissions from GET so PATCH/DELETE can update the same in-memory data.
let mockSubmissionsStore: any[] = [];

import { initializeMockSubmissions } from "./[id]/route";




export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const backendUrl = getServerBackendUrl();

  try {
    const contactsRes = await fetch(`${backendUrl}/contact-submissions`, {
      cache: "no-store",
    });

    if (contactsRes.ok) {
      const contactsJson = await contactsRes.json();
      const submissionsWithStatus = (contactsJson.submissions || []).map((sub: any, idx: number) => ({
        ...sub,
        status: ["new", "read", "replied", "archived"][idx % 4],
      }));
      
      // Store in mock for DELETE/PATCH operations
      mockSubmissionsStore = submissionsWithStatus;

      // Initialize the PATCH/DELETE route's in-memory map from this list
      initializeMockSubmissions(submissionsWithStatus);

      // Return the same data that is stored for subsequent PATCH/DELETE
      return NextResponse.json({ submissions: mockSubmissionsStore });
    }
    
    throw new Error("Backend fetch failed");
  } catch (err) {
    console.error("[API] Failed to fetch submissions, using mock:", err);
    
    // Return mock data if available
    if (mockSubmissionsStore.length > 0) {
      return NextResponse.json({ submissions: mockSubmissionsStore });
    }
    
    // Return empty array
    return NextResponse.json({ submissions: [] });
  }
}