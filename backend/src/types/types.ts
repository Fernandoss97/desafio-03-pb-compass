import { Schema, Document } from "mongoose";

export interface CountryType extends Document {
  name: string;
  cities: Schema.Types.ObjectId[];
}

export interface ContinentType extends Document {
  name: string;
  countries: Schema.Types.ObjectId[];
}

export interface CityType extends Document {
  name: string;
  imageURL: string;
  travelers: number;
  country: Schema.Types.ObjectId;
}

export interface ScoreType extends Document {
  services: number;
  prices: number;
  locations: number;
  food: number;
  amenities: number;
  roomConfortAndQuality: number;
}
export interface CalculatedAverage {
  tourID: string;
  overallAverage: number;
  services: number;
  prices: number;
  locations: number;
  food: number;
  amenities: number;
  roomConfortAndQuality: number;
}

export interface ReviewType extends Document {
  user: Schema.Types.ObjectId;
  score: ScoreType;
  comment: string;
  tour: Schema.Types.ObjectId;
}

export interface TourType extends Document {
  title: string;
  from: number;
  duration: number;
  maxPeople: number;
  minAge: number;
  type: Schema.Types.ObjectId;
  reviews: ReviewType[];
  score: ScoreType;
  overview: string;
  imageUrl: string;
  initialDate: string;
  finalDate: string;
  city: Schema.Types.ObjectId;
}

export interface iType extends Document {
  name: string;
  imageURL: string;
}

export interface UserType extends Document {
  name: string;
  email: string;
  firebaseID: string;
  tours: Schema.Types.ObjectId[];
}
