import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import Semsub from "./pages/SemSub/Semsub.jsx";
import MyState from "./context/data/myState.jsx";
import About from "./components/About/About.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<Layout/>}>
          <Route path="" element={<Home/>} />
          
          
          <Route path="admin" element={<Admin/>} />

          <Route path="Semsub" element={<Semsub/>} />   
          
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyState>
      <RouterProvider router={router} />
    </MyState>
  </React.StrictMode>
);
