import React from "react";
import NotFound from "../notFound";

function Error() {
  console.log("notFound");

  return <NotFound data="We are sorry, but the page you requested was not found" status={404} statusText="Oops! Page not found" />;
}

export default Error;
