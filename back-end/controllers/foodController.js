import { Food } from "../model/food.js";

const createFood = async (request, response) => {
  const result = await Food.create({
    // name: "dessert 8",
    // image:
    //   " https://www.figma.com/design/VqYifDAzddKNk05lRmWEPe/Todo-App?node-id=3923-12323&m=dev",
    // ingredient: "Cocoa, Sugar, Butter, Flour, Eggs",
    // price: 18000,
    // categoryId: "674421b0bda2639d243e3cdf",
  });

  response.json({
    success: true,
    data: result,
  });
};
const getAllFoods = async (request, response) => {
  const groupedFood = await Food.aggregate([
    {
      $lookup: {
        from: "categories", // Assuming your categories collection is named 'categories'
        localField: "categoryId",
        foreignField: "_id",
        as: "category",
      },
    },
    { $unwind: "$category" },
    {
      $group: {
        categoryName: "$category.name",
        items: { $push: "$$ROOT" },
      },
    },
  ]);
  console.log(groupedFood);

  response.json({
    success: true,
    data: groupedFood,
  });
};
const deleteFood = async (request, response) => {
  const result = await Food.findByIdAndRemove({
    _id: "",
  });

  response.json({
    success: true,
    data: result,
  });
};
const updateFood = async (request, response) => {
  const result = await Food.findByIdAndUpdate({
    _id: "",
  });

  response.json({
    success: true,
    data: result,
  });
};

export { getAllFoods, createFood, deleteFood, updateFood };
