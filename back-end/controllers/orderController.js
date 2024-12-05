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
    information,
    phoneNumber,
    paymentType,
  } = req.body;
  // console.log(req.body);
  try {
    const result = await Order.create({
      userId: userId,
      orderNumber: orderNumber,
      foodIds: foodIds,
      totalPrice: totalPrice,
      district: district,
      khoroo: khoroo,
      apartment: apartment,
      information: information,
      phoneNumber: phoneNumber,
      paymentType: paymentType,
    });
    console.log(result);

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
