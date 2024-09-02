import mongoose, { Schema } from "mongoose";
import { ReviewType } from "../types/types";

const reviewSchema = new Schema<ReviewType>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    tour: {
      type: Schema.Types.ObjectId,
      ref: "Tour",
      required: true,
    },
    score: {
      type: Object,
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
