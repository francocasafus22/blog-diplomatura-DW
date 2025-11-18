import { Schema, model, Types } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    rol: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  },
);

const User = model("User", userSchema);

export default User;
