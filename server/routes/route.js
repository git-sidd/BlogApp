import { Router } from "express";
import { signUpHandler } from "../controllers/user-controller.js";
const router=Router();

router.post("/signup",signUpHandler);


export default router;