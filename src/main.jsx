import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./components/pages/About.jsx";
import Contatti from "./components/pages/Contatti.jsx";
import Cards from "./components/pages/Cards.jsx";
import Card from "./components/pages/Card.jsx";
import CardsChildren from "./components/pages/CardsChildren.jsx";

import store from "./components/redux/store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/contatti",
    element: <Contatti></Contatti>,
  },
  {
    path: "/cards",
    element: <Cards></Cards>,
  },
  {
    path: "/cards/:cardID",
    element: <Card />,
  },
  {
    path: "/cards-children",
    element: <CardsChildren></CardsChildren>,
    children: [
      {
        path: ":cardID",
        element: <Card />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
