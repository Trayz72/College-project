import React from "react";
import { useParams } from "react-router-dom";
import Rent from "./Rent";

function Home() {
  const { userId } = useParams();

  return (
    <>
      <Rent userId={userId} />
      Welcome home
    </>
  );
}

export default Home;
