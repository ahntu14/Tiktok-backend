import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { errorHandlingMiddleware } from "./middlewares/errorHandlingMiddleware.js";
import { env } from "./config/environment.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(errorHandlingMiddleware);

mongoose
  .connect(env.MONGODB_URI)
  .then(() => {
    app.listen(env.APP_PORT, () => {
      console.log(
        `Server is running on http://${env.HOST_NAME}:${env.APP_PORT}`
      );
    });

    console.log("Connected to MongoDbbb");
  })
  .catch((error) => console.log(error));
