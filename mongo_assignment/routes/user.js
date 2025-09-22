import { Router } from "express";
import userMiddleware from "../middleware/user.js";

export const router = Router();

router.post("/signup", (req, res) => {});
router.get("/courses", (req, res) => {
  // Implement listing all courses logic
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});
