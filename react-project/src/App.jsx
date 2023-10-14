import React from "react";
import Login from "./pages/login/LoginSignup";
import Register from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import { useRoutes } from "react-router";

const routes = [
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/home", element: <Home /> },
  { path: "/user", element: <User /> },
];

function App() {
  const element = useRoutes(routes);

  return element;
}

export default App;
