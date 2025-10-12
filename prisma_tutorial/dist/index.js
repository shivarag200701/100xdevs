import { PrismaClient } from "./generated/prisma/index.js";
const prisma = new PrismaClient();
async function addUser(username, firstname, lastname, password) {
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
async function updateUser(username, { firstname, lastname }) {
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
async function deleteUser(username) {
    const user = await prisma.user.delete({
        where: {
            username,
        },
    });
}
deleteUser("mike");
async function findUser(username) {
    const user = await prisma.user.findUnique({
        where: {
            username,
        },
    });
    console.log(user);
}
// findUser("mike");
// updateUser("mike", { firstname: "ragahv", lastname: "shiva" });
