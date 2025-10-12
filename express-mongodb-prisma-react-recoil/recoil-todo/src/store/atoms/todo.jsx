import { atom, selector } from "recoil";

export const todoAtom = atom({
  key: "todoAtom",
  default: [{ title: "", description: "" }],
});

export const filterAtom = atom({
  key: "filterAtom",
  default: "",
});

export const isFilter = selector({
  key: "isFilter",
  get: ({ get }) => {
    const todos = get(todoAtom);
    const filterWord = get(filterAtom);

    return todos.filter(
      (x) => x.title.includes(filterWord) || x.description.includes(filterWord)
    );
  },
});
