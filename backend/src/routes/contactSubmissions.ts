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
