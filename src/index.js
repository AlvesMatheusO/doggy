import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesApp from './routes';
import {
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={RoutesApp} />
  </React.StrictMode>
);
