import express from "express";
import { sequelize } from "./db";
import router from "./router";
import cors from "cors";
import config from "./config";
import bodyParser from "body-parser";

sequelize.sync().then(() => {
  console.log("Database synced");
});

const app = express();
const port = 3001;

if (config.dev) {
  app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
}
app.use(bodyParser());

app.get("/", (req, res) => {
  res.send("Runtime");
});

app.use(router);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
