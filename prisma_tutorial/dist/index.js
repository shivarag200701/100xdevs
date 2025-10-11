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
addUser("mike", "shiva", "raghav", "12345");
