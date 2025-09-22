import { Router } from "express";
import adminMiddleware from "../middleware/admin.js";
import { Admin } from "../db/index.js";

export const router = Router();

router.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newAdmin = new Admin({
    username,
    password,
  });

  newAdmin
    .save()
    .then(() => {
      res.json({ message: "admin created successfully" });
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/courses", adminMiddleware, (req, res) => {
  console.log("user are authenticated using middleware");
});
