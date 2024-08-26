import express from "express";
import { createCountry, getCountries } from "../controllers/countryController";

const router = express.Router();

router.post("/country/create", createCountry);
router.get("/countries", getCountries);

export default router;
