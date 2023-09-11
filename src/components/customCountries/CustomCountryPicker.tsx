import { useState } from "react";
import { useGetCachedCountry} from "../../providers/query";
import CustomTypeAhead from "./CustomTypeAhead";


const CustomCountryPicker = () => {
const [searchTerm, setSearchTerm] = useState("");
const { countryData = [] } = useGetCachedCountry(searchTerm);

  return (
    <>
      <CustomTypeAhead setSearchTerm={setSearchTerm} countryData={countryData} />
    </>
  );
};

export default CustomCountryPicker;
