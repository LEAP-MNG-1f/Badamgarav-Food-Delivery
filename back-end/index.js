import express, { response } from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import { configDotenv } from "dotenv";
import connectDb from "./connectDB.js";

const server = express();
const PORT = 8000;

server.use(cors());

server.get("/", async (req, response) => {
  const db = await connectDb();

  let collection = db.collection("movies");
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
