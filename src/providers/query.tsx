import { useQuery } from "@tanstack/react-query";
import { getCountry } from "./api";

export const useGetCountry = (country: string) => {
  const countryKey = [["country", country]];
  const STALE_TIME = 600000;

  const {
    isLoading: countryLoading,
    error: countryError,
    data,
  } = useQuery<boolean, Error, any[]>(countryKey, () => getCountry(country), {
    enabled: !!country,
    staleTime: STALE_TIME,
  });

  const countryData = data?.map((country) => ({
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
