import { createTour, getTourByID, getTours } from "../controllers/tourController";
import express from "express";

const router = express.Router();

router.post("/tour/create", createTour);
router.get("/tour/:tourID", getTourByID);
router.get("/tours", getTours);

export default router;
