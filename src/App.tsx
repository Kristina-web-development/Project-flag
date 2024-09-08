import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Louyt from "./View/Louyt";
import Flag from "./View/Pages/Flag";
import { getTheme } from "./View/Pages/getTheme";
import MainPage from "./View/Pages/MainPage";


function App() {
  const [theme, setTheme] = useState(getTheme); //theme = "dark"/"light"

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Louyt setTheme={setTheme} theme={theme}/>,
      children: [
        {
          index: true,
          element: <MainPage theme={theme}/>,
        },
        {
          path: "country/:countryName",
          element: <Flag theme={theme}/>,
        },
        { path: "/nahui", element: <></> },
      ],
    },
  ]);

  useEffect(() => {
    localStorage.setItem("weather-theme", theme);
  }, [theme]);

  return <RouterProvider router={router} />;
}

export default App;
