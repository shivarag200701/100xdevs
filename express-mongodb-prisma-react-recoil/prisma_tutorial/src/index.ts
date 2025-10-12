import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();

async function addUser(
  username: string,
  firstname: string,
  lastname: string,
  password: string
) {
  const user = await prisma.user.create({
    data: {
      username,
      firstname,
      lastname,
      password,
    },
  });

  console.log(user);
}

// addUser("mike", "shiva", "raghav", "12345");

interface updateParams {
  firstname: string;
  lastname: string;
}

async function updateUser(
  username: string,
  { firstname, lastname }: updateParams
) {
  const user = await prisma.user.update({
    where: {
      username,
    },
    data: {
      firstname,
      lastname,
    },
  });
}

async function deleteUser(username: string) {
  const user = await prisma.user.delete({
    where: {
      username,
    },
  });
}
deleteUser("mike");

async function findUser(username: string) {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });
  console.log(user);
}

// findUser("mike");

// updateUser("mike", { firstname: "ragahv", lastname: "shiva" });
