export type FoodType = {
  _id: string;
  image: string;
  ingeredient: string;
  name: string;
  price: string;
  category: CategoryType;
};

export type CategoryType = {
  _id: string;
  name: string;
};

export type MenuCardListProps = {
  meFoods: MenuFoodType[];
};

export type MenuCategoryType = {
  _id: string;
  name: string;
};
export type MenuFoodType = {
  _id: string;
  image: string;
  ingeredient: string;
  name: string;
  price: string;
  category: MenuCategoryType;
};
export type CartItemsType = {
  _id: string;
  name: string;
  image: string;
  ingeredient: string;
  price: string;
  count: number;
};

export type TOrderedFood = {
  userId: string;
  orderNumber: number;
  foodIds: string[];
  totalPrice: string;
  district: string;
  khoroo: string;
  apartment: string;
  phoneNumber: string;
  information: string;
  paymentType: string;
};

export const menuFoods = [
  {
    _id: "1",
    name: "Өглөөний хоол",
    price: "14800",
    image: "./1Egg.png",
    ingeredient: "Beef Patty, Cheese, Lettuce, Tomato, Bun",
  },
  {
    _id: "2",
    name: "Зайрмаг",
    price: "4800",
    image: "./2IceCream.png",
    ingeredient: "Tomato Sauce, Mozzarella, Basil, Olive Oil",
  },
  {
    _id: "3",
    name: "Өглөөний хоол",
    price: "24800",
    image: "./3Fruits.png",
    ingeredient:
      "Chicken, Romaine Lettuce, Croutons, Parmesan, Caesar Dressing",
  },
  {
    _id: "4",
    name: "Breakfast",
    price: "24800",
    image: "./4Vandui.png",
    ingeredient: "Spaghetti, Ground Beef, Tomato Sauce, Onion, Garlic",
  },
  {
    _id: "5",
    name: "Main Pizza ",
    price: "34800",
    image: "./5Pizza.png",
    ingeredient: "Broccoli, Carrots, Bell Peppers, Soy Sauce, Ginger",
  },
  {
    _id: "6",
    name: "Food tart",
    price: "12900",
    image: "./6Tart.png",
    ingeredient: "Salmon Fillet, Lemon, Olive Oil, Garlic, Parsley",
  },
  {
    _id: "7",
    name: "Өглөөний хоол",
    price: "14499",
    image: "./7Morning.png",
    ingeredient: "Ground Beef, Taco Shells, Lettuce, Cheese, Salsa",
  },
  {
    _id: "8",
    name: "Зутан шөл",
    price: "54549",
    image: "./8Soup.png",
    ingeredient: "Avocado, Toast, Lemon Juice, Chili Flakes",
  },
  {
    _id: "13",
    name: "Торт",
    price: "54800",
    image: "./13Cake.png",
    ingeredient: "Flour, Eggs, Milk, Butter, Maple Syrup",
  },
  {
    _id: "14",
    name: "Oreo shake",
    price: "15000",
    image: "./14Shake.png",
    ingeredient: "Cucumber, Tomato, Feta Cheese, Olives, Olive Oil",
  },
  {
    _id: "15",
    name: "Chocolate",
    price: "14900",
    image: "./15Choko.png",
    ingeredient: "Chicken, Butter, Tomato, Cream, Spices",
  },
  {
    _id: "16",
    name: "Yoghurt",
    price: "50000",
    image: "./16Yougurt.png",
    ingeredient: "Veggie Patty, Lettuce, Tomato, Cheese, Bun",
  },
  {
    _id: "9",
    name: "Чихэрлэг тахиа",
    price: "34599",
    image: "./9Chicken.png",
    ingeredient: "Cocoa, Sugar, Butter, Flour, Eggs",
  },
  {
    _id: "10",
    name: "Lunch",
    price: "24800",
    image: "./10Lunch.png",
    ingeredient: "Mango, Yogurt, Milk, Honey",
  },
  {
    _id: "11",
    name: "Apple pie",
    price: "20000",
    image: "./11Sandwich.png",
    ingeredient: "Potatoes, Salt, Oil",
  },
  {
    _id: "12",
    name: "Сэндвич",
    price: "24500",
    image: "./12ApplePie.png",
    ingeredient: "Chicken Wings, BBQ Sauce, Garlic, Paprika",
  },
];
