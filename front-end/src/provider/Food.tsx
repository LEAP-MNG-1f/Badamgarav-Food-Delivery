"use client";
import {
  CartItemsType,
  CategoryType,
  FoodType,
} from "@/app/_components/types/types";
import { API_URL } from "@/constant/constant";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface FoodContextType {
  foods: FoodType[];
  category: CategoryType[];
  count: number;
  cartFoods: CartItemsType[];
  setFoods: React.Dispatch<React.SetStateAction<any[]>>;
  setCartFoods: React.Dispatch<React.SetStateAction<CartItemsType[]>>;
  fetchFoods: () => Promise<void>;
  increment: () => void;
  decrement: () => void;
  addToCart: (
    _id: string,
    image: string,
    name: string,
    ingredient: string,
    price: string,
    count: number
  ) => void;
}
// Create the context
const FoodContext = createContext<FoodContextType | undefined>(undefined);

// Provider component
export const FoodProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [foods, setFoods] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [count, setCount] = useState(1);
  const [cartFoods, setCartFoods] = useState<CartItemsType[]>([]);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const fetchFoods = async () => {
    try {
      const response = await fetch(`${API_URL}/api/foods`);
      const dataFoods = await response.json();

      setFoods(dataFoods?.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${API_URL}/api/categories`);
      const dataCategories = await response.json();

      setCategories(dataCategories?.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = (
    _id: string,
    image: string,
    name: string,
    ingeredient: string,
    price: string,
    count: number
  ) => {
    const selectedFood = {
      _id,
      image,
      name,
      ingeredient,
      price,
      count,
      quantity: 1,
    };

    const existingFood = cartFoods.find((food) => food._id === _id);

    if (existingFood) {
      const updatedFood = cartFoods.map((food) => {
        if (food._id === _id) {
          return {
            ...food,
            count: food.count! + 1,
          };
        }
        return food;
      });
      setCartFoods(updatedFood);
      setCount(1);
    } else {
      console.log(selectedFood);

      setCartFoods((prevCartFoods) => [...prevCartFoods, selectedFood]);
      setCount(1);
    }
  };

  useEffect(() => {
    fetchFoods();
    fetchCategories();
  }, []);

  // Context value
  const contextValue = {
    foods,
    setFoods,
    fetchFoods,
    addToCart,
    count,
    setCount,
    increment,
    decrement,
    cartFoods,
  };

  return (
    <FoodContext.Provider value={contextValue}>{children}</FoodContext.Provider>
  );
};

// Custom hook to use the context
export const useFoodContext = () => {
  const context = useContext(FoodContext);
  if (context === undefined) {
    throw new Error("useFoodContext must be used within a FoodProvider");
  }
  return context;
};
