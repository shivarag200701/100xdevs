import z from "zod";

export const createTodo = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  completed: z.boolean().default(false),
});

export const updateTodo = z.object({
  id: z.string(),
});
