import express, { application, response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import animeModel from "./model/anime.js";
import userRouter from "./routes/userRoute.js";
import { createUser } from "./controllers/userController.js";

mongoose.connect(
  "mongodb+srv://ace12d192:wap3TZLOZeJlgLIq@cluster0.s6jvj.mongodb.net/food-delivery"
);

const server = express();
const PORT = 5000;

server.use(cors());

server.use("/api", userRouter);

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} server ajillaj bna`);
});
