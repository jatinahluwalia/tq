"use client";

import { useID } from "@/hooks/useID";
import { NextPage } from "next";
import { useParams } from "next/navigation";
import React from "react";

const Page: NextPage = () => {
  const { superhero } = useParams();
  const { data } = useID(superhero);

  return <div>{data?.data.name}</div>;
};

export default Page;
