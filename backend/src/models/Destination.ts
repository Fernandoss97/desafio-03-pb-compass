import mongoose, { Schema } from "mongoose";
import { DestinationType } from "../types/types";

const destinationSchema = new Schema<DestinationType>(
  {
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    travelers: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<DestinationType>("Destination", destinationSchema);
