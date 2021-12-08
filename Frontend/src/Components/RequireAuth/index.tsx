import { useLocation, Navigate } from "react-router-dom";
// import { useAuth } from "../../Helpers/useAuth";

function RequireAuth({ children, user }: { children: JSX.Element; user: any }) {
  // let auth = useAuth();
  let location = useLocation();
  console.log(user);
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export default RequireAuth;
