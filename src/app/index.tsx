import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "../routes";
import "./style.scss";
import { ColorModeContext, useMode } from "../themes";

const router = createBrowserRouter(routes);

function App() {
  const [theme, colorMode] = useMode();
  useEffect(() => {
    document.body.setAttribute("data-theme", theme.palette.mode);
  }, [theme.palette.mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />;
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
