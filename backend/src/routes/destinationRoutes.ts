import express from "express";
import { createDestination, getDestinations } from "../controllers/destinationController";

const router = express.Router();

router.post("/destination/create", createDestination);
router.get("/destinations", getDestinations);

export default router;
