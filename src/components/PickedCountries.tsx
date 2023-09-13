import { FC } from "react";
import { CountryInfo } from "../types";

interface IPickedCountries {
  countries: CountryInfo[];
  removeSelectedCountry?: (countryName: string) => void;
  fullWidth?: boolean;
}

const PickedCountries: FC<IPickedCountries> = ({
  countries,
  removeSelectedCountry,
  fullWidth,
}) => {
  return (
    <div className={` ${fullWidth ? "w-full mt-5 flex" : "w-1/2"}`}>
      {!fullWidth && countries.length ? (
        <p>Click on the flag if you want to remove selected county.</p>
      ) : null}
      <div className="flex flex-wrap">
        {countries.map((country: CountryInfo) => {
          return (
            <img
              key={country.name.official}
              src={country.flags.png}
              className={`m-1 w-40 cursor-pointer  ${
                !fullWidth && "hover:opacity-50"
              }`}
              onClick={() =>
                removeSelectedCountry &&
                removeSelectedCountry(country.name.official)
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default PickedCountries;
