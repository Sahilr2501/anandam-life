import { Schema, model } from "mongoose";

export interface IQuizSubmission {
  testName: string;
  name: string;
  phoneNumber: string;
  resultType: "A" | "B" | "C" | "D";
  resultTitle: string;
  resultRole: string;
  answers: Array<"A" | "B" | "C" | "D">;
  scoreBreakdown: {
    A: number;
    B: number;
    C: number;
    D: number;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const quizSubmissionSchema = new Schema<IQuizSubmission>(
  {
    testName: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    phoneNumber: { type: String, required: true, trim: true },
    resultType: { type: String, required: true, enum: ["A", "B", "C", "D"] },
    resultTitle: { type: String, required: true, trim: true },
    resultRole: { type: String, required: true, trim: true },
    answers: {
      type: [String],
      required: true,
      validate: (value: string[]) => value.length > 0,
    },
    scoreBreakdown: {
      A: { type: Number, required: true, min: 0 },
      B: { type: Number, required: true, min: 0 },
      C: { type: Number, required: true, min: 0 },
      D: { type: Number, required: true, min: 0 },
    },
  },
  {
    timestamps: true,
  },
);

export const QuizSubmission = model<IQuizSubmission>(
  "QuizSubmission",
  quizSubmissionSchema,
);
