import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = () => {
  const { isAuthenticated, token } = useAuth();

  return isAuthenticated && token ? <Outlet /> : "Loading...";
};

export default ProtectedRoute;
