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

export interface ReviewType extends Document {
  user: Schema.Types.ObjectId;
  tour: Schema.Types.ObjectId;
  services: number;
  prices: number;
  locations: number;
  food: number;
  amenities: number;
  roomConfortAndQuality: number;
  comment: string;
}

export interface TourType extends Document {
  title: string;
  from: number;
  duration: number;
  maxPeople: number;
  minAge: number;
  type: Schema.Types.ObjectId;
  reviews: Schema.Types.ObjectId[];
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
