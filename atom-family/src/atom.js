import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";
export const todosAtomFamily = atomFamily({
  key: "todosAtom",
  default: selectorFamily({
    key: "todoSelctor",
    get: (id) => async () => {
      const res = await axios.get(`http://localhost:3000/todo?id=${id}`);
      return res.data;
    },
  }),
});
