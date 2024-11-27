import express from "express";
import { getAllUser, createUser } from "../controllers/userController.js";

const userRouter = express.Router();
userRouter.get("/users", getAllUser);
userRouter.post("/users", createUser);

export { userRouter };
