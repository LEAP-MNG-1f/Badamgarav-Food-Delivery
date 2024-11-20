import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { AddIcon } from "../svg/AddIcon";
import { MinusIcon } from "../svg/MinusIcon";

export type FoodType = {
  _id: string;
  name: string;
  image: string;
  ingredient: string;
  price: number;
};

export type CardListProps = {
  foods: FoodType[];
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const CardList = (props: CardListProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="!w-full flex justify-center item-center mb-[120px]">
      <div className="container grid grid-cols-4  gap-4">
        {props.foods.map((food, index) => {
          return (
            <div key={index} className="!w-[282px] !h-[256px]">
              <Button
                variant="outlined"
                onClick={handleClickOpen}
                className="!w-[282px] !h-[256px] !flex !flex-col !gap-[14px] !border-none !items-start !p-0"
              >
                <img
                  className="!w-[282px] !h-[186px] !rounded-[16px]"
                  src={food.image}
                  alt=""
                />

                <div className="!flex !flex-col !gap-1 !items-start">
                  <p className="!text-[18px] !font-[600] !leading-[27px] !text-black">
                    {food.name}
                  </p>
                  <p className="!text-[18px] !font-[600] !leading-[27px] !text-[#18BA51] ">
                    {food.price}₮
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
                // aria-labelledby="customized-dialog-title"
                open={open}
              >
                <div className="!w-[981px] h-[564px] flex gap-[33px] !rounded-[16px] p-8">
                  <img className="w-[500px]" src={food.image} alt="" />
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
                          {food.name}
                        </p>
                        <p className="text-[18px] font-[600] leading-[27px] text-[#18BA51]">
                          {food.price}₮
                        </p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="text-[18px] font-[600] leading-[27px]">
                          Орц
                        </p>
                        <p className="text-[16px] font-[400] leading-[19.09px] bg-[#F6F6F6] p-2 rounded-lg">
                          {food.ingredient}
                        </p>
                      </div>

                      <p className="text-[18px] font-[600] leading-[27px]">
                        Тоо
                      </p>
                      <div className="flex justify-between">
                        <button>
                          <MinusIcon />
                        </button>
                        <p>-</p>
                        <button>
                          <AddIcon />
                        </button>
                      </div>
                      <button className="w-full h-[48px] bg-[#18BA51] py-2 px-4 text-[16px] font-[400] leading-[19.09px] rounded-[4px] text-white text-center">
                        Сагслах
                      </button>
                    </div>
                  </div>
                </div>
              </BootstrapDialog>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialogContent-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiDialogActions-root': {
//     padding: theme.spacing(1),
//   },
// }));

// export default function CustomizedDialogs() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open dialog
//       </Button>
//       <BootstrapDialog
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >
//         <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
//           Modal title
//         </DialogTitle>
//         <IconButton
//           aria-label="close"
//           onClick={handleClose}
//           sx={(theme) => ({
//             position: 'absolute',
//             right: 8,
//             top: 8,
//             color: theme.palette.grey[500],
//           })}
//         >
//           <CloseIcon />
//         </IconButton>
//         <DialogContent dividers>
//           <Typography gutterBottom>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//             consectetur ac, vestibulum at eros.
//           </Typography>
//           <Typography gutterBottom>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
//             Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
//           </Typography>
//           <Typography gutterBottom>
//             Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
//             magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
//             ullamcorper nulla non metus auctor fringilla.
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button autoFocus onClick={handleClose}>
//             Save changes
//           </Button>
//         </DialogActions>
//       </BootstrapDialog>
//     </React.Fragment>
//   );
// }
