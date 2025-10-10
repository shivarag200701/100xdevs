interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function isLegal(user: User): boolean {
  return user.age >= 18 ? true : false;
}
