import express from "express";
import {
  createReview,
  getReviews,
  getAverageReviewByTour,
  getTotalizerByTour,
} from "../controllers/reviewController";

const router = express.Router();

router.post("/review/create", createReview);
router.get("/reviews", getReviews);
router.get("/review/average/:tourID", getAverageReviewByTour);
router.get("/review/totalizer/:tourID", getTotalizerByTour);

export default router;
