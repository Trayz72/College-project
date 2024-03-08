import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Route, Routes } from "react-router-dom";
import Rent from "./Rent";
import RentStatusPage from "./RentStatusPage";
import NavBar from "./Nav";
import { logContext } from "../Context";
import ServiceRequestForm from "./ServiceRequestForm";
import ServiceStatus from "./ServiceStatus";
import ProductList from "./Pages/ProductList";

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
        {/* <ProductList /> */}
        {/* Use nested Routes */}
        <Routes>
          {/* Use the `element` prop to specify the component for rendering */}
          <Route path="/" element={<ProductList />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/rentStatus" element={<RentStatusPage />} />
          <Route path="/serviceForm" element={<ServiceRequestForm />} />
          <Route path="/serviceStatus" element={<ServiceStatus />} />
        </Routes>
      </logContext.Provider>
    </>
  );
}

export default Home;
