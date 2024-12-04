import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";
import { MinusIcon } from "../svg/MinusIcon";
import { AddIcon } from "../svg/AddIcon";
import { FoodType } from "../types/types";
import { useFoodContext } from "@/provider/Food";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const FoodCard = ({
  _id,
  image,
  name,
  price,
  ingeredient,
  category,
}: FoodType) => {
  const { count, increment, decrement, addToCart } = useFoodContext();
  const [open, setOpen] = useState(false);

  const value = useFoodContext();

  // console.log(value);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleAddToCart = () => {
    addToCart(_id, image, name, ingeredient, price, count);
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className="!w-[282px] !h-[256px] !flex !flex-col !gap-[14px] !border-none !items-start !p-0"
      >
        <img
          className="!w-[282px] !h-[186px] !rounded-[16px]"
          src={image}
          alt=""
        />

        <div className="!flex !flex-col !gap-1 !items-start">
          <p className="!text-[18px] !font-[600] !leading-[27px] !text-black">
            {name}
          </p>
          <p className="!text-[18px] !font-[600] !leading-[27px] !text-[#18BA51] ">
            {price}₮
          </p>
        </div>
      </Button>
      <BootstrapDialog
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "16px",
            maxWidth: 981,
          },
        }}
        fullWidth={true}
        onClose={handleClose}
        open={open}
      >
        <div className="!w-[981px] h-[564px] flex gap-[33px] !rounded-[16px] p-8">
          <img className="w-[500px]" src={image} alt="" />
          <div className="!w-[384px]">
            <IconButton
              className="!p-0 !left-[365px]"
              aria-label="close"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <div className="flex flex-col gap-8 mt-7">
              <div className="flex flex-col gap-[2px]">
                <p className="text-[28px] font-[700] leading-[33.41px]">
                  {name}
                </p>
                <p className="text-[18px] font-[600] leading-[27px] text-[#18BA51]">
                  {price}₮
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[18px] font-[600] leading-[27px]">Орц</p>
                <p className="text-[16px] font-[400] leading-[19.09px] bg-[#F6F6F6] p-2 rounded-lg">
                  {ingeredient}
                </p>
              </div>

              <p className="text-[18px] font-[600] leading-[27px]">Тоо</p>
              <div className="flex justify-between">
                <button onClick={decrement}>
                  <MinusIcon />
                </button>

                <p className="p-2 text-[18px] "> {count}</p>
                <button onClick={increment}>
                  <AddIcon />
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <button
                  type="submit"
                  className="w-full h-[48px] bg-[#18BA51] py-2 px-4 text-[16px] font-[400] leading-[19.09px] rounded-[4px] text-white text-center"
                  onClick={handleAddToCart}
                >
                  Сагслах
                </button>
              </form>
            </div>
          </div>
        </div>
      </BootstrapDialog>
    </div>
  );
};
