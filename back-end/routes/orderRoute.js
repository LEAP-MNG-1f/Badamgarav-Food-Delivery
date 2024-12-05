import express from "express";

import {
  createOrder,
  deleteOrder,
  getAllOrders,
  updateOrder,
} from "../controllers/orderController.js";

const orderRouter = express.Router();
orderRouter.get("/orders", getAllOrders);
orderRouter.post("/orders", createOrder);
orderRouter.put("/orders", updateOrder);
orderRouter.delete("/orders", deleteOrder);

export { orderRouter };
