import axios, { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";
import { Hero, ServerError } from "@/types";

type Id = number | string | string[];

export const useID = (id: Id) => {
  return useQuery<AxiosResponse<Hero>, AxiosError<ServerError>>({
    queryKey: ["hero", id],
    queryFn: () => {
      return axios.get(`http://localhost:4000/superheroes/${id}`);
    },
  });
};
