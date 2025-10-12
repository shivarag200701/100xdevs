import express from "express";
import cors from "cors";
import { createTodo } from "./types.js";
import { toDo } from "./db.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/todos", async (req, res) => {
  const todoList = await toDo.find({});
  res.json({
    todo: todoList,
  });
});

app.post("/todo", (req, res) => {
  const todo = req.body;
  console.log(todo);

  const parsedTodo = createTodo.safeParse(todo);
  if (!parsedTodo.success) {
    res.json({
      msg: "send proper data",
    });
  }
  toDo.create({
    title: todo.title,
    description: todo.description,
    completed: todo.completed,
  });
  res.json({
    msg: "todo created",
  });
});

app.post("/update-todo/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await toDo.updateOne(
      {
        _id: id,
      },
      {
        $set: { completed: true },
      }
    );
  } catch (e) {
    res.json({
      error: e,
    });
  }
  res.json({
    msg: "task updated",
  });
});

app.listen(3000);
