import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Dashboard = () => {
  return (
    <div>
      <div className="py-5 container" style={{ marginBottom: 38 }}>
        <div className="row dashlink_container mt-md-5 mt-3">
          <div className="col-md-4  position-relative">
            <Link
              className="link bg-danger d-flex align-items-center justify-content-center h-100 py-5 rounded text-center fw-bold text-white"
              to="/companieslist"
            >
              Companies List
            </Link>
          </div>
          <div className="col-md-4 position-relative">
            <Link
              className="link bg-danger d-flex align-items-center justify-content-center h-100 py-5 rounded text-center fw-bold text-white"
              to="/employeeslist"
            >
              Employees List
            </Link>
          </div>
          <div className="col-md-4 position-relative">
            <Link
              className="link bg-danger d-flex align-items-center justify-content-center h-100 py-5 rounded text-center fw-bold text-white"
              to="/addemployee"
            >
              Add Employess
            </Link>
          </div>
          <div className="col-md-4 position-relative">
            <Link
              className="link bg-danger d-flex align-items-center justify-content-center h-100 py-5 rounded text-center fw-bold text-white"
              to="/addcompany"
            >
              Add Company
            </Link>
          </div>
          <div className="col-md-4 position-relative">
            <Link
              className="link bg-danger d-flex align-items-center justify-content-center h-100 py-5 rounded text-center fw-bold text-white"
              to="/bulkyemployeesupload"
            >
              Bulk Employees Upload
            </Link>
          </div>
          <div className="col-md-4 position-relative">
            <Link
              className="link bg-danger d-flex align-items-center justify-content-center h-100 py-5 rounded text-center fw-bold text-white"
              to="/bulkycompaniesupload"
            >
              Bulky Companies Upload
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
