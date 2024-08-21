import User from "../models/User";
import { Request, Response } from "express";
import { UserType } from "../types/types";

export const createUser = (req: Request, res: Response) => {
  const { name, email, firebaseID, tours }: UserType = req.body;

  const newUser = new User({
    name,
    email,
    firebaseID,
    tours,
  });

  newUser
    .save()
    .then(user => {
      return res.status(201).json(user);
    })
    .catch(err => {
      return res.status(500).json({ msg: `Fail to create user - ${err}` });
    });
};

export const getUserByFirebaseID = async (req: Request, res: Response) => {
  const firebaseID = req.params.firebaseID;

  const user = await User.findOne({ firebaseID: firebaseID });

  if (!user) {
    return res.status(404).json({ msg: `User ${firebaseID} not found` });
  } else {
    return res.status(200).json(user);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  await User.find()
    .then((users: UserType[]) => {
      return res.status(200).json(users);
    })
    .catch(err => {
      return res.status(500).json({ msg: "Fail to get users" });
    });
};
