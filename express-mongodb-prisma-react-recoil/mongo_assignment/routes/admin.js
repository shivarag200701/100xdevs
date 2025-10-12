import { Router } from "express";
import adminMiddleware from "../middleware/admin.js";
import { Admin, Course } from "../db/index.js";

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

router.post("/courses", adminMiddleware, async (req, res) => {
  const title = req.body.title;
  const description = req.body.title;
  const price = req.body.title;
  const imageLink = req.body.title;

  const course = await Course.create({
    title,
    description,
    price,
    imageLink,
  });

  res.json({
    message: "Course Created sucessfully",
    courseId: course._id,
  });
});
