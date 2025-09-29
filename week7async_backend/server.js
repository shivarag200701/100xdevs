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

app.get("/todo", (req, res) => {
  const { id } = req.query;
  if (id == 1) {
    res.json({
      id: 1,
      title: "title1",
      description: "description1",
    });
  } else if (id == 2) {
    res.json({
      id: 2,
      title: "title2",
      description: "description2",
    });
  } else if (id == 3) {
    res.json({
      id: 3,
      title: "title3",
      description: "description3",
    });
  } else {
    res.json({
      msg: "todo not found",
    });
  }
});

app.listen(3000);
