import { useQuery } from "@tanstack/react-query";
import { getCountry } from "./api";
import { CountryInfo } from "../types";

//=============================================================================================
//**Add time stamp on every entry and stale time as parameter
const cachedDataStr = sessionStorage.getItem("countryCache");
const cache = cachedDataStr ? JSON.parse(cachedDataStr) : {};

export const useGetCachedCountry = (term: string) => {
  const countryKey = [["country", term]];
  const STALE_TIME = 0;

  const dataCatched = cache[term]
  
  const {
    isLoading: countryLoading,
    error: countryError,
    data,
  } = useQuery<boolean, Error, CountryInfo[]>(countryKey, () => getCountry(term), {
    enabled: !!term && !dataCatched,
    staleTime: STALE_TIME,
  });


  if (data) {
    cache[term] = data;
    sessionStorage.setItem("countryCache", JSON.stringify(cache));
  }

  const countryData = cache[term];

  return {
    countryLoading,
    countryError,
    countryData,
  };
};

//=============================================================================================
//In this hook i handled caching with react query staleTime API
export const useGetCountry = (term: string) => {
  const countryKey = [["country", term]];
  const STALE_TIME = 9000;

  const {
    isLoading: countryLoading,
    error: countryError,
    data:countryData,
  } = useQuery<boolean, Error, CountryInfo[]>(countryKey, () => getCountry(term), {
    enabled: !!term,
    staleTime: STALE_TIME,
  });


  return {
    countryLoading,
    countryError,
    countryData,
  };
};