import Continent from "../models/Continent";
import { Request, Response } from "express";
import { ContinentType } from "../types/types";

export const createContinent = (req: Request, res: Response) => {
  const { name, countries }: ContinentType = req.body;

  const newContinent = new Continent({
    name,
    countries,
  });

  newContinent
    .save()
    .then(continent => {
      return res.status(201).json(continent);
    })
    .catch(err => {
      return res.status(500).json({ msg: `Fail to create continent - ${err}` });
    });
};

export const getContinents = async (req: Request, res: Response) => {
  await Continent.find()
    .populate({
      path: "countries",
    })
    .sort("-createdAt")
    .then(continents => {
      return res.status(200).json(continents);
    })
    .catch(err => {
      return res.status(500).json({ msg: "Fail to get continents" });
    });
};
