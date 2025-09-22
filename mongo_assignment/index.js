import express from "express";
import mongoose from "mongoose";
import { router as adminRouter } from "./routes/admin.js";
import { router as userRouter } from "./routes/user.js";

const app = express();

app.use(express.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("running in port 3000");
});
