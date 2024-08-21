import mongoose, { Schema } from "mongoose";
import { DestinationType } from "../types/types";

const destinationSchema = new Schema<DestinationType>(
  {
    country: {
      type: String,
      required: true,
    },
    cities: {
      type: [String],
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<DestinationType>("Destination", destinationSchema);
