import mongoose, { Schema } from "mongoose";
import { CountryType } from "../types/types";

const destinationSchema = new Schema<CountryType>(
  {
    name: {
      type: String,
      required: true,
    },
    cities: {
      type: [Schema.Types.ObjectId],
      ref: "City",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<CountryType>("Destination", destinationSchema);
