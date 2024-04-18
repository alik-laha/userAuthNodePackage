import express from "express";
const router = express.Router();
import Signup from "../controller/user/Signup.js";
import CheckUser from "../middleware/checkUser.js";

router.post("/signup", CheckUser, Signup);

export default router;