import { FoodType } from "../homepage/foods/MorningFoods";
import { AddIcon } from "../svg/AddIcon";
import { CloseIcon } from "../svg/CloseIcon";
import { MinusIcon } from "../svg/MinusIcon";

export const OrderCard = ({ image, name, ingredient, price }: FoodType) => {
  return (
    <div className="w-[538px] h-[230px] p-6 ">
      <div className="flex gap-4 p-4 border-t border-t-[#D6D8DB] border-b border-b-[#D6D8DB]">
        <img className="w-[245px]" src={image} alt="" />
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-[2px]">
              <p className="text-[18px] font-[600] leading-[27px]">{name}</p>
              <p className="text-[18px] font-[600] leading-[27px] text-[#18BA51]">
                {price}₮
              </p>
            </div>
            <button>
              <CloseIcon />
            </button>
          </div>
          <p className="text-[16px] font-[400] leading-[19.09px] text-[#767676]">
            {ingredient}
          </p>
          <div className="flex gap-2 items-center ">
            <MinusIcon />
            <p className="w-[45px] text-center">Тоо</p>
            <AddIcon />
          </div>
        </div>
      </div>
    </div>
  );
};