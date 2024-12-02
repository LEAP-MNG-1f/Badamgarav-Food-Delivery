import { Order } from "../model/order.js";

const createOrder = async (req, response) => {
  const {
    userId,
    orderNumber,
    foodIds,
    totalPrice,
    district,
    khoroo,
    apartment,
  } = req.body;
  try {
    const result = await Order.create({
      userId,
      orderNumber,
      foodIds,
      totalPrice,
      district,
      khoroo,
      apartment,
    });
    response.json({
      succes: true,
      data: result,
    });
  } catch (error) {
    response.json({ error: "error can't create order" });
  }
};

const getAllOrders = async (req, response) => {
  const result = await Order.find().populate("userId").populate("foodIds");

  response.json({
    succes: true,
    data: result,
  });
};

export { getAllOrders, createOrder };
