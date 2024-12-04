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
  totalPrice: number;
  cartFoods: CartItemsType[];
  setFoods: React.Dispatch<React.SetStateAction<any[]>>;
  setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
  setCartFoods: React.Dispatch<React.SetStateAction<CartItemsType[]>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
  fetchFoods: () => Promise<void>;
  fetchCategories: () => Promise<void>;
  increment: () => void;
  decrement: () => void;
  addToCart: (
    _id: string,
    image: string,
    name: string,
    ingeredient: string,
    price: string,
    count: number
  ) => void;
  calculateTotal: () => void;
}
// Create the context
const FoodContext = createContext<FoodContextType | undefined>(undefined);

// Provider component
export const FoodProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [foods, setFoods] = useState<any[]>([]);
  const [category, setCategories] = useState<any[]>([]);
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

  const [totalPrice, setTotalPrice] = useState<number>();

  const calculateTotal = () => {
    const total = cartFoods.reduce((acc, current) => {
      return acc + Number(current.price) * current.count!;
    }, 0);
    setTotalPrice(total);
  };

  useEffect(() => {
    fetchFoods();
    fetchCategories();
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [cartFoods]);

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
    totalPrice,
    setTotalPrice,
    calculateTotal,
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
