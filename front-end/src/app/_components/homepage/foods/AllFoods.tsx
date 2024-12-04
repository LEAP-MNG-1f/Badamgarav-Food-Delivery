import { NextIcon } from "../../svg/Next";
import { PlusIcon } from "../../svg/PlusIcon";
import { FoodType } from "../../types/types";
import { FoodCard } from "../FoodCard";

export type CardListProps = {
  foods: FoodType[];
};

export const AllFoodsPage = (props: CardListProps) => {
  return (
    <div className="w-full flex justify-center mb-[80px]">
      <div className="container flex flex-col gap-[80px]">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <PlusIcon />
              <p className="text-[22px] font-[700] leading-[33px]">Амттан</p>
            </div>
            <button className="flex gap-1 items-center">
              <p className="text-[14px] font-[400] leading-[16.71px] text-[#18BA51]">
                Бүгдийг харах
              </p>
              <NextIcon />
            </button>
          </div>
          <div className="flex justify-between">
            {props.foods.map((food) => {
              return (
                <FoodCard
                  _id={food._id}
                  image={food.image}
                  name={food.name}
                  price={food.price}
                  ingeredient={food.ingeredient}
                  category={food.category}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
