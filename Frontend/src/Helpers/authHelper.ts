import jwtDecode from "jwt-decode";

const saveToken = (token: string) => {
  window.localStorage.setItem("token", token);
};

const removeToken = () => {
  window.localStorage.removeItem("token");
};

type tokenType = {
  exp: number;
  email: string;
  firstName: string;
  lastName: string;
  iat: number;
  id: string;
};

const getToken = () => {
  const token = window.localStorage.getItem("token");
  if (token === null) return null;
  const decodedToken: tokenType = jwtDecode(token);
  if (decodedToken.exp < Date.now() / 1000) {
    localStorage.clear();
    return null;
  }
  return { ...decodedToken, token };
};

export { saveToken, removeToken, getToken };
