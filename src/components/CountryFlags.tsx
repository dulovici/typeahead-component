import { FC } from "react";
import { CountryInfo } from "../types";

interface ICountryFlags {
  countries: CountryInfo[];
}

const CountryFlags: FC<ICountryFlags> = ({ countries }) => {
  return (
    <div style={{ marginTop: "1rem" }}>
      {countries.map((country: CountryInfo) => {
        return (
          <img
            key={country.area}
            src={country.flags.png}
            style={{ marginRight: "1rem", width: "10rem" }}
          />
        );
      })}
    </div>
  );
};

export default CountryFlags;
