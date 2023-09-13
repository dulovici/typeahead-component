import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FC, useState } from "react";
import {  CountryInfo } from "../../types";
import { useDebounce } from "../../hooks/useDebounce";
import PickedCountries from "../PickedCountries";

interface ICustomTypeAhead {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    countryData:CountryInfo[];
  }

const CustomTypeAhead: FC<ICustomTypeAhead> = ({setSearchTerm,countryData}) => {
  const [selectedCountries, setSelectedCountries] = useState<CountryInfo[]>([]);

  const debouncedInputChange = useDebounce((term: string) => {
    setSearchTerm(term);
  }, 300);

  const selectCountry = (pickedCountry:CountryInfo) => {
    if(selectedCountries.some((country) => country.name.official === pickedCountry.name.official)) {
        alert("You already pick this country")
        return
    }
    setSelectedCountries([...selectedCountries,pickedCountry])
  }

  const removeSelectedCountry = (countryName:string) => {
    const updatedList = selectedCountries.filter((country) => country.name.official !== countryName)
    setSelectedCountries(updatedList)
  }
  

  return (
    <div className="flex justify-between">

    <ul className="list-none w-1/3 h-1/2 overflow-y-auto">
      {countryData.map((country:CountryInfo) => (
        <li key={country.name.official} onClick={() => selectCountry(country)
        } className="cursor-pointer mb-2">{country.name.official}</li>
      ))}
    </ul>
     
    <div className="flex mt-4 flex-col w-1/4">
      <TextField 
      id="outlined-basic" 
      label="Find your country" 
      variant="outlined" 
      onChange={(e) => debouncedInputChange(e.target.value)}
      />

      <Button
        style={{ marginTop: "1rem" }}
        variant="outlined"
        onClick={() => {
          alert(
            selectedCountries.length
              ? `SENDING FOLLOWING JASON: ${JSON.stringify(selectedCountries)}`
              : "You need to select some countries"
          );
          console.log(selectedCountries);
        }}
      >
        Send
      </Button>
    </div>
        
      <PickedCountries countries={selectedCountries} removeSelectedCountry={removeSelectedCountry} />
    </div>
  );
};

export default CustomTypeAhead;
