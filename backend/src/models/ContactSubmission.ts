import { Schema, model } from "mongoose";

export type ContactSubmissionStatus = "new" | "read" | "replied" | "archived";

export interface IContactSubmission {
  name: string;
  email: string;
  phone?: string;
  service: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
  status?: ContactSubmissionStatus;
  createdAt?: Date;
  updatedAt?: Date;
}

const contactSubmissionSchema = new Schema<IContactSubmission>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    service: { type: String, required: true, trim: true },
    preferredDate: { type: String, trim: true },
    preferredTime: { type: String, trim: true },
    message: { type: String, trim: true },
    status: {
      type: String,
      enum: ["new", "read", "replied", "archived"],
      default: "new",
      index: true,
    },
  },
  {
    timestamps: true,
  },
);


export const ContactSubmission = model<IContactSubmission>(
  "ContactSubmission",
  contactSubmissionSchema,
);
