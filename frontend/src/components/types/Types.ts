export interface CityInterface {
  _id: string;
  name: string;
  imageURL: string;
  travelers: number;
  createdAt: string;
  updatedAt: string;
  __v: 0;
}
export interface CountryInterface {
  _id: string;
  name: string;
  cities: string[];
  createdAt: string;
  updatedAt: string;
  __v: 0;
}
export interface ContinentInterface {
  _id: string;
  name: string;
  countries: CountryInterface[];
  createdAt: string;
  updatedAt: string;
  __v: 0;
}
