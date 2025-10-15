interface User {
  name: String;
  age: number;
  email: string;
  password: string;
}

type UpdateProps = Pick<User, "age" | "email" | "name">;

type UpdatePropsOptional = Partial<UpdateProps>;

function updateUser(updatePros: UpdatePropsOptional) {}
