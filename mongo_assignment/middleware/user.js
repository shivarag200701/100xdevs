import { User } from "../db/index.js";

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  const user = User.findOne({ username });
  if (!user) {
    res.status(411).send("Username not found");
  }
  if (password != user.password) {
    res.status(411).send("Incorrect password");
  }
  res.send("Logged in sucessfully");
}

export default userMiddleware;
