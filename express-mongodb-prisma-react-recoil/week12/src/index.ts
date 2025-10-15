interface User {
  name: String;
  age: number;
  email: string;
  password: string;
}

type UpdateProps = Pick<User, "age" | "email" | "name">;

function updateUser(updatePros: UpdateProps) {}
