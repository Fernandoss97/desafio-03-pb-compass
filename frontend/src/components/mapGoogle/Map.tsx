import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import axios from "axios";
import { useEffect, useState } from "react";
import { TourInterface } from "../types/Types";

interface Position {
  lat: number;
  lng: number;
}

type MapProps = {
  tour: TourInterface;
};

const Map = ({ tour }: MapProps) => {
  const [country, setCountry] = useState("brazil");
  //const [city, setCity] = useState("londrina");
  const [position, setPosition] = useState<Position>();
  const apiKey = "AIzaSyCR2F9kmNteAKcnqhOby-FaZAglgwduhBM";

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey!,
  });

  const getPosition = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${tour.city.name}&key=${apiKey}`
      );
      setPosition(response.data.results[0].geometry.location);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosition();
  }, []);

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "60vw", height: "350px" }}
          center={position}
          zoom={11}
        >
          <Marker position={position!} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Map;
