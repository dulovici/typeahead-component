import { FC } from "react";
import { CountryInfo } from "../types";

interface IPickedCountries {
  countries: CountryInfo[];
  removeSelectedCountry?: (countryName: string) => void;
  fullWidth?: boolean;
}

const PickedCountries: FC<IPickedCountries> = ({ countries,removeSelectedCountry,fullWidth }) => {
  const style = fullWidth ? {width: "100%", marginTop: "20px"} : {width:"33%"}
  
  return (
    <div style={style}>
      {countries.map((country: CountryInfo) => {
        return (
          <img
            key={country.name.official}
            src={country.flags.png}
            style={{ marginRight: "1rem", width: "10rem", cursor: "pointer" }}
            onClick={() => removeSelectedCountry && removeSelectedCountry(country.name.official)}
          />
        );
      })}
    </div>
  );
};



export default PickedCountries;
