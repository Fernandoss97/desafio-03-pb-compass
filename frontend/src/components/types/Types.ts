export interface CityInterface {
  _id: string;
  name: string;
  imageURL: string;
  travelers: number;
  country: CountryInterface;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface CountryInterface {
  _id: string;
  name: string;
  cities: CityInterface[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface ContinentInterface {
  _id: string;
  name: string;
  countries: CountryInterface[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface TypeInterface {
  _id: string;
  name: string;
  imageURL: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface TypeInterface {
  _id: string;
  name: string;
  imageURL: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ScoreInterface {
  services: number;
  prices: number;
  locations: number;
  food: number;
  amenities: number;
  roomConfortAndQuality: number;
  overallAverage: number;
  comment: string;
}

export interface ReviewInterface {
  _id: string;
  user: string;
  tour: string;
  score: ScoreInterface;
  comment: string;
  updatedAt: string;
  createdAt: string;
  __v: number;
}

export interface TourInterface {
  _id: string;
  title: string;
  imageURL: string;
  from: number;
  duration: number;
  maxPeople: number;
  minAge: number;
  type: TypeInterface;
  overview: string;
  initialDate: string;
  finalDate: string;
  city: CityInterface;
  reviews: ReviewInterface[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface AverageReviewInterface {
  tourID: string;
  overallAverage: number;
  services: number;
  prices: number;
  food: number;
  amenities: number;
  locations: number;
  roomConfortAndQuality: number;
}
