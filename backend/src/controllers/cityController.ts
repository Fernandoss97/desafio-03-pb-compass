import City from "../models/City";
import { Request, Response } from "express";
import { CityType } from "../types/types";

export const createCity = (req: Request, res: Response) => {
  const { name, imageURL, travelers }: CityType = req.body;

  const newCity = new City({
    name,
    imageURL,
    travelers,
  });

  newCity
    .save()
    .then(city => {
      return res.status(201).json(city);
    })
    .catch(err => {
      return res.status(500).json({ msg: `Fail to create city - ${err}` });
    });
};

export const getCities = async (req: Request, res: Response) => {
  await City.find()
    .sort("-createdAt")
    .then(cities => {
      return res.status(200).json(cities);
    })
    .catch(err => {
      return res.status(500).json({ msg: "Fail to get cities" });
    });
};
