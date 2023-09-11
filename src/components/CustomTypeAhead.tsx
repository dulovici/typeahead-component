import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useGetCountry } from "../providers/query";
import {  CountryInfo } from "../types";
import { useDebounce } from "../hooks/useDebounce";
import CountryFlags from "./CountryFlags";

const CustomTypeAhead = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountries, setSelectedCountries] = useState<CountryInfo[]>([]);

  const { countryData = [] } = useGetCountry(searchTerm);

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
    const newList = selectedCountries.filter((country) => country.name.official !== countryName)
    setSelectedCountries(newList)
  }
  

  return (
    <div style={{display:"flex", justifyContent: "space-between"}}>

    <ul style={{ listStyleType: 'none', width: "33%", cursor: "pointer"}}>
      {countryData.map((country:CountryInfo) => (
        <li key={country.name.official} onClick={() => selectCountry(country)
        }>{country.name.official}</li>
      ))}
    </ul>
     
    <div style={{display:"flex", flexDirection:"column", width: "25%"}}>
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
        
      <CountryFlags countries={selectedCountries} removeSelectedCountry={removeSelectedCountry} />
    </div>
  );
};

export default CustomTypeAhead;
