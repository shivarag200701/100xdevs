import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose.connect(process.env.MONGODB_URL);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

export const toDo = mongoose.model("todo", todoSchema);
