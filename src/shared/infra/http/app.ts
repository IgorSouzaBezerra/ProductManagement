/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import-helpers/order-imports */
import "reflect-metadata";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import swaggerUi from "swagger-ui-express";

import swaggerFile from "../../../../docs/swagger.json";
import { AppError } from "../../errors/AppError";
import { router } from "./routes";

import "../../container";
import "../mongo";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
