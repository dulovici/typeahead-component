import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useGetCountry } from "../providers/query";
import { Country } from "../types";
import { useDebounce } from "../hooks/useDebounce";
import CountryFlags from "./CountryFlags";

const TypeAhead = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  const { countryData = [] } = useGetCountry(searchTerm);

  const debouncedInputChange = useDebounce((term: string) => {
    setSearchTerm(term);
  }, 300);

  return (
    <>
      <Autocomplete
        multiple
        id="tags-standard"
        options={countryData}
        getOptionLabel={(option) => option.name}
        onChange={(_, newValue) => {
          setSelectedCountries(newValue);
        }}
        isOptionEqualToValue={(option, value) =>
          option.name === value.name && option.area === value.area
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Countries"
            onChange={(e) => debouncedInputChange(e.target.value)}
          />
        )}
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

      <CountryFlags countries={selectedCountries} />
    </>
  );
};

export default TypeAhead;
