import { Router } from "express";
import userController from "../controllers/userController.js";
import errorInputsHandler from "../middlewares/validation.middleware.js";
import { body } from "express-validator";

const router = Router();

router.get("/", userController.getAll);
router.post(
  "/register",
  body("firstName").notEmpty().withMessage("El nombre es obligatorio"),
  body("lastName").notEmpty().withMessage("El apellido es obligatorio"),
  body("username").notEmpty().withMessage("El username es obligatorio"),
  body("email").isEmail().withMessage("El email no es válido"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("La contraseña tiene un minimo de 8 carácteres"),
  errorInputsHandler,
  userController.register,
);
router.post(
  "/login",
  body("password").notEmpty().withMessage("La contraseña es obligatoria"),
  body("email").isEmail().withMessage("El email no es válido"),
  errorInputsHandler,
  userController.login,
);

export default router;
