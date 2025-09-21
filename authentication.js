import express from "express";
import { z } from "zod";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const app = express();
mongoose.connect(
  "mongodb+srv://mikemax1998:Sivrahul%401998@cluster0.qedxute.mongodb.net/usersNew?retryWrites=true&w=majority&appName=Cluster0"
);
const key = "shiva200701";

app.use(express.json());

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const User = mongoose.model("Users", userSchema);

//validation middleware
function validation(req, res, next) {
  const body = req.body;
  const userSchema = z.object({
    username: z.string(),
    password: z.string(),
  });
  const response = userSchema.safeParse(body);
  if (!response.success) {
    res.status(403).json({
      msg: "invalid input",
    });
  }
  next();
}

app.post("/signin", validation, async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const token = jwt.sign(username, key);

  const exists = await User.findOne({ username: username });
  if (exists) {
    res.send("username already taken");
    return;
  }

  const user = new User({
    username,
    password,
  });

  await user.save();

  res.send(token);
});

app.get("/users", async (req, res) => {
  const token = req.headers.authorization;

  try {
    const decode = jwt.verify(token, key);
    res.send(JSON.stringify(users));
  } catch (error) {
    res.status(403).send("Invalid token");
  }
});

app.listen(3000, () => {
  console.log("running in port 3000");
});
