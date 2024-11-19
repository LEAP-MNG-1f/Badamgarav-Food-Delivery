import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function ActionMealCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

// const ProductArray: FoodProductCardPropsArray[] = [
//   {
//     _id: "1",
//     name: "Cheeseburger",
//     price: 5.99,
//     image: "./FoodImg.png",
//     ingredient: "Beef Patty, Cheese, Lettuce, Tomato, Bun",
//   },
//   {
//     _id: "2",
//     name: "Margherita Pizza",
//     price: 8.99,
//     image: "./FoodImg.png",
//     ingredient: "Tomato Sauce, Mozzarella, Basil, Olive Oil",
//   },
//   {
//     _id: "3",
//     name: "Chicken Caesar Salad",
//     price: 7.49,
//     image: "./FoodImg.png",
//     ingredient: "Chicken, Romaine Lettuce, Croutons, Parmesan, Caesar Dressing",
//   },
//   {
//     _id: "4",
//     name: "Spaghetti Bolognese",
//     price: 10.99,
//     image: "./FoodImg.png",
//     ingredient: "Spaghetti, Ground Beef, Tomato Sauce, Onion, Garlic",
//   },
//   {
//     _id: "5",
//     name: "Vegetable Stir Fry",
//     price: 6.99,
//     image: "./FoodImg.png",
//     ingredient: "Broccoli, Carrots, Bell Peppers, Soy Sauce, Ginger",
//   },
//   {
//     _id: "6",
//     name: "Grilled Salmon",
//     price: 12.99,
//     image: "./FoodImg.png",
//     ingredient: "Salmon Fillet, Lemon, Olive Oil, Garlic, Parsley",
//   },
//   {
//     _id: "7",
//     name: "Beef Tacos",
//     price: 4.99,
//     image: "./FoodImg.png",
//     ingredient: "Ground Beef, Taco Shells, Lettuce, Cheese, Salsa",
//   },
//   {
//     _id: "8",
//     name: "Avocado Toast",
//     price: 5.49,
//     image: "./FoodImg.png",
//     ingredient: "Avocado, Toast, Lemon Juice, Chili Flakes",
//   },
//   {
//     _id: "9",
//     name: "Chocolate Brownie",
//     price: 3.99,
//     image: "./FoodImg.png",
//     ingredient: "Cocoa, Sugar, Butter, Flour, Eggs",
//   },
//   {
//     _id: "10",
//     name: "Mango Smoothie",
//     price: 4.49,
//     image: "./FoodImg.png",
//     ingredient: "Mango, Yogurt, Milk, Honey",
//   },
//   {
//     _id: "11",
//     name: "French Fries",
//     price: 2.99,
//     image: "./FoodImg.png",
//     ingredient: "Potatoes, Salt, Oil",
//   },
//   {
//     _id: "12",
//     name: "BBQ Chicken Wings",
//     price: 7.99,
//     image: "./FoodImg.png",
//     ingredient: "Chicken Wings, BBQ Sauce, Garlic, Paprika",
//   },
//   {
//     _id: "13",
//     name: "Pancakes",
//     price: 4.99,
//     image: "./FoodImg.png",
//     ingredient: "Flour, Eggs, Milk, Butter, Maple Syrup",
//   },
//   {
//     _id: "14",
//     name: "Greek Salad",
//     price: 5.99,
//     image: "./FoodImg.png",
//     ingredient: "Cucumber, Tomato, Feta Cheese, Olives, Olive Oil",
//   },
//   {
//     _id: "15",
//     name: "Butter Chicken",
//     price: 11.99,
//     image: "./FoodImg.png",
//     ingredient: "Chicken, Butter, Tomato, Cream, Spices",
//   },
//   {
//     _id: "16",
//     name: "Veggie Burger",
//     price: 6.99,
//     image: "./FoodImg.png",
//     ingredient: "Veggie Patty, Lettuce, Tomato, Cheese, Bun",
//   },
//   {
//     _id: "17",
//     name: "Shrimp Tacos",
//     price: 9.99,
//     image: "./FoodImg.png",
//     ingredient: "Shrimp, Taco Shells, Cabbage, Sour Cream, Lime",
//   },
//   {
//     _id: "18",
//     name: "Apple Pie",
//     price: 5.49,
//     image: "./FoodImg.png",
//     ingredient: "Apples, Sugar, Butter, Flour, Cinnamon",
//   },
//   {
//     _id: "19",
//     name: "Chocolate Milkshake",
//     price: 3.99,
//     image: "./FoodImg.png",
//     ingredient: "Milk, Chocolate Syrup, Ice Cream",
//   },
//   {
//     _id: "20",
//     name: "Chicken Fried Rice",
//     price: 8.49,
//     image: "./FoodImg.png",
//     ingredient: "Rice, Chicken, Soy Sauce, Carrots, Egg",
//   },
// ];

// const MenuPage = () => {
//   return (
//     <main>
//       <Header />
//       <CategoryZone />
//       <MenuProductZone products={ProductArray} />
//       <Footer />
//     </main>
//   );
// };
