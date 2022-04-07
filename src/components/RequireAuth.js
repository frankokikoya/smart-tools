import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const [session] = useAuth();

  const location = useLocation();

  const getRole = session ? session?.user?.role?.id : null;

  return allowedRoles?.includes(getRole) ? (
    <Outlet />
  ) : session?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
