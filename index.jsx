import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Contact from "./component/Contact";
import Home from "./component/Home";
import CountryPage from "/component/CountryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>An Error Occured </div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/:country",
        element: <CountryPage />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={router} />);
