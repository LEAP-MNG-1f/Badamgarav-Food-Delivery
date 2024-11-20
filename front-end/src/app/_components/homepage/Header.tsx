import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";

import { BoxIcon } from "../svg/Box";
import { LogoIcon } from "../svg/Logo";

function Header() {
  return (
    <AppBar className="!bg-white !h-[57px] !flex !items-center !justify-center !shadow-none !w-full">
      <Container className="!container !flex !items-center !justify-between !p-0">
        <div className="!flex !gap-[24px]">
          <LogoIcon />
          <div className="!flex !gap-[8px] ">
            <Button className="!text-[14px] !leading-[16px] !font-[700] !text-black !px-4 !py-2">
              Нүүр
            </Button>
            <Button className="!text-[14px] !leading-[16px] !font-[700] !text-black !px-4 !py-2">
              Хоолны цэс
            </Button>
            <Button className="!text-[14px] !leading-[16px] !font-[700] !text-black !px-4 !py-2">
              Хүргэлтийн бүс
            </Button>
          </div>
        </div>
        <div className="!flex !gap-2">
          <Button className="!flex !gap-[8px] !justify-center !items-center !px-4 !py-2">
            <BoxIcon />
            <Typography className="!text-[14px] !leading-[20px] !font-[700] !text-black !text-align">
              Сагс
            </Typography>
          </Button>
          <Button className="!flex !gap-[8px] !justify-center !items-center !px-4 !py-2">
            <PermIdentityIcon sx={{ color: "text.primary" }} />
            <Typography className="!text-[14px] !leading-[20px] !font-[700] !text-black !text-align">
              Нэвтрэх
            </Typography>
          </Button>
        </div>
      </Container>
    </AppBar>
  );
}
export default Header;
