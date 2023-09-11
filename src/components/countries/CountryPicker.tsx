import { useState } from "react";
import { useGetCountry} from "../../providers/query";
import TypeAhead from "./TypeAhead";


const CountryPicker = () => {
const [searchTerm, setSearchTerm] = useState("");
const { countryData = [] } = useGetCountry(searchTerm);

  return (
    <>
      <TypeAhead setSearchTerm={setSearchTerm} countryData={countryData} />
    </>
  );
};

export default CountryPicker;
