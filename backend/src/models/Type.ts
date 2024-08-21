import mongoose, { Schema } from "mongoose";
import { Type } from "../types/types";

const typeSchema = new Schema<Type>(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<Type>("Type", typeSchema);
