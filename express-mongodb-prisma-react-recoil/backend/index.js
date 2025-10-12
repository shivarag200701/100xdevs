import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/calculate", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  const sum = parseInt(a) + parseInt(b);

  res.send({ sum });
});

app.listen(3000);
