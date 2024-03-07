import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Route, Routes } from "react-router-dom";
import Rent from "./Rent";
import RentStatusPage from "./RentStatusPage";
import NavBar from "./Nav";
import { logContext } from "../Context";

function Home() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);

  const logout = () => {
    setUserId(null);
    navigate("/");
  };

  useEffect(() => {
    setUserId(id);
  }, [id]);

  return (
    <>
      <logContext.Provider value={{ userId, setUserId, logout }}>
        <NavBar />
        {/* Use nested Routes */}
        <Routes>
          {/* Use the `element` prop to specify the component for rendering */}
          <Route path="/rent" element={<Rent />} />
          <Route path="/rentStatus" element={<RentStatusPage />} />
        </Routes>
      </logContext.Provider>
    </>
  );
}

export default Home;
