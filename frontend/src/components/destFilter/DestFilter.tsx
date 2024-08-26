import { useState } from "react";
import styles from "./destFilter.module.css";

const DestFilter = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const countries = [
    {
      "_id": "66ccb4b8cebca8c7537ce4ef",
      "name": "Brazil",
      "cities": [
        {
          "_id": "66ccb4a1cebca8c7537ce4ec",
          "name": "Sao Paulo",
          "imageURL": "fgfgfg",
          "travelers": 5,
          "createdAt": "2024-08-26T17:00:17.130Z",
          "updatedAt": "2024-08-26T17:00:17.130Z",
          "__v": 0,
        },
        {
          "_id": "66ccb4a1cebca8c7537ce4ecere",
          "name": "Rio de Janeiro",
          "imageURL": "fgfgfg44664",
          "travelers": 5,
          "createdAt": "2024-08-26T17:00:17.130Z",
          "updatedAt": "2024-08-26T17:00:17.130Z",
          "__v": 0,
        },
      ],
      "createdAt": "2024-08-26T17:00:40.403Z",
      "updatedAt": "2024-08-26T17:00:40.403Z",
      "__v": 0,
    },
    {
      "_id": "66ccb487cebca8c7537ce4ea",
      "name": "França",
      "cities": [
        {
          "_id": "66ccb370610832028f017d39",
          "name": "Nice",
          "imageURL": "fgfgfg",
          "travelers": 10,
          "createdAt": "2024-08-26T16:55:12.863Z",
          "updatedAt": "2024-08-26T16:55:12.863Z",
          "__v": 0,
        },
        {
          "_id": "66ccb354610832028f017d37",
          "name": "Paris",
          "imageURL": "fgfgfgdsd",
          "travelers": 12,
          "createdAt": "2024-08-26T16:54:44.818Z",
          "updatedAt": "2024-08-26T16:54:44.818Z",
          "__v": 0,
        },
      ],
      "createdAt": "2024-08-26T16:59:51.456Z",
      "updatedAt": "2024-08-26T16:59:51.456Z",
      "__v": 0,
    },
    {
      "_id": "66ccb487cebca8c7537ce4ea",
      "name": "Dubai",
      "cities": [
        {
          "_id": "66ccb370610832028f017d39vffd",
          "name": "Cidade Teste",
          "imageURL": "fgfgfg3232",
          "travelers": 10,
          "createdAt": "2024-08-26T16:55:12.863Z",
          "updatedAt": "2024-08-26T16:55:12.863Z",
          "__v": 0,
        },
        {
          "_id": "66ccb354610832028f017d37232232",
          "name": "Teste3",
          "imageURL": "fgfgfgdsdhjhj",
          "travelers": 12,
          "createdAt": "2024-08-26T16:54:44.818Z",
          "updatedAt": "2024-08-26T16:54:44.818Z",
          "__v": 0,
        },
      ],
      "createdAt": "2024-08-26T16:59:51.456Z",
      "updatedAt": "2024-08-26T16:59:51.456Z",
      "__v": 0,
    },
  ];

  return (
    <form className={styles.form}>
      <h2>Destinations</h2>
      {countries.map(country => (
        <>
          <h3 key={country._id}>{country.name}</h3>
          {country.cities.map(city => (
            <label key={city.imageURL} className={styles.label}>
              <input
                type="radio"
                value={city.name}
                checked={selectedValue === city.name}
                onChange={e => setSelectedValue(e.target.value)}
              />
              <p key={city.name}>{city.name}</p>
            </label>
          ))}
        </>
      ))}
    </form>
  );
};

export default DestFilter;
