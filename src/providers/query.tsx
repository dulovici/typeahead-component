import { useQuery } from "@tanstack/react-query";
import { getCountry } from "./api";
import { CacheCountryInfo, CountryInfo } from "../types";

//=============================================================================================
//
const cachedDataStr = sessionStorage.getItem("countryCache");
const cache = cachedDataStr ? JSON.parse(cachedDataStr) : {};

export const useGetCachedCountry = (term: string) => {
  const countryKey = [["country", term]];

  const dataCached = cache[term]  

  const {
    isLoading: countryLoading,
    error: countryError,
    data,
  } = useQuery<boolean, Error, CacheCountryInfo[]>(countryKey, () => getCountry(term), {
    enabled: !!term && !dataCached,
    staleTime: 0,
  });


  if (data) {
    //I create a timestamp when storing an entry in session storage. 
    //This data can help us in the further development of the function, 
    //for example, we can simulate react query "staleTime" and deleting entries that 
    //are older than a provided number of minutes compared to the timestamp.
    cache[term] = {data:data, timeStamp:new Date().getTime()};
    sessionStorage.setItem("countryCache", JSON.stringify(cache));
  }

  const countryData = cache[term]?.data;
  console.log(cache);
  

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


