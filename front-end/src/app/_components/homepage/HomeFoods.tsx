import { useEffect, useState } from "react";

import { FoodType } from "../types/types";
import { API_URL } from "@/constant/constant";
import { PlusIcon } from "../svg/PlusIcon";
import { NextIcon } from "../svg/Next";
import { FoodCard } from "./FoodCard";

export const HomeFoods = () => {
  const [foods, setFoods] = useState<FoodType[]>([]);

  const fetchAlldata = async () => {
    try {
      const response = await fetch(`${API_URL}/api/foods`);
      const data = await response.json();
      setFoods(data?.data);
    } catch (error) {
      console.log("all data error", error);
    }
  };

  console.log(foods);

  useEffect(() => {
    fetchAlldata();
  }, []);

  return (
    <div className="w-full flex justify-center mb-[80px]">
      <div className="container flex flex-col gap-[80px]">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            {foods.map((food) => {
              return (
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                      <PlusIcon />
                      <p className="text-[22px] font-[700] leading-[33px]">
                        {food.category.name}
                      </p>
                    </div>
                    <button className="flex gap-1 items-center">
                      <p className="text-[14px] font-[400] leading-[16.71px] text-[#18BA51]">
                        Бүгдийг харах
                      </p>
                      <NextIcon />
                    </button>
                  </div>
                  <FoodCard
                    key={food._id}
                    image={food.image}
                    name={food.name}
                    price={food.price}
                    ingredient={food.ingeredient}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// return <div key={food._id}>{food.name}</div>;
