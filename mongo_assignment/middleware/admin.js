import { Admin } from "../db/index.js";

async function adminMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  const admin = await Admin.findOne({ username, password });
  console.log(admin.username);

  if (!admin) {
    res.status(411).send("Username not found");
  }
  if (password != admin.password) {
    res.status(411).send("Incorrect password");
  }
  res.send("Logged in sucessfully");
  next();
}

export default adminMiddleware;
