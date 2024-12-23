/* eslint-disable react/prop-types */
import "./Layout.css";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="layout-content">
        <main className="layout-body">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
