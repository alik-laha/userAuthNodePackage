import express from "express";
const app = express();
import cors from "cors";

app.use(cors());
app.use(express.json());



export default app
