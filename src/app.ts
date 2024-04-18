import express from "express";
const app = express();
import cors from "cors";
import userRouter from "./router/userRouter.js";

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

export default app
