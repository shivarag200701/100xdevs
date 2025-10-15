interface User {
  id: string;
  name: string;
  age: number;
}

type Users = Record<string, User>;

const user: Users = {
  bd456: { id: "bd456", name: "shiva", age: 24 },
};
