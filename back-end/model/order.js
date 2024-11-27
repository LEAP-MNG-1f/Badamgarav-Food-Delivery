import mongoose from "mongoose";

//Schema uusgeh

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: String,
    required: true,
  },
  customer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Order = mongoose.model("Order", orderSchema); //Model uusgej bna Order ni model name
