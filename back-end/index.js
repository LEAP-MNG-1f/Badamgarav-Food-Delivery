import express, { application, response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/userRoute.js";
import { orderRouter } from "./routes/orderRoute.js";
import { categoryRouter } from "./routes/categoryRoute.js";
// import { foodRouter } from "./routes/foodRoute.js";

mongoose.connect(
  "mongodb+srv://badamaa312:uZuDbfFT9UrqWqE7@cluster0.i47sl.mongodb.net/food-delivery"
);

const server = express();
const PORT = 5000;

server.use(cors());

server.use("/api", userRouter);
server.use("/api", orderRouter);
server.use("/api", categoryRouter);
// server.use("/api", foodRouter);

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} server ajillaj bna`);
});
