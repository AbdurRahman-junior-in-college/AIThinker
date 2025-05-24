import mongoose from "mongoose";

const SampleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Sample =
  mongoose.models.Sample || mongoose.model("Sample", SampleSchema);
