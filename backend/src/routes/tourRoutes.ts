import { createTour, getTotalByType, getTourByID, getTours } from "../controllers/tourController";
import express from "express";

const router = express.Router();

router.post("/tour/create", createTour);
router.get("/tour/:tourID", getTourByID);
router.get("/tour/total-by-type/:typeID", getTotalByType);
router.get("/tours", getTours);

export default router;
