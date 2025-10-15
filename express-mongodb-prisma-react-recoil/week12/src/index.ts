import { z } from "zod";
import express from "express";

const app = express();

//run time validation scheme
const userUpdateSchema = z.object({
  name: z.string().min(2, { message: "enter a valid name" }),
  age: z.number().min(18, { message: "need to be older than 18" }),
  password: z.string().min(6, { message: "must be atleast 18" }),
});

//compile time validation
type userUpdate = z.infer<typeof userUpdateSchema>;

app.get("/", (req, res) => {
  const { success } = z.safeParse(userUpdateSchema, req.body);

  const data: userUpdate = req.body;
});
