import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { localAuth } from "../Helpers/authentication";
import { getToken } from "../Helpers/authHelper";
import { useApp } from "../Helpers/useApp";
import { useAuth } from "../Helpers/useAuth";
import CountryInfo from "./countryInfo";
import Dashboard from "./Dashboard";
import CountryList from "./Dashboard/CountryList";
import Login from "./Login/Index";
import Register from "./Register";
import { CheckAuthenticationOnLogin, RequireAuth } from "./RequireAuth";
import UserList from "./UserList";

export const Router = () => {
  const { setUser, user } = useAuth();
  const { fetchCountriesList, countriesList } = useApp();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <Route
            path="/explore"
            element={<CountryList title="Explore" list={countriesList} />}
          />
          <Route path="country/:id" element={<CountryInfo />} />
          <Route index element={<UserList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
