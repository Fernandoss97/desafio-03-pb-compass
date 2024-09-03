import mongoose, { Schema } from "mongoose";
import { ContinentType } from "../types/types";

const continentSchema = new Schema<ContinentType>(
  {
    name: {
      type: String,
      required: true,
    },
    countries: {
      type: [Schema.Types.ObjectId],
      ref: "Country",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ContinentType>("Continent", continentSchema);
