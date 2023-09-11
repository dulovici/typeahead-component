import { useQuery } from "@tanstack/react-query";
import { getCountry } from "./api";
import { CountryInfo } from "../types";

//=============================================================================================
const cachedDataStr = sessionStorage.getItem("countryCache");
const cache = cachedDataStr ? JSON.parse(cachedDataStr) : {};

export const useGetCachedCountry = (country: string) => {
  const countryKey = [["country", country]];
  const STALE_TIME = 0;

  const dataCatched = cache[country]
  
  const {
    isLoading: countryLoading,
    error: countryError,
    data,
  } = useQuery<boolean, Error, CountryInfo[]>(countryKey, () => getCountry(country), {
    enabled: !!country && !dataCatched,
    staleTime: STALE_TIME,
  });


  if (data) {
    cache[country] = data;
    sessionStorage.setItem("countryCache", JSON.stringify(cache));
  }

  const countryData = cache[country];

  return {
    countryLoading,
    countryError,
    countryData,
  };
};

//=============================================================================================

export const useGetCountry = (country: string) => {
  const countryKey = [["country", country]];
  const STALE_TIME = 9000;

  const {
    isLoading: countryLoading,
    error: countryError,
    data:countryData,
  } = useQuery<boolean, Error, CountryInfo[]>(countryKey, () => getCountry(country), {
    enabled: !!country,
    staleTime: STALE_TIME,
  });


  return {
    countryLoading,
    countryError,
    countryData,
  };
};