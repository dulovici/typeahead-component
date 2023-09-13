import { useQuery } from "@tanstack/react-query";
import { getCountry } from "./api";
import { CacheCountryInfo, CountryInfo } from "../types";

//=============================================================================================
// HTTP Get with custom caching
const timeStamp = new Date().getTime();
const STALE_TIME = 9000;
const cachedDataStr = sessionStorage.getItem("countryCache");
const cache = cachedDataStr ? JSON.parse(cachedDataStr) : {};

export const useGetCachedCountry = (term: string) => {
  const countryKey = [["country", term]];
  const cachedEntry = cache[term]  
  const isDataExpired = cachedEntry && (timeStamp - cachedEntry.timeStamp) > STALE_TIME;

  const {
    isFetching: countryLoading,
    error: countryError,
    data,
  } = useQuery<boolean, Error, CacheCountryInfo[]>(countryKey, () => getCountry(term), {
    enabled: !!term && (!cachedEntry || isDataExpired),
    staleTime: 0,
  });


  if (data) {
    cache[term] = {data:data, timeStamp: timeStamp};
    sessionStorage.setItem("countryCache", JSON.stringify(cache));
  }

  const countryData = cache[term]?.data;
  
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
  
  const {
    isFetching: countryLoading,
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


