import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FC, useState } from "react";
import { CountryInfo } from "../../types";
import { useDebounce } from "../../hooks/useDebounce";
import PickedCountries from "../PickedCountries";

interface ITypeAhead {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  countryData: CountryInfo[];
}

const TypeAhead: FC<ITypeAhead> = ({ setSearchTerm, countryData }) => {
  const [selectedCountries, setSelectedCountries] = useState<CountryInfo[]>([]);

  const debouncedInputChange = useDebounce((term: string) => {
    setSearchTerm(term);
  }, 300);

  return (
    <>
      <Autocomplete
        multiple
        id="tags-standard"
        options={countryData}
        getOptionLabel={(option: CountryInfo) => option.name.official}
        onChange={(_, newValue) => {
          setSelectedCountries(newValue);
        }}
        isOptionEqualToValue={(option, value) =>
          option.name.official === value.name.official &&
          option.area === value.area
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
              ? `SENDING FOLLOWING JSON: ${JSON.stringify(selectedCountries)}`
              : "You need to select some countries"
          );
          console.log(selectedCountries);
        }}
      >
        Send
      </Button>

      <PickedCountries countries={selectedCountries} fullWidth={true} />
    </>
  );
};

export default TypeAhead;
