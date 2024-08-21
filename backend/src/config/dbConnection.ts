import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI!);

const db = mongoose.connection;

export default db;
