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
import Aboutus from "./UserComponent/Aboutus";
import Login from "./UserComponent/Login";
import Register from "./UserComponent/Register";
import Home from "./UserComponent/Home";
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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home/:userId" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Visitor />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/admin" element={<AdminPage />}></Route>
          <Route path="/location" element={<Locations />}></Route>
          <Route path="/alladmins" element={<Admin />}></Route>
          <Route path="/create" element={<CreateAdmin />}></Route>
          <Route path="/update/:id" element={<UpdateAdmin />}></Route>
          <Route path="/state" element={<State />}></Route>
          <Route path="/createState" element={<CreateState />}></Route>
          <Route path="/updateState/:id" element={<UpdateState />}></Route>
          <Route path="/city" element={<City />}></Route>
          <Route path="/createCity" element={<CreateCity />}></Route>
          <Route path="/CityUpdate/:id" element={<CityUpdate />}></Route>
          <Route path="/area" element={<Area />}></Route>
          <Route path="/createArea" element={<CreateArea />}></Route>
          <Route path="/AreaUpdate/:id" element={<AreaUpdate />}></Route>
          <Route path="/services" element={<Service />}></Route>
          <Route path="/AddService" element={<AddService />}></Route>
          <Route path="/UpdateService/:id" element={<UpdateService />}></Route>
          <Route path="/rentableItems" element={<RentableItem />}></Route>
          <Route
            path="/UpdateRentableItem/:id"
            element={<UpdateRentableItem />}
          ></Route>
          <Route
            path="/CreateRentableItem"
            element={<CreateRentableItem />}
          ></Route>
          <Route
            path="/createProductType"
            element={<CreateProductType />}
          ></Route>
          <Route path="/productType" element={<ProductType />}></Route>
          <Route
            path="/productTypeUpdate/:id"
            element={<ProductTypeUpdate />}
          ></Route>

          <Route
            path="/createProductCategory"
            element={<CreateProductCategory />}
          ></Route>
          <Route path="/productCategory" element={<ProductCategory />}></Route>
          <Route
            path="/productCategoryUpdate/:id"
            element={<ProductCategoryUpdate />}
          ></Route>

          <Route
            path="/createProductWeight"
            element={<CreateProductWeight />}
          ></Route>
          <Route path="/productWeight" element={<ProductWeight />}></Route>
          <Route
            path="/productWeightUpdate/:id"
            element={<ProductWeightUpdate />}
          ></Route>
          <Route path="/products" element={<Product />}></Route>
          <Route path="/workerDashboard" element={<WrokerDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
