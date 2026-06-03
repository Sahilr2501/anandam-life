import { Router } from "express";
import { ContactSubmission } from "../models/ContactSubmission.js";

interface CreateContactSubmissionRequest {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
}

export const contactSubmissionsRouter = Router();

contactSubmissionsRouter.get("/", async (_req, res) => {
  try {
    const items = await ContactSubmission.find({})
      .sort({ createdAt: -1 })
      .limit(200)
      .lean();

    res.json({
      ok: true,
      submissions: items.map((item) => ({
        id: String(item._id),
        name: item.name,
        email: item.email,
        phone: item.phone,
        service: item.service,
        preferredDate: item.preferredDate,
        preferredTime: item.preferredTime,
        message: item.message,
        createdAt: item.createdAt,
      })),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    res
      .status(500)
      .json({ error: `Failed to load contact submissions: ${message}` });
  }
});

contactSubmissionsRouter.post("/", async (req, res) => {
  try {
    const body = req.body as CreateContactSubmissionRequest;

    const payload = {
      name: body.name?.trim(),
      email: body.email?.trim(),
      phone: body.phone?.trim(),
      service: body.service?.trim(),
      preferredDate: body.preferredDate?.trim(),
      preferredTime: body.preferredTime?.trim(),
      message: body.message?.trim(),
    };

    if (!payload.name || !payload.email || !payload.service) {
      res.status(400).json({
        error: "name, email, and service are required.",
      });
      return;
    }

    const submission = await ContactSubmission.create(payload);

    res.status(201).json({
      ok: true,
      id: submission.id,
      message: "Contact submission saved successfully.",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    res
      .status(500)
      .json({ error: `Failed to save contact submission: ${message}` });
  }
});

// Update submission status
contactSubmissionsRouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body as { status?: "new" | "read" | "replied" | "archived" };

    if (!status) {
      res.status(400).json({ error: "status is required" });
      return;
    }

    const updated = await ContactSubmission.findByIdAndUpdate(
      id,
      { $set: { status } },
      { new: true }
    ).lean();

    if (!updated) {
      res.status(404).json({ error: "Submission not found" });
      return;
    }

    res.json({
      ok: true,
      submission: {
        id: String(updated._id),
        name: updated.name,
        email: updated.email,
        phone: updated.phone,
        service: updated.service,
        preferredDate: updated.preferredDate,
        preferredTime: updated.preferredTime,
        message: updated.message,
        createdAt: updated.createdAt,
        status: updated.status,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    res.status(500).json({ error: `Failed to update submission: ${message}` });
  }
});

// Delete submission
contactSubmissionsRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await ContactSubmission.findByIdAndDelete(id).lean();

    if (!deleted) {
      res.status(404).json({ error: "Submission not found" });
      return;
    }

    res.json({ ok: true, success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    res.status(500).json({ error: `Failed to delete submission: ${message}` });
  }
});

