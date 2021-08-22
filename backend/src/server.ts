import express from "express";

import { sequelize } from "./db";
sequelize.sync().then(() => {
  console.log("Database synced");
});

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Runtime");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
