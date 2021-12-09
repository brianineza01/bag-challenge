import React from "react";
import { AppContext } from "../Provider/AppProvider";

export function useApp() {
  return React.useContext(AppContext);
}
