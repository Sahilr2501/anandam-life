import { Router } from "express";
import { CommunitySubscriber } from "../models/CommunitySubscriber.js";
import { ContactSubmission } from "../models/ContactSubmission.js";
import { QuizSubmission } from "../models/QuizSubmission.js";

export const adminDashboardRouter = Router();

adminDashboardRouter.get("/summary", async (_req, res) => {
  try {
    const startOfToday = new Date(new Date().setHours(0, 0, 0, 0));
    const [
      totalQuizSubmissions,
      totalContactSubmissions,
      totalCommunitySubscribers,
      uniqueParticipants,
      todayQuizSubmissions,
      todayContactSubmissions,
      todayCommunitySubscribers,
      recentQuizSubmissions,
      recentContactSubmissions,
      recentCommunitySubscribers,
    ] = await Promise.all([
      QuizSubmission.countDocuments({}),
      ContactSubmission.countDocuments({}),
      CommunitySubscriber.countDocuments({}),
      QuizSubmission.distinct("phoneNumber").then((phones) => phones.length),
      QuizSubmission.countDocuments({ createdAt: { $gte: startOfToday } }),
      ContactSubmission.countDocuments({ createdAt: { $gte: startOfToday } }),
      CommunitySubscriber.countDocuments({ createdAt: { $gte: startOfToday } }),
      QuizSubmission.aggregate<{
        id: string;
        name: string;
        type: string;
        createdAt: string;
      }>([
        { $sort: { createdAt: -1 } },
        { $limit: 6 },
        {
          $project: {
            _id: 0,
            id: { $toString: "$_id" },
            name: "$name",
            type: "$testName",
            createdAt: { $toString: "$createdAt" },
          },
        },
      ]),
      ContactSubmission.aggregate<{
        id: string;
        name: string;
        type: string;
        createdAt: string;
      }>([
        { $sort: { createdAt: -1 } },
        { $limit: 6 },
        {
          $project: {
            _id: 0,
            id: { $toString: "$_id" },
            name: "$name",
            type: { $literal: "Contact Form" },
            createdAt: { $toString: "$createdAt" },
          },
        },
      ]),
      CommunitySubscriber.aggregate<{
        id: string;
        name: string;
        type: string;
        createdAt: string;
      }>([
        { $sort: { createdAt: -1 } },
        { $limit: 6 },
        {
          $project: {
            _id: 0,
            id: { $toString: "$_id" },
            name: "$name",
            type: { $literal: "Community Join" },
            createdAt: { $toString: "$createdAt" },
          },
        },
      ]),
    ]);

    const totalSubmissions =
      totalQuizSubmissions + totalContactSubmissions + totalCommunitySubscribers;
    const todaySubmissions =
      todayQuizSubmissions + todayContactSubmissions + todayCommunitySubscribers;

    const recentSubmissions = [
      ...recentQuizSubmissions,
      ...recentContactSubmissions,
      ...recentCommunitySubscribers,
    ]
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
      .slice(0, 10)
      .map((submission) => ({
        id: submission.id,
        name: submission.name,
        type: submission.type,
        date: new Date(submission.createdAt).toISOString().split("T")[0],
      }));

    res.json({
      ok: true,
      stats: {
        totalQuizSubmissions,
        totalContactSubmissions,
        totalCommunitySubscribers,
        totalSubmissions,
        uniqueParticipants,
        todaySubmissions,
        totalQuizzes: totalQuizSubmissions,
      },
      recentSubmissions,
      quickActions: [
        {
          label: "Quiz Responses",
          count: totalQuizSubmissions,
          href: "/admin/quizzes",
          color: "#AA5A00",
        },
        {
          label: "Contact Requests",
          count: totalContactSubmissions,
          href: "/admin/submissions",
          color: "#0EA5E9",
        },
        {
          label: "Community Joins",
          count: totalCommunitySubscribers,
          href: "/admin/community-subscribers",
          color: "#22C55E",
        },
      ],
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    res.status(500).json({ error: `Failed to load dashboard data: ${message}` });
  }
});
