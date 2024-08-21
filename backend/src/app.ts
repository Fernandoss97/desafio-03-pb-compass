import express from "express";
import db from "./config/dbConnection";
import userRoutes from "./routes/userRoutes";

const app = express();

db.on("error", console.log.bind(console, "DB Connection error"));
db.once("open", () => {
  console.log("DB connection successful");
});

app.use(express.json());
app.use(userRoutes);

export default app;
