import { Router } from "express";
import { CommunitySubscriber } from "../models/CommunitySubscriber.js";

interface CreateCommunitySubscriberRequest {
  name?: string;
  email?: string;
  interest?: string;
}

export const communitySubscribersRouter = Router();

communitySubscribersRouter.get("/", async (_req, res) => {
  try {
    const items = await CommunitySubscriber.find({})
      .sort({ createdAt: -1 })
      .limit(200)
      .lean();

    res.json({
      ok: true,
      subscribers: items.map((item) => ({
        id: String(item._id),
        name: item.name,
        email: item.email,
        interest: item.interest,
        createdAt: item.createdAt,
      })),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    res
      .status(500)
      .json({ error: `Failed to load community subscribers: ${message}` });
  }
});

communitySubscribersRouter.post("/", async (req, res) => {
  try {
    const body = req.body as CreateCommunitySubscriberRequest;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const interest = body.interest?.trim();

    if (!name || !email || !interest) {
      res.status(400).json({ error: "name, email, and interest are required." });
      return;
    }

    const submission = await CommunitySubscriber.create({ name, email, interest });

    res.status(201).json({
      ok: true,
      id: submission.id,
      message: "Community subscription saved successfully.",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    res
      .status(500)
      .json({ error: `Failed to save community subscription: ${message}` });
  }
});
