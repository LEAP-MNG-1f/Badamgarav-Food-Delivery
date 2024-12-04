import Drawer from "@mui/material/Drawer";
import { LeftIcon } from "../svg/LeftIcon";
import React, { useState } from "react";
import { useFoodContext } from "@/provider/Food";
import { CloseIcon } from "../svg/CloseIcon";
import { MinusIcon } from "../svg/MinusIcon";
import { AddIcon } from "../svg/AddIcon";
import Link from "next/link";
import { BoxIcon } from "../svg/Box";

type Anchor = "right";

export default function RightDrawer() {
  const { count, increment, decrement } = useFoodContext();
  const { cartFoods, totalPrice } = useFoodContext();
  const [state, setState] = useState({
    right: false,
  });

  // console.log(cartFoods);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      setState({ ...state, [anchor]: open });
    };

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            className="!flex !justify-center !items-center !text-[14px] gap-2  !leading-[20px] !font-[700] !text-black !text-align"
            onClick={toggleDrawer(anchor, true)}
          >
            <div>
              <BoxIcon />
            </div>
            <p className="text-center ">Сагс</p>
          </button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            className="!w-[586px]  !flex !flex-col !h-full"
          >
            <div className="flex flex-col h-full">
              <div className="flex gap-[171px] items-center mt-[26px] ml-6">
                <LeftIcon />
                <p className="text-[20px] font-[900] leading-[30px]">
                  Таны сагс
                </p>
              </div>
              <div className="flex-grow overflow-auto p-4 ">
                {cartFoods?.map((food) => {
                  return (
                    <div key={food?._id} className="w-[538px]  p-6">
                      <div className="flex gap-4 p-4 border-t border-t-[#D6D8DB] border-b border-b-[#D6D8DB]">
                        <img className="w-[245px]" src={food?.image} alt="" />
                        <div className="flex flex-col gap-4">
                          <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-[2px]">
                              <p className="text-[18px] font-[600] leading-[27px]">
                                {food?.name}
                              </p>
                              <p className="text-[18px] font-[600] leading-[27px] text-[#18BA51]">
                                {Number(food?.price) * food?.count!}₮
                              </p>
                            </div>
                            <button>
                              <CloseIcon />
                            </button>
                          </div>
                          <p className="text-[16px] font-[400] leading-[19.09px] text-[#767676]">
                            {food?.ingeredient}
                          </p>
                          <div className="flex gap-2 items-center ">
                            <button onClick={decrement}>
                              <MinusIcon />
                            </button>
                            <p className="w-[45px] text-center">{count}</p>
                            <button onClick={increment}>
                              <AddIcon />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-[586px] h-[172px] px-[8] py-[30px] flex justify-center items-center  gap-[10px]  border-t border-t-[#BBBECD33] sticky bottom-0">
              <div className="w-[256px] flex flex-col">
                <p className="text-[18px] font-[400] leading-[27px] text-[#5E6166]">
                  Нийт төлөх дүн
                </p>
                <p className="text-[18px] font-[700] leading-[27px]">
                  {totalPrice} ₮
                </p>
              </div>
              {cartFoods && cartFoods.length > 0 ? (
                <Link
                  href={"./order-confirmation"}
                  className="w-[256px] h-[48px] rounded-1 text-[16px] font-[400] leading-[19.09px] bg-[#18BA51] text-white px-4 py-2 flex justify-center items-center"
                >
                  Захиалах
                </Link>
              ) : (
                <button
                  className="w-[256px] h-[48px] rounded-1 text-[16px] font-[400] leading-[19.09px] bg-[#18BA51] text-white px-4 py-2 flex justify-center items-center"
                  onClick={() =>
                    alert(
                      "Таны сагс хоосон байна. Захиалах бүтээгдэхүүнээ сонгоно уу"
                    )
                  }
                >
                  Захиалах
                </button>
              )}
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
