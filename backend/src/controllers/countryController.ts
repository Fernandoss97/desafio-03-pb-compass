import Country from "../models/Country";
import { Request, Response } from "express";
import { CountryType } from "../types/types";

export const createCountry = (req: Request, res: Response) => {
  const { name, cities }: CountryType = req.body;

  const newCountry = new Country({
    name,
    cities,
  });

  newCountry
    .save()
    .then(country => {
      return res.status(201).json(country);
    })
    .catch(err => {
      return res.status(500).json({ msg: `Fail to create country - ${err}` });
    });
};

export const getCountries = async (req: Request, res: Response) => {
  await Country.find()
    .populate("cities")
    .sort("-createdAt")
    .then(countrys => {
      return res.status(200).json(countrys);
    })
    .catch(err => {
      return res.status(500).json({ msg: "Fail to get countrys" });
    });
};
