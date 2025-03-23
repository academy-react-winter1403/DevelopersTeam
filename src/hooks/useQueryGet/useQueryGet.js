import { useQuery } from "@tanstack/react-query";
import http from "./../../core/services/interceptor";

export const useQueryGet = (url, key, [...dependency]) => {
  const getList = async () => {
    const res = await http.get(url);
    return res;
  };
  
  return useQuery({
    queryKey: [key, dependency],
    queryFn: getList,
  });
};
