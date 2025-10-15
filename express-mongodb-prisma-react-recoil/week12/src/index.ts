interface User {
  name: String;
  age: number;
  email: string;
  password: string;
}

type UpdateProps = Pick<User, "age" | "email" | "name">;

type UpdatePropsOptional = Partial<UpdateProps>;

function updateUser(updatePros: UpdatePropsOptional) {}

interface Config {
  url: string;
  apiKey: string;
}

const config: Readonly<Config> = {
  url: "example.com",
  apiKey: "12345678",
};
