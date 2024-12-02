import { Box, Stack, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import { API_URL } from "@/constant/constant";

export type FoodType = {
  _id: string;
  image: string;
  ingeredient: string;
  name: string;
  price: string;
  category: CategoryType;
};

export type CategoryType = {
  _id: string;
  name: string;
};

export default function Hero() {
  const [allDatas, setAllDatas] = useState<FoodType[]>([]);

  const fetchAlldata = async () => {
    try {
      const response = await fetch(`${API_URL}/api/foods`);
      const data = await response.json();
      setAllDatas(data?.data);
    } catch (error) {
      console.log("all data error", error);
    }
  };

  // console.log(allDatas);

  useEffect(() => {
    fetchAlldata();
  }, []);

  return (
    <div
      className="w-full h-[788px] flex justify-center"
      style={{
        background: "url('./HeroBg.png'), #18BA51",
      }}
    >
      <Box className="container flex justify-between items-center">
        {allDatas.map((data) => {
          return <div key={data._id}>{data.name}</div>;
        })}
        <Box className="absolute flex flex-col  justify-center items-center gap-[23px] top-[276.65px]">
          <Typography className="text-[55px] font-[600] leading-[49.5px] w-[384px] text-white">
            Pinecone Food delivery
          </Typography>
          <Typography className="border border-white w-[383px]"></Typography>
          <Typography className="text-[22px] font-700 leading-[26.4px] w-[384px] text-white">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Box>
        <Box className="absolute left-[1132px]">
          <img className="w-[588px] h-[438px]" src="./Hero.png" alt="" />
        </Box>
      </Box>
    </div>
  );
}
