import express from "express";
import { createType, getTypes } from "../controllers/typeController";

const router = express.Router();

router.post("/type/create", createType);
router.get("/types", getTypes);

export default router;
