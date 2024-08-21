import express from "express";
import db from "./config/dbConnection";

const app = express();

db.on("error", console.log.bind(console, "DB Connection error"));
db.once("open", () => {
  console.log("DB connection successful");
});

export default app;
