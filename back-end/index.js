import express, { application, response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/userRoute.js";
import { orderRouter } from "./routes/orderRoute.js";
import { foodRouter } from "./routes/foodRoute.js";
import { categoryRouter } from "./routes/categoryRoute.js";
import bodyParser from "body-parser";

mongoose.connect(
  "mongodb+srv://badamaa312:uZuDbfFT9UrqWqE7@cluster0.i47sl.mongodb.net/food-delivery"
);

const server = express();
const PORT = 5000;

server.use(cors());
server.use(bodyParser.json());

server.use("/api", userRouter);
server.use("/api", orderRouter);
server.use("/api", foodRouter);
server.use("/api", categoryRouter);

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} server ajillaj bna`);
});
