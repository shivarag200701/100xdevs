import express from "express";
import { z } from "zod";
import jwt from "jsonwebtoken";

const app = express();
const key = "shiva200701";
const users = ["shiva", "govind", "sohan", "kurapati", "Krishna", "Dundi"];
app.use(express.json());

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

app.post("/sigin", validation, (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const token = jwt.sign(username, key);
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
