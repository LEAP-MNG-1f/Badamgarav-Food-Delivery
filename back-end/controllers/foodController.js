import { Food } from "../model/foods.js";

const createFood = async (req, response) => {
  const { name, image, ingeredient, price, category } = req.body;
  try {
    const result = await Food.create({
      name,
      image,
      ingeredient,
      price,
      category,
    });
    response.json({
      succes: true,
      data: result,
    });
  } catch (error) {
    response.json({ error: "can't create food" });
  }
};

const getAllFoods = async (req, response) => {
  try {
    const result = await Food.find().populate("category");

    response.json({
      succes: true,
      data: result,
    });
  } catch (error) {
    response.json({ error: "Can't get Food information" });
  }
};

const updateFood = async (req, response) => {
  try {
    const { name, image, ingeredient, price, category } = req.body;
    const foodId = req.params[`id`];
    const result = await Food.findByIdAndUpdate(foodId, {
      name,
      image,
      ingeredient,
      price,
      category,
    });
    response.json({
      succes: true,
      data: result,
    });
  } catch (error) {
    response.json({ error: "Cant update food" });
  }
};

const deleteFood = async (req, response) => {
  try {
    const Id = req.params[`id`];
    const result = await Food.findByIdAndDelete(Id);
    response.json({
      succes: true,
      data: result,
    });
  } catch (error) {
    response.json({
      error: error,
    });
  }
};
export { createFood, getAllFoods, updateFood, deleteFood };
