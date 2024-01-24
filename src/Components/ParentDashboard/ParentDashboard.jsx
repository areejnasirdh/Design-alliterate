import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AdminHeader from "../AdminHeader/AdminHeader.jsx";
import ParentAdminSideBar from "../ParentAdminSideBar/ParentAdminSideBar.jsx";
import AdminFooter from "../AdminFooter/AdminFooter.jsx";
import "./ParentDashboard.css";
const ParentDashboard = () => {
  // let token = localStorage.getItem("token");
  let token = true;
  return (
    <>
      {token ? (
        <div className="dashboard-container">
          <img src="/Images/Header-Bg.png" alt="Header-Bg.png" />
          <div className="dashboard">
            <ParentAdminSideBar />
            <div>
              <AdminHeader />
              <Outlet />
            </div>
          </div>
          <AdminFooter />
        </div>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default ParentDashboard;
