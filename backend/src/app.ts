import express from "express";
import db from "./config/dbConnection";
import userRoutes from "./routes/userRoutes";
import reviewRoutes from "./routes/reviewRoutes";
import tourRoutes from "./routes/tourRoutes";
import typeRoutes from "./routes/typeRoutes";
import countryRoutes from "./routes/countryRoutes";
import cityRoutes from "./routes/cityRoutes";
import continentRoutes from "./routes/continentRoutes";

const app = express();

db.on("error", console.log.bind(console, "DB Connection error"));
db.once("open", () => {
  console.log("DB connection successful");
});

app.use(express.json());
app.use(userRoutes);
app.use(reviewRoutes);
app.use(tourRoutes);
app.use(typeRoutes);
app.use(countryRoutes);
app.use(cityRoutes);
app.use(continentRoutes);

export default app;
