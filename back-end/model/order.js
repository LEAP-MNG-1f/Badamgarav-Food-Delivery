import mongoose from "mongoose";

//Schema uusgeh

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  orderNumber: {
    type: Number,
    required: true,
  },
  foodIds: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Food",
      required: true,
    },
  ],
  totalPrice: {
    type: String,
    required: true,
  },
  process: {
    type: String,
    enum: ["inProgress", "active", "delivered", "waiting"],
    default: "active",
  },
  createdDate: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  district: {
    type: String,
    required: true,
  },
  khoroo: {
    type: String,
    required: true,
  },
  apartment: {
    type: String,
    required: true,
  },
  information: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  paymentType: {
    type: String,
    enum: ["card", "cash"],
  },
});

export const Order = mongoose.model("Order", orderSchema); //Model uusgej bna Order ni model name
