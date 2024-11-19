import * as React from "react";

import { Box, Stack, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Stack
      className="!w-full !flex !justify-center mt-[120px] mb-[120px]"
      direction="row"
    >
      <Box
        className="w-full h-[788px] flex justify-center"
        sx={{
          width: 1,
          height: 1000,
          borderRadius: 1,
          backgroundImage: "url('./HeroBg.png'), #18BA51",
          bgcolor: "#18BA51",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      >
        <Box className="w-[1200px] flex justify-between items-center">
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
      </Box>
    </Stack>
  );
}

// export default function Hero() {
//   return (
//     <div
//       style={{
//         background: "url('./HeroBg.png'), #18BA51",
//       }}
//       className="w-full h-[788px] flex justify-center"
//     >
//       <div className="w-[1200px] flex justify-between items-center">
//         <div className="absolute flex flex-col  justify-center items-center gap-[23px] top-[276.65px]">
//           <p className="text-[55px] font-[600] leading-[49.5px] w-[384px] text-white">
//             Pinecone Food delivery
//           </p>
//           <p className="border border-white w-[383px]"></p>
//           <p className="text-[22px] font-700 leading-[26.4px] w-[384px] text-white">
//             Horem ipsum dolor sit amet, consectetur adipiscing elit.
//           </p>
//         </div>
//         <div className="absolute left-[1132px]">
//           <img className="w-[588px] h-[438px]" src="./Hero.png" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// }
