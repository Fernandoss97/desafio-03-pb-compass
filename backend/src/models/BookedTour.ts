import mongoose, { Schema } from "mongoose";
import { BookedTourType } from "../types/types";

const typeSchema = new Schema<BookedTourType>(
  {
    tour: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    travelers: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<BookedTourType>("BookedTour", typeSchema);
