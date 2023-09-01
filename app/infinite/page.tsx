"use client";

import React from "react";
import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { NextPage } from "next";
import axios, { AxiosError, AxiosResponse } from "axios";
import { Color, ServerError } from "@/types";

const fetchColors = ({ pageParam = 1 }) =>
  axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);

const Inifnite: NextPage = () => {
  const { data, isLoading, isError, error, hasNextPage, fetchNextPage } =
    useInfiniteQuery<AxiosResponse<Color[]>, AxiosError<ServerError>>({
      queryKey: ["colors"],
      getNextPageParam: (_lastPage, pages) =>
        pages.length < 4 ? pages.length + 1 : undefined,
      queryFn: fetchColors,
    });

  if (isLoading) return <main>Loading...</main>;

  if (isError) return <main>Error: {error?.message}</main>;
  return (
    <main>
      <h1>Colors</h1>
      <ul>
        {data?.pages.map((page) =>
          page.data.map((color) => (
            <li key={color.id}>
              {color.id} - {color.name}
            </li>
          )),
        )}
      </ul>
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage}
        type="button"
        className="mr-3 rounded bg-black px-4 py-2 font-bold text-white transition-all hover:bg-opacity-80"
      >
        Load More
      </button>
    </main>
  );
};

export default Inifnite;
