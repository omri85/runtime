import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "runtime",
  password: "123",
  database: "runtime",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error("Unable to connect to the DB", err);
  });

export default sequelize;
