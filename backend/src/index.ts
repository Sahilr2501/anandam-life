import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { healthRouter } from "./routes/health.js";
import { quizSubmissionsRouter } from "./routes/quizSubmissions.js";
import { adminDashboardRouter } from "./routes/adminDashboard.js";
import { contactSubmissionsRouter } from "./routes/contactSubmissions.js";
import { communitySubscribersRouter } from "./routes/communitySubscribers.js";
import { setupTtlIndexes } from "./utils/setupTtlIndexes.js";

dotenv.config();

const app = express();

const port = Number(process.env.PORT ?? 4000);
const corsOrigin = "https://anandam-life.vercel.app";

app.use(
  cors({
    origin: corsOrigin,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
  }),
);
app.use(express.json({ limit: "1mb" }));

app.get("/", (_req, res) => {
  res.json({
    name: "ANANDAM Life Backend",
    status: "ok",
  });
});

app.use("/health", healthRouter);
app.use("/quiz-submissions", quizSubmissionsRouter);
app.use("/admin/dashboard", adminDashboardRouter);
app.use("/contact-submissions", contactSubmissionsRouter);
app.use("/community-subscribers", communitySubscribersRouter);

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error("MONGODB_URI is required in environment variables");
}

const startServer = async () => {
  try {
    await mongoose.connect(mongoUri);
    await setupTtlIndexes();
    // eslint-disable-next-line no-console
    console.log("MongoDB connected");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    // eslint-disable-next-line no-console
    console.error(`MongoDB connection failed: ${message}`);
  }

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`[backend] listening on http://localhost:${port}`);
  });
};

void startServer();

