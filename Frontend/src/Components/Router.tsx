import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryInfo from "./countryInfo";
import Dashboard from "./Dashboard";
import CountryList from "./Dashboard/CountryList";
import Login from "./Login/Index";
import Register from "./Register";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />}></Route>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<CountryList />} />
          <Route path="country/:id" element={<CountryInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
