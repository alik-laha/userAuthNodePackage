import express from "express";
const app = express();
import cors from "cors";
import userRouter from "./router/userRouter.js";
import cookiePerser from "cookie-parser";

app.use(cors());
app.use(cookiePerser());
app.use(express.json());

app.use("/user", userRouter);

export default app
