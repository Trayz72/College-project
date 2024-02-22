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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
