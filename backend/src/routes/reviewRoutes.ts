import express from "express";
import {
  createReview,
  getReviews,
  getAverageReviewByTour,
  getTotalizerByTour,
  getTotalByUser,
  getReviewsByTour,
} from "../controllers/reviewController";

const router = express.Router();

router.post("/review/create", createReview);
router.get("/reviews", getReviews);
router.get("/review/average/:tourID", getAverageReviewByTour);
router.get("/review/total-by-tour/:tourID", getTotalizerByTour);
router.get("/review/total-by-user/:userID", getTotalByUser);
router.get("/reviews/:tourID", getReviewsByTour);

export default router;
