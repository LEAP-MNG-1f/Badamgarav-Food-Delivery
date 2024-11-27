import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const Category = new mongoose.model("Category", categorySchema);
