import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { loginPath } from "../constants/routes";

const useAuth = () => {
  const user = { logginIn: false };
  return user && user.logginIn;
};

function PrivateRoutes() {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to={loginPath} />;
}

export default PrivateRoutes;
