import client from "../api/client";

export const getCountry = async (country: string) => {
  const result = await client.get(`/name/${country}`);
  return result.data;
};
