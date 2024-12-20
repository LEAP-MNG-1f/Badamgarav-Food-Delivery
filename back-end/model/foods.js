import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  ingeredient: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
    required: true,
  },
});

export const Food = mongoose.model("Food", foodSchema);
