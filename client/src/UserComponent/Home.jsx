import React from "react";
import { useParams } from "react-router-dom";
import Rent from "./Rent";
import RentStatusPage from "./RentStatusPage";
import NavBar from "./Nav";

function Home() {
  const { id } = useParams();

  return (
    <>
      <NavBar />
      <Rent userId={id} />
      <RentStatusPage userId={id} />
    </>
  );
}

export default Home;
