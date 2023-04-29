import React, { Suspense } from "react";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Main() {
  return (
    <Suspense>
      <Outlet />
      <ToastContainer />
    </Suspense>
  );
}

export default Main;
