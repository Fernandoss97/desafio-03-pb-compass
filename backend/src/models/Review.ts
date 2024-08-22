import mongoose, { Schema } from "mongoose";
import { ReviewType } from "../types/types";

const reviewSchema = new Schema<ReviewType>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tour: {
      type: Schema.Types.ObjectId,
      ref: "Tour",
      required: true,
    },
    services: {
      type: Number,
      required: true,
    },
    prices: {
      type: Number,
      required: true,
    },
    locations: {
      type: Number,
      required: true,
    },
    food: {
      type: Number,
      required: true,
    },
    amenities: {
      type: Number,
      required: true,
    },
    roomConfortAndQuality: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ReviewType>("Review", reviewSchema);
