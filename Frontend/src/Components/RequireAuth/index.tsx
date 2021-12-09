import { useLocation, Navigate } from "react-router-dom";
// import { useAuth } from "../../Helpers/useAuth";

function RequireAuth({ children, user }: { children: JSX.Element; user: any }) {
  // let auth = useAuth();
  let location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

function CheckAuthenticationOnLogin({
  children,
  user,
}: {
  children: JSX.Element;
  user: any;
}) {
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (!user) {
    return children;
  }

  return <Navigate to={from} state={{ from: location }} />;
}

export { RequireAuth, CheckAuthenticationOnLogin };
