import axios, { AxiosError, AxiosResponse } from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Hero, ServerError } from "@/types";

export const useID = (id: number | string) => {
  const client = useQueryClient();

  return useQuery<AxiosResponse<Hero>, AxiosError<ServerError>>({
    queryKey: ["hero", id],
    queryFn: () => {
      return axios.get(`http://localhost:4000/superheroes/${id}`);
    },
    initialData: () => {
      const initial = client.getQueryData<AxiosResponse<Hero[]>>([
        "superhero-get",
      ]);
      const hero = initial?.data?.find(
        (hero) => String(hero.id) === String(id),
      );
      if (hero && initial) {
        return { ...initial, data: hero };
      }
      return undefined;
    },
  });
};
