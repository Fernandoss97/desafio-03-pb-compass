import mongoose, { Schema } from "mongoose";
import { TourType } from "../types/types";

const tourSchema = new Schema<TourType>(
  {
    title: {
      type: String,
      required: true,
    },
    from: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    minAge: {
      type: Number,
      required: true,
    },
    type: {
      type: Schema.Types.ObjectId,
      ref: "Type",
      required: true,
    },
    overview: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    initialDate: {
      type: String,
      required: true,
    },
    finalDate: {
      type: String,
      required: true,
    },
    city: {
      type: Schema.Types.ObjectId,
      ref: "City",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<TourType>("Tour", tourSchema);
