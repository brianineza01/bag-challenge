import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { localAuth } from "../Helpers/authentication";
import { getToken } from "../Helpers/authHelper";
import { useAuth } from "../Helpers/useAuth";
import CountryInfo from "./countryInfo";
import Dashboard from "./Dashboard";
import CountryList from "./Dashboard/CountryList";
import Login from "./Login/Index";
import Register from "./Register";
import RequireAuth from "./RequireAuth";

export const Router = () => {
  const { setUser, user } = useAuth();
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

  useEffect(() => console.log("user updated"), [user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route
          path="login"
          element={!user ? <Login /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/"
          element={
            <RequireAuth user={user}>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<CountryList />} />
          <Route path="country/:id" element={<CountryInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
