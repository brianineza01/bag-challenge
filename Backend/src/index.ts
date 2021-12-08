import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import { connectDB } from "./config/connection";
import { auth as authRoutes } from "./routes";
import passportConfig from "./config/passport";
import passport from "passport";
import statusLogger from "./helpers/logger";

dotenv.config();
connectDB();
const port = process.env.PORT || 8000;
const app = express();

app.use(passport.initialize());
// app.use(passport.session());
passportConfig();
app.use(express.json());
app.use(cors());

app.use("/api/v1", statusLogger(authRoutes));

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
mongoose.connection.once("open", async () => {
  app.listen(port, () => {
    console.log(
      `Database successfully connected and the server is listening on port localhost:${port} .`
    );
  });
});
