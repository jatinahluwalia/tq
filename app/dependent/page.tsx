"use client";

import { NextPage } from "next";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { Channel, ServerError, User } from "@/types";

const email: string = "jatin.ahluwalia.5@gmail.com";

const fetchUserByEmail = () =>
  axios.get(`http://localhost:4000/users/${email}`);
const fetchChannelById = (id: string | undefined) =>
  axios.get(`http://localhost:4000/channels/${id}`);

const Dependent: NextPage = () => {
  const { data: user } = useQuery<AxiosResponse<User>, AxiosError<ServerError>>(
    {
      queryKey: ["user", email],
      queryFn: fetchUserByEmail,
    },
  );

  const channelId = user?.data.channelId;

  const { data: channel } = useQuery<
    AxiosResponse<Channel>,
    AxiosError<ServerError>
  >({
    queryKey: ["channel", channelId],
    enabled: !!channelId,
    queryFn: () => fetchChannelById(channelId),
  });

  return <main></main>;
};

export default Dependent;
