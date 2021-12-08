import React from "react";
import { AuthContext } from "../Provider/AuthProvider";

export function useAuth() {
  return React.useContext(AuthContext);
}
