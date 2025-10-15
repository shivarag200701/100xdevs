interface User {
  name: String;
  age: number;
}

function sumAge(user1: User, user2: User) {
  return user1.age + user2.age;
}

const sum = sumAge(
  {
    name: "Shiva",
    age: 23,
  },
  {
    name: "soahn",
    age: 22,
  }
);

console.log(sum);
