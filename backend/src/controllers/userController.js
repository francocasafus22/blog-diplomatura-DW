import User from "../models/User.js";
import {
  loginService,
  registerService,
  editProfile,
} from "../services/userService.js";

export default class userController {
  static async getAll(req, res) {
    try {
      const users = await User.find().select("-password -__v");
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Hubo un error al obtener los usuarios" });
    }
  }

  static async edit(req, res, next) {
    try {
      await editProfile({ data: req.body, user: req.user });

      res.json({ message: "Perfil editado correctaments" });
    } catch (error) {
      next(error);
    }
  }

  static async register(req, res) {
    try {
      const { email, password, firstName, lastName, dni, username } = req.body;

      await registerService({
        email,
        password,
        firstName,
        lastName,
        dni,
        username,
      });

      res.status(201).json({ message: "Usuario registrado correctamente" });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const { token } = await loginService(email, password);

      res.json({ token });
    } catch (error) {
      next(error);
    }
  }
}
