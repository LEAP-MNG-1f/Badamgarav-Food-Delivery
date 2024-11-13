import express from "express";
import cors from "cors";

const server = express();
const PORT = 8000;

server.use(cors());
server.get("/", (request, response) => {
  response.send("Hello world");
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} server ajillaj bna`);
});
