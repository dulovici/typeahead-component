import { useState } from "react";
import { useGetCountry } from "../../providers/query";
import TypeAhead from "./TypeAhead";

const CountryPicker = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    countryData = [],
    countryError,
    countryLoading,
  } = useGetCountry(searchTerm);

  return (
    <>
      <p className={`mt-1 ${!countryLoading && "invisible"}`}>Loading...</p>
      <p className={`text-red-500 mt-2 ${!countryError && "invisible"}`}>
        Failed to fetch countries please try again
      </p>

      <TypeAhead setSearchTerm={setSearchTerm} countryData={countryData} />
    </>
  );
};

export default CountryPicker;
