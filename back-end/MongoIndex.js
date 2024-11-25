import express, { response } from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import { configDotenv } from "dotenv";
import connectDb from "./connectDB.js";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const server = express();
const PORT = 8000;

server.use(cors());

mongoose.connect;

server.get("/", async (req, response) => {
  const db = await connectDb();

  let collection = db.collection("Document1");
  let results = await collection.find().limit(10).toArray();

  console.log(results);
  response.json({
    success: true,
    date: results,
  });
});

server.post("/image-upload", async (request, response) => {
  try {
    cloudinary.config({
      cloud_name: "djrszvzpu",
      api_key: "187732991969241",
      api_secret: "ImnvJw9FkaRfoic5cxoPliWxWMQ", // Click 'View API Keys' above to copy your API secret
    });
    const uploadResult = await cloudinary.uploader.upload("./assets/Egg.png");
    console.log(uploadResult);
  } catch (error) {
    console.log("Ordinary error", error);
  }
});

server.get("/", (request, response) => {
  response.send(["Hello world", "Badamaa"]);
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} server ajillaj bna`);
});

server.post("/create-user", async (req, response) => {
  const db = await connectDb();

  const result = await collection.insertMany([
    {
      date: newDate,
    },
  ]);

  response.json({
    succes: true,
    data: result,
  });
});

const newDate = new Date();
server.put("/update-user", async (req, response) => {
  const db = await connectDb();

  const collection = db.collection("product");

  const result = await collection.updateOne(
    {
      _id: new ObjectId("674002d4190a083bcb7331bc"),
    },
    {
      $set: { price: "8800", date: newDate },
    }
  );

  response.json({
    succes: true,
    data: result,
  });
});

server.delete("/delete-user", async (req, response) => {
  const db = await connectDb();

  const collection = db.collection("product");
  const result = await collection.deleteOne({
    _id: new ObjectId("674002d4190a083bcb7331bc"),
  });

  response.json({
    succes: true,
    data: result,
  });
});
