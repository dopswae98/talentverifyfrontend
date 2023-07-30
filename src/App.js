import React, { useContext, useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";

import { Routes, Route } from "react-router-dom";
import CompanyList from "./Pages/CompanyList";
import EmployeeList from "./Pages/EmployeeList";
import "./App.css";
import EditCompany from "./Pages/EditCompany";
import { DataContext, DataContextProvider } from "./Components/TheContext";
import CSVUploader from "./Pages/CSVUploader";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import LoginPage from "./Pages/LoginPage";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Pages/Dashboard";
import Notfound from "./Pages/Notfound";
import BulkyEmployeesUpload from "./Pages/BulkyEmployeesUpload";
import AddEmployee from "./Pages/AddEmployee";
import EditEmployee from "./Pages/EditEmployee";
import AddCompany from "./Pages/AddCompany";
import BulkyCompaniesUpload from "./Pages/BulkyCompaniesUpload";

function App() {
  // const [auth, setAuth, setIsAuthenticated] = useState(null);
  // const { login } = useContext(DataContext);
  // useEffect(() => {
  //   // Check if token exists in storage and update authentication state
  //   const token = localStorage.getItem("token");
  //   console.log("token", token);
  //   // login();

  //   if (token) {
  //     // Update authentication state using your login logic if needed
  //     // login();
  //     // Example: auth.login();
  //   }
  // }, []);
  return (
    <DataContextProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/companieslist" element={<CompanyList />} />
          <Route path="/companieslist/:companyid" element={<EditCompany />} />
          <Route path="/addcompany" element={<AddCompany />} />
          <Route
            path="/bulkycompaniesupload"
            element={<BulkyCompaniesUpload />}
          />
          <Route path="/employeeslist" element={<EmployeeList />} />
          <Route path="/employeeslist/:employeeid" element={<EditEmployee />} />
          <Route path="/addemployee" element={<AddEmployee />} />
          <Route
            path="/bulkyemployeesupload"
            element={<BulkyEmployeesUpload />}
          />
          {/* <Route path="/upload-csv" element={<CSVUploader />} />
          <Route path="/dashboard" element={<CompanyList />} />
          <Route
            path="/companies/:companyId/employees"
            element={<EmployeeList />}
          />
          <Route path="/upload-csv" element={<CSVUploader />} /> */}
        </Route>
        <Route path="/*" element={<Notfound />} />
        {/* <PrivateRoute path="/*" element={<PrivateComponent />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/upload-csv" element={<CSVUploader />} />
          <Route path="/dashboard" element={<CompanyList />} />
          <Route
            path="/companies/:companyId/employees"
            element={<EmployeeList />}
          />
          <Route path="/companyDetail/:id" element={<EditCompany />} />
          {/* <Route path="/" element={<CSVUploader />} /> */}
        {/* </Route> */}

        {/* <Route path="/" exact element={<LoginPage />} /> */}
      </Routes>
    </DataContextProvider>
  );
}

export default App;
library.add(fab, fas);
