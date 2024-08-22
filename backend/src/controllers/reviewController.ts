import Review from "../models/Review";
import { Request, Response } from "express";
import { ReviewType } from "../types/types";

export const createReview = (req: Request, res: Response) => {
  const {
    user,
    tour,
    services,
    prices,
    locations,
    food,
    amenities,
    roomConfortAndQuality,
    comment,
  }: ReviewType = req.body;

  const newReview = new Review({
    user,
    tour,
    services,
    prices,
    locations,
    food,
    amenities,
    roomConfortAndQuality,
    comment,
  });

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
  let overallReviewSum = 0;
  let servicesSum = 0;
  let pricesSum = 0;
  let locationsSum = 0;
  let foodSum = 0;
  let amenitiesSum = 0;
  let roomConfortAndQualitysSum = 0;

  const reviews = await Review.find({ tour: tourID });

  if (!reviews) {
    return res.status(404).json({ msg: `There are no reviews for the tour ${tourID}` });
  } else {
    reviews.forEach(rv => {
      overallReviewSum +=
        rv.services + rv.prices + rv.locations + rv.food + rv.amenities + rv.roomConfortAndQuality;
      servicesSum += rv.services;
      pricesSum += rv.prices;
      locationsSum += rv.locations;
      foodSum += rv.food;
      amenitiesSum += rv.amenities;
      roomConfortAndQualitysSum += rv.roomConfortAndQuality;
    });

    const overallAverage = overallReviewSum / (reviews.length * 6);
    const servicesAverage = servicesSum / reviews.length;
    const pricesAverage = pricesSum / reviews.length;
    const locationsAverage = locationsSum / reviews.length;
    const foodAverage = foodSum / reviews.length;
    const amenitiesAverage = amenitiesSum / reviews.length;
    const roomConfortAndQualityAverage = roomConfortAndQualitysSum / reviews.length;

    return res.status(200).json({
      tourID: tourID,
      overallAverage: overallAverage.toFixed(1),
      servicesAverage: servicesAverage.toFixed(1),
      pricesAverage: pricesAverage.toFixed(1),
      locationsAverage: locationsAverage.toFixed(1),
      foodAverage: foodAverage.toFixed(1),
      amenitiesAverage: amenitiesAverage.toFixed(1),
      roomConfortAndQualityAverage: roomConfortAndQualityAverage.toFixed(1),
    });
  }
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
