"use client"

import { NextPage } from "next";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";
import { Friends, Hero, ServerError } from "@/types";

const fetchSuperheroes = () => axios.get("http://localhost:4000/superheroes");
const fetchFriends = () => axios.get("http://localhost:4000/friends");

const Parallel: NextPage = () => {
  const { data: superheroes } = useQuery<
    AxiosResponse<Hero[]>,
    AxiosError<ServerError>
  >({
    queryKey: ["superhero-get"],
    queryFn: fetchSuperheroes,
  });

  const { data: friends } = useQuery<
    AxiosResponse<Friends[]>,
    AxiosError<ServerError>
  >({
    queryKey: ["friends"],
    queryFn: fetchFriends,
  });

  return <main>Parallel Queries</main>;
};

export default Parallel;
