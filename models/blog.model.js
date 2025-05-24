import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
