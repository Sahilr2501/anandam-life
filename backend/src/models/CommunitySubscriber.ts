import { Schema, model } from "mongoose";

export interface ICommunitySubscriber {
  name: string;
  email: string;
  interest: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const communitySubscriberSchema = new Schema<ICommunitySubscriber>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    interest: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

export const CommunitySubscriber = model<ICommunitySubscriber>(
  "CommunitySubscriber",
  communitySubscriberSchema,
);
