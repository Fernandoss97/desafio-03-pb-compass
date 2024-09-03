import express from "express";
import { createContinent, getContinents } from "../controllers/continentController";

const router = express.Router();

router.post("/continent/create", createContinent);
router.get("/continents", getContinents);

export default router;
