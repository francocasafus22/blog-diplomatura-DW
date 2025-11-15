import User from "../models/user.js";
import { checkPassword, hashPassword } from "../utils/auth.js";
import { createToken } from "../utils/jwt.js";

export default class userController {
  static async getAll(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Hubo un error al obtener los usuarios" });
    }
  }

  static async register(req, res) {
    try {
      const { email } = req.body;

      const userExist = await User.findOne({ email });

      if (userExist) {
        const error = new Error("El Email ya está en uso");
        res.status(409).json({ error: error.message });
        return;
      }

      const user = await User.create(req.body);
      user.password = await hashPassword(user.password);
      await user.save();

      res.status(201).json({ message: "Usuario registrado correctamente" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      const userExist = await User.findOne({ email });

      if (!userExist) {
        const error = new Error("No existe ningún usuario con ese email");
        res.status(404).json({ error: error.message });
        return;
      }

      const passwordCorrect = await checkPassword(password, userExist.password);

      if (!passwordCorrect) {
        const error = new Error("Contraseña incorrecta");
        res.status(401).json({ error: error.message });
        return;
      }

      const token = createToken({ id: userExist._id });

      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
