import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRouter.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server en http://localhost:${PORT}`);
});
