/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { localAuth } from "../Helpers/authentication";
import { getToken } from "../Helpers/authHelper";
import { useApp } from "../Helpers/useApp";
import { useAuth } from "../Helpers/useAuth";
import CountryInfo from "./countryInfo";
import Dashboard from "./Dashboard";
import Explore from "./Explore";
import Login from "./Login/Index";
import Register from "./Register";
import { CheckAuthenticationOnLogin, RequireAuth } from "./RequireAuth";
import UserList from "./UserList";

export const Router = () => {
  const { setUser, user } = useAuth();
  const { fetchCountriesList, fetchUserCountryList, countriesList } = useApp();

  useEffect(() => {
    const tokenValues = getToken();
    if (tokenValues === null) {
      setUser(null);
    } else {
      localAuth.checkToken(() => {
        setUser({
          email: tokenValues.email,
          lastName: tokenValues.lastName,
          firstName: tokenValues.firstName,
          id: tokenValues.id,
          token: tokenValues.token,
        });
      });
    }
  }, [setUser]);

  // fetch the countries and store that data into the provider
  useEffect(() => {
    fetchCountriesList();
  }, []);
  useEffect(() => {
    fetchUserCountryList();
  }, [countriesList]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="register"
          element={
            <CheckAuthenticationOnLogin user={user}>
              <Register />
            </CheckAuthenticationOnLogin>
          }
        />
        <Route
          path="login"
          element={
            <CheckAuthenticationOnLogin user={user}>
              <Login />
            </CheckAuthenticationOnLogin>
          }
        ></Route>
        <Route
          path="/"
          element={
            <RequireAuth user={user}>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path="/explore" element={<Explore />} />
          <Route path="country/:name" element={<CountryInfo />} />
          <Route index element={<UserList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
