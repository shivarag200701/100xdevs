type User = {
  name: string;
  age: number;
  email: string;
};

const users = new Map<string, User>();

users.set("b4dsa", { name: "shiva", age: 23, email: "sadadsad" });
users.set("b4d", { name: "sragh", age: 22, email: "sadad" });

users.get("b4d");
