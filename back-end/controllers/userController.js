import { request, response } from "express";
import { User } from "../model/user.js";

const createUser = async (request, response) => {
  const result = await User.create({
    name: "Badamaa",
    email: "Badam@gmail.com",
    password: "badamtest",
    phoneNumber: 435463754,
  });
  response.json({
    success: true,
    data: result,
  });
};

const getAllUser = async (request, response) => {
  const result = await User.find();
  response.json({
    success: true,
    data: result,
  });
};

const deleteUser = async (request, response) => {
  const result = await User.findByIdAndDelete();
  response.json({
    success: true,
    data: result,
  });
};

export { getAllUser, createUser, deleteUser };
