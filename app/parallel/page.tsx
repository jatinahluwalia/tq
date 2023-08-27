import { NextPage } from "next";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchSuperheroes = () => axios.get("http://localhost:4000/superheroes");
const fetchFriends = () => axios.get("http://localhost:4000/friends");

const Parallel: NextPage = () => {
  const { data: superheroes } = useQuery({
    queryKey: ["superhero-get"],
    queryFn: fetchSuperheroes,
  });

  const { data: friends } = useQuery({
    queryKey: ["friends"],
    queryFn: fetchFriends,
  });

  return <main>Parallel Queries</main>;
};

export default Parallel;
