import { request, response } from "express";
import { Order } from "../model/order.js";

const createOrder = async (request, response) => {
  const result = await Order.create({
    orderNumber: 1,
    totalPrice: 35000,
    userId: "badamtest",
  });
  response.json({
    success: true,
    data: result,
  });
};

const getAllOrders = async (request, response) => {
  const result = await Order.find().populate("userId"); // zahialagch -s avahiig zaana
  response.json({
    success: true,
    data: result,
  });
};

export { getAllOrders, createOrder };
