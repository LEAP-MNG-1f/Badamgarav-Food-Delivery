import { request, response } from "express";
import { User } from "../model/user.js";

const createUser = async (request, response) => {
  const result = User.create({
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
  const result = User.find();
  response.json({
    success: true,
    data: result,
  });
};

export { getAllUser, createUser };
