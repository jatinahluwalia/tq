"use client";

import { NextPage } from "next";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { Color, ServerError } from "@/types";

const fetchColors = (pageNumber: number) =>
  axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);

const Pagination: NextPage = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const buttonClass =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3";

  const { data, isError, isLoading, error } = useQuery<
    AxiosResponse<Color[]>,
    AxiosError<ServerError>
  >({
    queryKey: ["colors", pageNumber],
    queryFn: () => fetchColors(pageNumber),
    keepPreviousData: true,
  });

  if (isLoading) {
    return <main>Loading...</main>;
  }

  if (isError) {
    return <main>Error: {error?.message}</main>;
  }

  return (
    <main>
      <h1>Colors</h1>
      <ul>
        {data?.data.map((color) => (
          <li key={color.id}>
            {color.id} - {color.name}
          </li>
        ))}
      </ul>
      <button
        className={buttonClass}
        onClick={() => setPageNumber((prev) => prev - 1)}
        disabled={pageNumber === 1}
        type="button"
      >
        Prev
      </button>
      <button
        className={buttonClass}
        onClick={() => setPageNumber((prev) => prev + 1)}
        disabled={data?.headers["x-total-count"] / 2 === pageNumber}
        type="button"
      >
        Next
      </button>
    </main>
  );
};

export default Pagination;
