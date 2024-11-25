import express, { response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import animeModel from "./model/anime.js";

mongoose.connect(
  "mongodb+srv://ace12d192:wap3TZLOZeJlgLIq@cluster0.s6jvj.mongodb.net/product"
);
const server = express();
const PORT = 8000;

server.use(cors());

server.get("/", async (req, res) => {
  const result = await animeModel.find({}); //Model dotroosoo find
  res.json({
    success: true,
    data: result,
  });
});

server.post("/create", async (req, res) => {
  const result = await animeModel.create({
    name: "Naruto",
    year: 2091,
  });
  res.json({
    success: true,
    data: result,
  });
});

server.delete("/delete", async (req, res) => {
  const result = await animeModel.deleteOne({
    _id: "6743f304ca7f3a0e6bb58081",
  });
  res.json({
    success: true,
    data: result,
  });
});
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} server ajillaj bna`);
});
