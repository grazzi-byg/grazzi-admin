import "./Sidebar.css";
import { useState } from "react";
import { Link } from "react-router";
import LogoGrazzi2D from "../../components/logo-grazzi-2D/LogoGrazzi2D";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className="sidebar-container">
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>
      <nav className={`sidebar${isSidebarOpen ? "-open" : ""}`}>
        <div className="sidebar-logo">
          <LogoGrazzi2D />
        </div>
        <ul className="sidebar-list">
          <li>
            <Link
              to="/dashboard"
              className="sidebar-link"
              onClick={() => setIsSidebarOpen(false)}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/sales"
              className="sidebar-link"
              onClick={() => setIsSidebarOpen(false)}
            >
              Ventas
            </Link>
          </li>
          <li>
            <Link
              to="/inventory"
              className="sidebar-link"
              onClick={() => setIsSidebarOpen(false)}
            >
              Inventario
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className="sidebar-link"
              onClick={() => setIsSidebarOpen(false)}
            >
              Usuarios
            </Link>
          </li>
          <li>
            <Link
              to="/general"
              className="sidebar-link"
              onClick={() => setIsSidebarOpen(false)}
            >
              General
            </Link>
          </li>
          <li>
            <Link
              to="/logout"
              className="sidebar-link"
              onClick={() => setIsSidebarOpen(false)}
            >
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
