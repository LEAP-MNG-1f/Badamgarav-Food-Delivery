import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "../controllers/categoryController.js";

const categoryRouter = express.Router();
categoryRouter.get("/categories", getAllCategory);
categoryRouter.post("/categories", createCategory);
categoryRouter.put("/categories", updateCategory);
categoryRouter.delete("/categories", deleteCategory);

export { categoryRouter };
