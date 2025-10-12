import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: process.env.DATABASE_PASSWORD,
});

async function createTable() {
  await client.connect();
  const result = await client.query(`CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`);
  console.log(result);
}

// createTable();

async function insertData(username: string, email: string, password: string) {
  try {
    await client.connect();
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ($1,$2,$3);";
    const values = [username, email, password];
    const result = client.query(insertQuery, values);
    console.log(result);
  } catch (error) {
    console.log("Error has happened", error);
  } finally {
    await client.end();
  }
}

insertData("mikemax1998", "shivaraghav200701@gmail.com", "12345678");
