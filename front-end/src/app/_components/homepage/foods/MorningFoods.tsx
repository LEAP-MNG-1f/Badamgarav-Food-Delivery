import { useEffect, useState } from "react";
import { NextIcon } from "../../svg/Next";
import { PlusIcon } from "../../svg/PlusIcon";
import { FoodCard } from "../FoodCard";
import { FoodType } from "../../types/types";
import { API_URL } from "@/constant/constant";
import { groupBy } from "lodash";
import { Typography } from "@mui/material";

export const FoodCardComponent = () => {
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

  // console.log(foods);

  const groupedData = groupBy(foods, (food) => food?.category.name);
  // console.log(groupedData);

  useEffect(() => {
    fetchAlldata();
  }, []);
  return (
    <div className="w-full flex justify-center mb-[80px]">
      <div className="container flex flex-col gap-[80px]">
        <div className="flex flex-col gap-6">
          {Object.keys(groupedData).map((categoryName) => (
            <div className="flex flex-col gap-6" key={categoryName}>
              <div className="flex justify-between">
                <div className="flex py-4 items-center gap-[6px]">
                  <PlusIcon />
                  <Typography sx={{ fontWeight: 700, fontSize: 22 }}>
                    {categoryName}
                  </Typography>
                </div>
                <button className="mt-4 text-[var(--green)] text-sm flex gap-2 items-center">
                  Бүгдийг харах
                  <NextIcon />
                </button>
              </div>
              <div className="flex justify-between">
                {groupedData[categoryName]?.map((food) => {
                  return (
                    <div key={food._id}>
                      <FoodCard
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
          ))}
        </div>
      </div>
    </div>
  );
};
