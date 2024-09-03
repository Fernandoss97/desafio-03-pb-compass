import Tour from "../models/Tour";
import Type from "../models/Type";
import Country from "../models/Country";
import { Request, Response } from "express";
import {
  TourType,
  FilterType,
  iType,
  CountryType,
  FilterCountryType,
  FilterPrice,
  FilterReview,
} from "../types/types";

export const createTour = (req: Request, res: Response) => {
  const {
    title,
    from,
    maxPeople,
    minAge,
    type,
    overview,
    imageUrl,
    city,
    initialDate,
    finalDate,
    country,
  }: TourType = req.body;

  const iDate = new Date(initialDate);
  const fDate = new Date(finalDate);

  const newTour = new Tour({
    title,
    from,
    duration: (fDate.getTime() - iDate.getTime()) / 86400000,
    maxPeople,
    minAge,
    type,
    overview,
    imageUrl,
    city,
    country,
    initialDate,
    finalDate,
  });

  newTour
    .save()
    .then(tour => {
      return res.status(201).json(tour);
    })
    .catch(err => {
      return res.status(500).json({ msg: `Fail to create tour - ${err}` });
    });
};

export const getTours = async (req: Request, res: Response) => {
  const { type, country, from, review, search, when, guests } = req.query;
  const page = parseInt(req.query.page as string) || 0;
  const limit = 9;

  let filterType: FilterType = { type: null };
  let filterCountry: FilterCountryType = { country: null };
  let filterPrice: FilterPrice = { from: null };
  let filterReview: FilterReview = { average: null };

  let $and: any = [{ from: { $gte: 0 } }];

  if (type) {
    const typeFilter: iType | null = await Type.findOne({ name: type });
    filterType.type = typeFilter?._id as string;
    $and.push({ type: filterType.type });
  }

  if (country) {
    const countryFilter: CountryType | null = await Country.findOne({ name: country });
    filterCountry.country = countryFilter?._id as string;
    $and.push({ country: filterCountry.country });
  }

  if (from) {
    filterPrice.from = parseInt(from as string) || 0;
    $and.push({ from: { $lte: filterPrice.from } });
  }

  if (review) {
    filterReview.average = parseInt(review as string) || 0;
    $and.push({ "score.overallAverage": { $gte: filterReview.average } });
  }

  if (search) {
    $and.push({ title: { $regex: search, $options: "i" } });
  }

  if (when) {
    const parseDate = new Date(when as string);
    $and.push({ initialDate: { $gte: parseDate.toISOString() } });
  }

  if (guests) {
    const parseNumber = parseInt(guests as string);
    $and.push({ maxPeople: { $lte: parseNumber } });
  }

  if (page === 0) {
    await Tour.find()
      .populate("type")
      .populate({ path: "city", populate: { path: "country" } })
      .sort("-createdAt")
      .then(tours => {
        return res.status(200).json(tours);
      })
      .catch(err => {
        return res.status(500).json({ msg: `Fail to get tours - ${err}` });
      });
  } else {
    await Tour.find({
      $and,
    })
      .populate("type")
      .populate({ path: "city", populate: { path: "country" } })
      .sort("-createdAt")
      .skip((page - 1) * limit)
      .limit(limit)
      .then(tours => {
        return res.status(200).json(tours);
      })
      .catch(err => {
        return res.status(500).json({ msg: `Fail to get tours - ${err}` });
      });
  }
};

export const getTourByID = async (req: Request, res: Response) => {
  const tourID = req.params.tourID;

  await Tour.findOne({ _id: tourID })
    .populate("type")
    .populate({ path: "city", populate: { path: "country" } })
    .then(tour => {
      return res.status(200).json(tour);
    })
    .catch(err => {
      return res.status(500).json({ msg: `Fail to get tour - ${err}` });
    });
};

export const getTotalByType = async (req: Request, res: Response) => {
  const typeID = req.params.typeID;

  const tourTotalizer = await Tour.countDocuments({ type: typeID });

  return res.status(200).json({ typeID, tourTotalizer });
};

export const getCheaperTourByType = async (req: Request, res: Response) => {
  const typeID = req.params.typeID;

  const tours = await Tour.find({ type: typeID });

  if (tours.length === 0) {
    return res.status(404).json({ msg: `There are no tours for type ${typeID}` });
  } else {
    let cheaperTour = tours[0];

    tours.forEach(t => {
      if (t.from < cheaperTour.from) {
        cheaperTour = t;
      }
    });

    return res.status(200).json(cheaperTour);
  }
};
