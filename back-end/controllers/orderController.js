import { Order } from "../model/order.js";

const createOrder = async (request, response) => {
  const result = await Order.create({
    // userId: "6746894ab976a40279e1a4fc",
    // orderNumber: 2,
    // foodIds: 1,
    // totalPrice: 35000,
    // process: "Progress",
    // // createdAt: {
    // //   type: Date,
    // //   default: () => Date.now(),
    // //   immutable: true,
    // // },
    // district: "BGD",
    // khoroo: "17 khoroo",
    // apartment: "Elegance",
  });

  response.json({
    success: true,
    data: result,
  });
};
const getAllOrders = async (request, response) => {
  const result = await Order.find().populate("userId").populate("foodIds"); // zahialagch -n medeelel avahiig zaana

  response.json({
    success: true,
    data: result,
  });
};
const deleteOrder = async (request, response) => {
  const result = await Order.findByIdAndRemove({
    _id: "",
  });

  response.json({
    success: Food,
    data: result,
  });
};
const updateOrder = async (request, response) => {
  const result = await Order.findByIdAndUpdate({
    _id: "",
  });

  response.json({
    success: true,
    data: result,
  });
};

export { getAllOrders, createOrder, deleteOrder, updateOrder };
