import { FC } from "react";
import { Country } from "../types";

interface ICountryFlags {
  countries: Country[];
}

const CountryFlags: FC<ICountryFlags> = ({ countries }) => {
  return (
    <div style={{ marginTop: "1rem" }}>
      {countries.map((country: Country) => {
        return (
          <img
            key={country.area}
            src={country.flag}
            style={{ marginRight: "1rem", width: "10rem" }}
          />
        );
      })}
    </div>
  );
};

export default CountryFlags;
