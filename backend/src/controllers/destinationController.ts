import Destination from "../models/Destination";
import { Request, Response } from "express";
import { DestinationType } from "../types/types";

export const createDestination = (req: Request, res: Response) => {
  const { city, country, imageURL, travelers }: DestinationType = req.body;

  const newDestination = new Destination({
    city,
    country,
    imageURL,
    travelers,
  });

  newDestination
    .save()
    .then(destination => {
      return res.status(201).json(destination);
    })
    .catch(err => {
      return res.status(500).json({ msg: `Fail to create destination - ${err}` });
    });
};

export const getDestinations = async (req: Request, res: Response) => {
  await Destination.find()
    .sort("-createdAt")
    .then(destinations => {
      return res.status(200).json(destinations);
    })
    .catch(err => {
      return res.status(500).json({ msg: "Fail to get destinations" });
    });
};
