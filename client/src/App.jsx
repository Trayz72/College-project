import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Admin } from "./Component/Admin";
import { CreateAdmin } from "./Component/CreateAdmin";
import { UpdateAdmin } from "./Component/UpdateAdmin";
import { State } from "./Component/State";
import { CreateState } from "./Component/CreateState";
import { UpdateState } from "./Component/UpdateState";
import { CreateCity } from "./Component/CreateCity";
import { City } from "./Component/City";
import { CityUpdate } from "./Component/CityUpdate";
import Visitor from "./UserComponent/Visitor";
import About from "./UserComponent/About";
import Login from "./UserComponent/Login";
import Register from "./UserComponent/Register";
import AdminPage from "./AdminDashboard/AdminPage";
import Locations from "./AdminDashboard/Locations";
import { CreateArea } from "./Component/CreateArea";
import { Area } from "./Component/Area";
import { AreaUpdate } from "./Component/AreaUpdate";
import { CreateProductType } from "./Component/CreateProductType";
import { ProductType } from "./Component/ProductType";
import { ProductTypeUpdate } from "./Component/ProductTypeUpdate";
import { CreateProductCategory } from "./Component/CreateProductCategory";
import { ProductCategory } from "./Component/ProductCategory";
import { ProductCategoryUpdate } from "./Component/ProductCategoryUpdate";
import { CreateProductWeight } from "./Component/CreateProductWeight";
import { ProductWeight } from "./Component/ProductWeight";
import { ProductWeightUpdate } from "./Component/ProductWeightUpdate";
import Product from "./AdminDashboard/Product";
import WrokerDashboard from "./UserComponent/WrokerDashboard";
import Service from "./Component/Services";
import AddService from "./Component/AddService";
import UpdateService from "./Component/UpdateService";
import RentableItem from "./Component/RentableItem";
import UpdateRentableItem from "./Component/UpdateRentableItem";
import CreateRentableItem from "./Component/CreateRentableItem";
import { RentReq } from "./Component/RentReq";
import Rent from "./UserComponent/Rent";
import RentStatusPage from "./UserComponent/RentStatusPage";
import Home from "./UserComponent/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home/:id/*" element={<Home />}>
          <Route path="rent" element={<Rent />} />
          <Route path="rentStatus" element={<RentStatusPage />} />
          {/* Add other nested routes here... */}
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Visitor />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/location" element={<Locations />} />
        <Route path="/alladmins" element={<Admin />} />
        <Route path="/create" element={<CreateAdmin />} />
        <Route path="/update/:id" element={<UpdateAdmin />} />
        <Route path="/state" element={<State />} />
        <Route path="/createState" element={<CreateState />} />
        <Route path="/updateState/:id" element={<UpdateState />} />
        <Route path="/city" element={<City />} />
        <Route path="/createCity" element={<CreateCity />} />
        <Route path="/CityUpdate/:id" element={<CityUpdate />} />
        <Route path="/area" element={<Area />} />
        <Route path="/createArea" element={<CreateArea />} />
        <Route path="/AreaUpdate/:id" element={<AreaUpdate />} />
        <Route path="/services" element={<Service />} />
        <Route path="/AddService" element={<AddService />} />
        <Route path="/UpdateService/:id" element={<UpdateService />} />
        <Route path="/rentableItems" element={<RentableItem />} />
        <Route path="/RentReq" element={<RentReq />} />
        <Route
          path="/UpdateRentableItem/:id"
          element={<UpdateRentableItem />}
        />
        <Route path="/CreateRentableItem" element={<CreateRentableItem />} />
        <Route path="/createProductType" element={<CreateProductType />} />
        <Route path="/productType" element={<ProductType />} />
        <Route path="/productTypeUpdate/:id" element={<ProductTypeUpdate />} />
        <Route
          path="/createProductCategory"
          element={<CreateProductCategory />}
        />
        <Route path="/productCategory" element={<ProductCategory />} />
        <Route
          path="/productCategoryUpdate/:id"
          element={<ProductCategoryUpdate />}
        />
        <Route path="/createProductWeight" element={<CreateProductWeight />} />
        <Route path="/productWeight" element={<ProductWeight />} />
        <Route
          path="/productWeightUpdate/:id"
          element={<ProductWeightUpdate />}
        />
        <Route path="/products" element={<Product />} />
        <Route path="/workerDashboard" element={<WrokerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
