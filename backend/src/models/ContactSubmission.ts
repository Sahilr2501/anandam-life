import { Schema, model } from "mongoose";

export interface IContactSubmission {
  name: string;
  email: string;
  phone?: string;
  service: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
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
  },
  {
    timestamps: true,
  },
);

export const ContactSubmission = model<IContactSubmission>(
  "ContactSubmission",
  contactSubmissionSchema,
);
