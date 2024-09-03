import mongoose, { Schema } from "mongoose";
import { CityType } from "../types/types";

const citySchema = new Schema<CityType>(
  {
    name: {
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
    country: {
      type: Schema.Types.ObjectId,
      ref: "Country",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<CityType>("City", citySchema);
