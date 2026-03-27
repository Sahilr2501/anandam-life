import mongoose from "mongoose";

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

export const setupTtlIndexes = async () => {
  const db = mongoose.connection.db;

  if (!db) {
    throw new Error("Database connection is not initialized.");
  }

  await Promise.all([
    db.collection("quizsubmissions").createIndex(
      { createdAt: 1 },
      {
        expireAfterSeconds: ONE_YEAR_IN_SECONDS,
        name: "ttl_quizsubmissions_createdAt_1y",
      },
    ),
    db.collection("contactsubmissions").createIndex(
      { createdAt: 1 },
      {
        expireAfterSeconds: ONE_YEAR_IN_SECONDS,
        name: "ttl_contactsubmissions_createdAt_1y",
      },
    ),
    db.collection("communitysubscribers").createIndex(
      { createdAt: 1 },
      {
        expireAfterSeconds: ONE_YEAR_IN_SECONDS,
        name: "ttl_communitysubscribers_createdAt_1y",
      },
    ),
  ]);
};
