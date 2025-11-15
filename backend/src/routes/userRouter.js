import { Router } from "express";
import userController from "../controllers/userController.js";

const router = Router();

router.get("/", userController.getAll);
router.post("/register", userController.register);
router.post("/login", userController.login);

export default router;
