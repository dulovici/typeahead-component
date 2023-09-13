import { FC } from "react";
import { CountryInfo } from "../types";

interface IPickedCountries {
  countries: CountryInfo[];
  removeSelectedCountry?: (countryName: string) => void;
  fullWidth?: boolean;
}

const PickedCountries: FC<IPickedCountries> = ({ countries,removeSelectedCountry,fullWidth }) => {
  
  return (
    <div className={` ${fullWidth ? 'w-full mt-5' : 'w-1/3'}`}>
      {countries.map((country: CountryInfo) => {
        return (
          <img
            key={country.name.official}
            src={country.flags.png}
            className="mr-4 w-40 cursor-pointer"
            onClick={() => removeSelectedCountry && removeSelectedCountry(country.name.official)}
          />
        );
      })}
    </div>
  );
};



export default PickedCountries;
