import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get("/linkedin_server", (req, res) => {
  const network = generateRandomNumber(1, 100);
  const jobs = generateRandomNumber(1, 100);
  const notifications = generateRandomNumber(1, 100);
  const posts = generateRandomNumber(1, 100);

  const data = { network, jobs, notifications, posts };
  res.json(data);
});

app.listen(3000);
