import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { DataContext } from "../Components/TheContext";

const ProtectedRoutes = () => {
  // const { auth } = useContext(DataContext);
  let auth = { token: true };
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
