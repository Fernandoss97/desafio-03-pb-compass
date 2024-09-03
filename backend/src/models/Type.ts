import mongoose, { Schema } from "mongoose";
import { iType } from "../types/types";

const typeSchema = new Schema<iType>(
  {
    name: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<iType>("Type", typeSchema);
