import express from "express";
import { createUser, getUserByFirebaseID, getUsers } from "../controllers/userController";

const router = express.Router();

router.post("/user/create", createUser);
router.get("/user/:firebaseID", getUserByFirebaseID);
router.get("/users", getUsers);

export default router;
