import { ReviewType, CalculatedAverage } from "../types/types";

export const calculateAverage = (reviews: ReviewType[]): CalculatedAverage => {
  let overallReviewSum = 0;
  let servicesSum = 0;
  let pricesSum = 0;
  let locationsSum = 0;
  let foodSum = 0;
  let amenitiesSum = 0;
  let roomConfortAndQualitysSum = 0;

  reviews.forEach(rv => {
    overallReviewSum +=
      rv.score.services +
      rv.score.prices +
      rv.score.locations +
      rv.score.food +
      rv.score.amenities +
      rv.score.roomConfortAndQuality;
    servicesSum += rv.score.services;
    pricesSum += rv.score.prices;
    locationsSum += rv.score.locations;
    foodSum += rv.score.food;
    amenitiesSum += rv.score.amenities;
    roomConfortAndQualitysSum += rv.score.roomConfortAndQuality;
  });

  const overallAverage = overallReviewSum / (reviews.length * 6);
  const services = servicesSum / reviews.length;
  const prices = pricesSum / reviews.length;
  const locations = locationsSum / reviews.length;
  const food = foodSum / reviews.length;
  const amenities = amenitiesSum / reviews.length;
  const roomConfortAndQuality = roomConfortAndQualitysSum / reviews.length;

  return {
    tourID: reviews[0].tour.toString(),
    overallAverage,
    services,
    prices,
    food,
    amenities,
    locations,
    roomConfortAndQuality,
  };
};
