import Review from "../models/Review";
import Tour from "../models/Tour";
import { Request, Response } from "express";
import { ReviewType } from "../types/types";
import { calculateAverage } from "../helpers/calculateAverageReview";

export const createReview = async (req: Request, res: Response) => {
  const { user, tour, score, comment, name, email }: ReviewType = req.body;

  const newReview = new Review({
    tour,
    user,
    score,
    comment,
    name,
    email,
  });

  try {
    const updatedReview = calculateAverage([newReview]);
    newReview.score.overallAverage = updatedReview.overallAverage;

    const tourDB = await Tour.findById(tour);

    if (!tourDB) {
      return res.status(500).json({ msg: "Fail to find tour" });
    }

    tourDB?.reviews.push(newReview);

    await Tour.findByIdAndUpdate(tour, { reviews: tourDB?.reviews });

    const updatedTour = await Tour.findById(tour);

    const updatedScore = calculateAverage(updatedTour!.reviews);

    await Tour.findByIdAndUpdate(tour, {
      score: updatedScore,
    });
  } catch (error) {
    return res.status(500).json({ msg: "Fail to update score" });
  }

  newReview
    .save()
    .then(review => {
      return res.status(201).json(review);
    })
    .catch(err => {
      return res.status(500).json({ msg: `Fail to create review - ${err}` });
    });
};

export const getReviews = async (req: Request, res: Response) => {
  await Review.find()
    .populate("user tour")
    .sort("-createdAt")
    .exec()
    .then(reviews => {
      return res.status(200).json(reviews);
    })
    .catch(err => {
      return res.status(500).json({ msg: "Fail to get reviews" });
    });
};

export const getAverageReviewByTour = async (req: Request, res: Response) => {
  const tourID = req.params.tourID;

  const reviews = await Review.find({ tour: tourID });

  if (reviews.length === 0) {
    return res.status(404).json({ msg: `There are no reviews for the tour ${tourID}` });
  } else {
    const average = calculateAverage(reviews);

    return res.status(200).json({
      tourID,
      overallAverage: average.food.toFixed(1),
      services: average.services.toFixed(1),
      prices: average.prices.toFixed(1),
      food: average.food.toFixed(1),
      amenities: average.amenities.toFixed(1),
      locations: average.locations.toFixed(1),
      roomConfortAndQuality: average.roomConfortAndQuality.toFixed(1),
    });
  }
};

export const getReviewsByTour = async (req: Request, res: Response) => {
  const tourID = req.params.tourID;

  const reviews = await Review.find({ tour: tourID }).populate("user");

  return res.status(200).json(reviews);
};

export const getTotalizerByTour = async (req: Request, res: Response) => {
  const tourID = req.params.tourID;

  const reviewsTotalizer = await Review.countDocuments({ tour: tourID });

  return res.status(200).json({ tourID, reviewsTotalizer });
};

export const getTotalByUser = async (req: Request, res: Response) => {
  const userID = req.params.userID;

  const reviewsTotalizer = await Review.countDocuments({ user: userID });

  return res.status(200).json({ userID, reviewsTotalizer });
};
