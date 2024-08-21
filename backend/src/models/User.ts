import mongoose, { Schema } from "mongoose";
import { UserType } from "../types/types";

const typeSchema = new Schema<UserType>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    firebaseID: {
      type: String,
      required: true,
    },
    tours: {
      type: [Schema.Types.ObjectId],
      ref: "Tour",
    },
  },
  { timestamps: true }
);

export default mongoose.model<UserType>("User", typeSchema);
