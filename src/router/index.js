import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
// 懒加载的页面
const Home = lazy(() => import("@/views/home"));
const Detail = lazy(() => import("@/views/detail"));
const Entire = lazy(() => import("@/views/entire"));
const Error = lazy(() => import("@/views/error"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/entire",
    element: <Entire />,
  },
  {
    path: "/error",
    element: <Error />,
  },
  {
    path: "*",
    element: <Navigate to="/error" />,
  },
];

export default routes;
