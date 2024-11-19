import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import { configDotenv } from "dotenv";

const server = express();
const PORT = 8000;

server.use(cors());

server.post("/image-upload", async (request, response) => {
  try {
    cloudinary.config(process.env.CLOUDINARY_URL);
    const uploadResult = await cloudinary.uploader.upload("./assets/Egg.png");
    console.log(uploadResult);
  } catch (error) {
    console.log("Ordinary error", error);
  }
});

server.get("/", (request, response) => {
  response.send("Hello world");
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} server ajillaj bna`);
});

// cloud_name: "djrszvzpu",
// api_key: "187732991969241",
// api_secret: "ImnvJw9FkaRfoic5cxoPliWxWMQ", // Click 'View API Keys' above to copy your API secret
