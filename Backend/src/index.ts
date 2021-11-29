import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { connectDB } from "./db/connection";
import { auth as authRoutes } from "./routes";

dotenv.config();
connectDB();
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 8000;

mongoose.connection.once("open", async () => {
  console.log("Connection opened");
});

app.use("/api/v1", authRoutes);

app.use("/", (_req, res) => {
  res.status(200).send({
    message: "WELCOME TO THE BAG-CODING CHALLENGE BACKEND",
  });
});

// Route to handle not found
app.use((_req, res) =>
  res.status(404).send({
    status: 404,
    error: "PAGE NOT FOUND",
  })
);

app.listen(port, () => {
  console.log(`Server is running on port localhost:${port} .`);
});
