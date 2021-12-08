import React from "react";
import superFetch from "../Config/superFetch";
import { localAuth } from "../Helpers/authentication";
import { removeToken, saveToken } from "../Helpers/authHelper";
interface AuthContextType {
  user: any;
  signIn: (user: any, callback: (status: string) => void) => void;
  signOut: (callback: VoidFunction) => void;
  setUser: any;
}

let AuthContext = React.createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>(null);

  let signIn = (values: any, callback: (status: string) => void) => {
    return localAuth.signIn(async () => {
      try {
        const { data } = await superFetch.post("/login", values);
        saveToken(data.data.token);
        setUser({ ...data.data.user, token: data.data.token });
        return callback("success");
      } catch (error: any) {
        const { status } = error.toJSON();
        setUser(null);
        if (status === 404) return callback("email or password incorrect");
        return callback("internal server error");
      }
    });
  };

  let signOut = (callback: VoidFunction) => {
    return localAuth.signOut(() => {
      removeToken();
      setUser(null);
      callback();
    });
  };

  let value = { user, signIn, signOut, setUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext };
export default AuthProvider;
