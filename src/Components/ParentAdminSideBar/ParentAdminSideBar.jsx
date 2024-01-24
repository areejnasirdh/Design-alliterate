import React from "react";
import { useNavigate } from "react-router-dom";
import { BsPersonFillUp } from "react-icons/bs";
import { HiUsers } from "react-icons/hi2";
import { FaHandHoldingMedical } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import "./ParentAdminSideBar.css";
const ParentAdminSideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-sidebar parentAdminSidebar">
      <img src="/Images/Logo.png" alt="Logo.png" />
      <div>
        <button onClick={() => navigate("profile")}>
          <CgProfile />
          <p>Profile Settings</p>
        </button>

        <button onClick={() => navigate("practitioners/history")}>
          <BsPersonFillUp />
          <p>Practitioners</p>
        </button>

        <button onClick={() => navigate("end-user/history")}>
          <HiUsers />
          <p>End Users</p>
        </button>

        <button onClick={() => navigate("admin-services")}>
          <FaHandHoldingMedical />
          <p>Services</p>
        </button>
      </div>
    </div>
  );
};

export default ParentAdminSideBar;
