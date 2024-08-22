import Type from "../models/Type";
import { Request, Response } from "express";
import { iType } from "../types/types";

export const createType = (req: Request, res: Response) => {
  const { name, imageURL }: iType = req.body;

  const newType = new Type({
    name,
    imageURL,
  });

  newType
    .save()
    .then(type => {
      return res.status(201).json(type);
    })
    .catch(err => {
      return res.status(500).json({ msg: `Fail to create type - ${err}` });
    });
};

export const getTypes = async (req: Request, res: Response) => {
  await Type.find()
    .then(types => {
      return res.status(200).json(types);
    })
    .catch(err => {
      return res.status(500).json({ msg: "Fail to get types" });
    });
};
