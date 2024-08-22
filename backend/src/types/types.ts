import { Schema, Document } from "mongoose";

export interface BookedTourType extends Document {
  tour: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  travelers: number;
}

export interface DestinationType extends Document {
  city: string;
  country: string;
  imageURL: string;
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
  destination: Schema.Types.ObjectId;
}

export interface Type extends Document {
  name: string;
}

export interface UserType extends Document {
  name: string;
  email: string;
  firebaseID: string;
  tours: Schema.Types.ObjectId[];
}
