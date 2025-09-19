import express from "express";
import fs from "fs";

const app = express();
let _id = 0;

app.use(express.json());

//completed
app.get("/todos", (req, res) => {
  const fileContent = fs.readFileSync("./todos.json", "utf8");
  const data = JSON.parse(fileContent);
  res.json({ data });
});

app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  const fileContent = fs.readFileSync("./todos.json", "utf8");
  const dataArray = JSON.parse(fileContent);
  dataArray.map((data) => {
    if (id == data.id) {
      res.json({ data });
    }
  });
  res.sendStatus(404);
});

//completed
app.post("/todos", (req, res) => {
  let newData = req.body;
  _id += 1;
  newData.id = _id;

  const fileContent = fs.readFileSync("./todos.json", "utf8");

  const dataArray = JSON.parse(fileContent);
  console.log(dataArray);

  dataArray.push(newData);
  console.log(dataArray);

  fs.writeFileSync(
    "todos.json",
    JSON.stringify(dataArray, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.error("error writing file", err);
        return;
      }
      console.log("succesfully written");
    }
  );
  res.send(201);
});

app.delete("/todos/:id", (req, res) => {});

app.listen(3000, () => {
  console.log("running in port 3000");
});
