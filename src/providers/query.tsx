import { useQuery } from "@tanstack/react-query";
import { getCountry } from "./api";

const cachedDataStr = sessionStorage.getItem("countryCache");
const cache = cachedDataStr ? JSON.parse(cachedDataStr) : {};

export const useGetCountry = (country: string) => {
  const countryKey = [["country", country]];
  const STALE_TIME = 0;

  const dataCatched = cache[country]
  
  const {
    isLoading: countryLoading,
    error: countryError,
    data,
  } = useQuery<boolean, Error, any>(countryKey, () => getCountry(country), {
    enabled: !!country && !dataCatched,
    staleTime: STALE_TIME,
  });


  if (data) {
    cache[country] = data;
    sessionStorage.setItem("countryCache", JSON.stringify(cache));
  }

  console.log(cache);

  const countryData = cache[country]?.map((country:any) => ({
    area: country.area,
    name: country.name.official,
    flag: country.flags.png,
  }));


  return {
    countryLoading,
    countryError,
    countryData,
  };
};
