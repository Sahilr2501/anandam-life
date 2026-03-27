import { Router } from "express";
import { QuizSubmission } from "../models/QuizSubmission.js";

type QuizResultType = "A" | "B" | "C" | "D";

interface CreateQuizSubmissionRequest {
  testName?: string;
  name?: string;
  phoneNumber?: string;
  resultType?: QuizResultType;
  resultTitle?: string;
  resultRole?: string;
  answers?: QuizResultType[];
  scoreBreakdown?: {
    A?: number;
    B?: number;
    C?: number;
    D?: number;
  };
}

export const quizSubmissionsRouter = Router();

quizSubmissionsRouter.get("/", async (_req, res) => {
  try {
    const submissions = await QuizSubmission.find({})
      .sort({ createdAt: -1 })
      .limit(200)
      .lean();

    res.json({
      ok: true,
      submissions: submissions.map((item) => ({
        id: String(item._id),
        testName: item.testName,
        name: item.name,
        phoneNumber: item.phoneNumber,
        resultType: item.resultType,
        resultTitle: item.resultTitle,
        resultRole: item.resultRole,
        answers: item.answers,
        scoreBreakdown: item.scoreBreakdown,
        createdAt: item.createdAt,
      })),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    res.status(500).json({ error: `Failed to load quiz submissions: ${message}` });
  }
});

quizSubmissionsRouter.post("/", async (req, res) => {
  try {
    const body = req.body as CreateQuizSubmissionRequest;

    const testName = body.testName?.trim();
    const name = body.name?.trim();
    const phoneNumber = body.phoneNumber?.trim();
    const resultType = body.resultType;
    const resultTitle = body.resultTitle?.trim();
    const resultRole = body.resultRole?.trim();
    const answers = body.answers;
    const scoreBreakdown = body.scoreBreakdown;

    const hasValidScoreBreakdown =
      scoreBreakdown !== undefined &&
      typeof scoreBreakdown.A === "number" &&
      typeof scoreBreakdown.B === "number" &&
      typeof scoreBreakdown.C === "number" &&
      typeof scoreBreakdown.D === "number";

    if (
      !testName ||
      !name ||
      !phoneNumber ||
      !resultType ||
      !resultTitle ||
      !resultRole ||
      !answers ||
      answers.length === 0 ||
      !hasValidScoreBreakdown
    ) {
      res.status(400).json({
        error:
          "testName, name, phoneNumber, resultType, resultTitle, resultRole, answers, and scoreBreakdown are required.",
      });
      return;
    }

    const submission = await QuizSubmission.create({
      testName,
      name,
      phoneNumber,
      resultType,
      resultTitle,
      resultRole,
      answers,
      scoreBreakdown: {
        A: scoreBreakdown.A,
        B: scoreBreakdown.B,
        C: scoreBreakdown.C,
        D: scoreBreakdown.D,
      },
    });

    res.status(201).json({
      ok: true,
      id: submission.id,
      message: "Quiz result saved successfully.",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    res.status(500).json({ error: `Failed to save quiz result: ${message}` });
  }
});

quizSubmissionsRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await QuizSubmission.findByIdAndDelete(id);

    if (!deleted) {
      res.status(404).json({ error: "Quiz submission not found." });
      return;
    }

    res.json({ ok: true, message: "Quiz submission deleted." });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    res.status(500).json({ error: `Failed to delete quiz submission: ${message}` });
  }
});
