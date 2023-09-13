import { useState } from "react";
import { useGetCachedCountry} from "../../providers/query";
import CustomTypeAhead from "./CustomTypeAhead";


const CustomCountryPicker = () => {
const [searchTerm, setSearchTerm] = useState("");
const { countryData = [], countryError, countryLoading } = useGetCachedCountry(searchTerm);

  return (
    <>
       <p className={`mt-1 ${!countryLoading && "invisible"}`}>Loading...</p>
       <p className={`text-red-500 mt-2 ${!countryError && "invisible"}`}>Failed to fetch countries please try again</p>

      <CustomTypeAhead setSearchTerm={setSearchTerm} countryData={countryData} />
    </>
  );
};

export default CustomCountryPicker;
