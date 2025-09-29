import { atomFamily } from "recoil";
import { todos } from "./todos";
export const todosAtomFamily = atomFamily({
  key: "todosAtom",
  default: (id) => {
    const todo = todos.find((x) => x.id == id);
    return todo;
  },
});
