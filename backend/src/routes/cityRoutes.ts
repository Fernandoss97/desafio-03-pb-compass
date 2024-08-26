import express from "express";
import { createCity, getCities } from "../controllers/cityController";

const router = express.Router();

router.post("/city/create", createCity);
router.get("/cities", getCities);

export default router;
