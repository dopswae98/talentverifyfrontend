import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { DataContext } from "../Components/TheContext";
import CompanyList from "../Pages/CompanyList";

const ProtectedRoutes = () => {
  // // const { auth } = useContext(DataContext);
  // let auth = { token: true };
  // return auth ? <Outlet /> : <Navigate to="/" />;

  const { isAuthenticated } = useContext(DataContext);

  return isAuthenticated ? (
    <Route path={path} element={<CompanyList />} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoutes;
