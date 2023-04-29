import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useStore from "../store";

function ProtectecRoutes() {
  const userData = useStore.getState();

  return userData ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectecRoutes;
