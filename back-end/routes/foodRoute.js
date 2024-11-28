import express from "express";
import {
  createFood,
  deleteFood,
  getAllFoods,
  updateFood,
} from "../controllers/foodController.js";

const foodRouter = express.Router();
foodRouter.get("/foods", getAllFoods);
foodRouter.post("/foods", createFood);
foodRouter.put("/foods", updateFood);
foodRouter.delete("/foods", deleteFood);

export { foodRouter };
