import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const userInfo = async (token) => {
  const { data } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const res = await axios.get(
        "https://classapi.sepehracademy.ir/api/SharePanel/GetProfileInfo",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      return res.data;
    },
  });
};
