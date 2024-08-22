import Tour from "../models/Tour";
import { Request, Response } from "express";
import { TourType } from "../types/types";

export const createTour = (req: Request, res: Response) => {
  const {
    title,
    from,
    maxPeople,
    minAge,
    type,
    overview,
    imageUrl,
    destination,
    initialDate,
    finalDate,
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
    destination,
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
  const page = parseInt(req.query.page as string) || 0;
  const limit = 9;

  await Tour.find()
    .populate("type destination")
    .sort("-createdAt")
    .skip((page - 1) * limit)
    .limit(limit)
    .then(tours => {
      return res.status(200).json(tours);
    })
    .catch(err => {
      return res.status(500).json({ msg: "Fail to get tours" });
    });
};

export const getTourByID = async (req: Request, res: Response) => {
  const tourID = req.params.tourID;

  await Tour.findOne({ _id: tourID })
    .populate("type destination")
    .then(tour => {
      return res.status(200).json(tour);
    })
    .catch(err => {
      return res.status(500).json({ msg: "Fail to get tour" });
    });
};

export const getTotalByType = async (req: Request, res: Response) => {
  const typeID = req.params.typeID;

  const typeTotalizer = await Tour.countDocuments({ type: typeID });

  return res.status(200).json({ typeID, typeTotalizer });
};
