import { FC } from "react";
import { CountryInfo } from "../types";

interface ICountryFlags {
  countries: CountryInfo[];
  removeSelectedCountry: (countryName: string) => void;
}

const CountryFlags: FC<ICountryFlags> = ({ countries,removeSelectedCountry }) => {
  return (
    <div style={{ width: "33%"}}>
      {countries.map((country: CountryInfo) => {
        return (
          <img
            key={country.name.official}
            src={country.flags.png}
            style={{ marginRight: "1rem", width: "10rem", cursor: "pointer" }}
            onClick={() => removeSelectedCountry(country.name.official)}
          />
        );
      })}
    </div>
  );
};

export default CountryFlags;
