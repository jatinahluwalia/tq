"use client";
import { Hero, ServerError } from "@/types";
import { UseQueryOptions, useQueries } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { NextPage } from "next";

const fetchHero = (id: number) =>
  axios.get(`http://localhost:4000/superheroes/${id}`);
const queries: number[] = [1, 2];

const Dynamic: NextPage = () => {
  const q = useQueries({
    queries: queries.map<
      UseQueryOptions<AxiosResponse<Hero>, AxiosError<ServerError>>
    >((query) => ({
      queryKey: ["superhero-get", query],
      queryFn: () => fetchHero(query),
    })),
  });

  console.log(q[0].data?.data.name);
  return <main></main>;
};

export default Dynamic;
