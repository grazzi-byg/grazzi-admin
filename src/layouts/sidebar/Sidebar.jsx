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
          <li className="sidebar-item">
            <Link
              to="/dashboard"
              className="sidebar-link link"
              onClick={() => setIsSidebarOpen(false)}
            >
              DASHBOARD
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/inventory"
              className="sidebar-link link"
              onClick={() => setIsSidebarOpen(false)}
            >
              INVENTARIO
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/sales"
              className="sidebar-link link"
              onClick={() => setIsSidebarOpen(false)}
            >
              VENTAS
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/shipments"
              className="sidebar-link link"
              onClick={() => setIsSidebarOpen(false)}
            >
              ENVIOS
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/customers"
              className="sidebar-link link"
              onClick={() => setIsSidebarOpen(false)}
            >
              CLIENTES
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/claims"
              className="sidebar-link link"
              onClick={() => setIsSidebarOpen(false)}
            >
              RECLAMACIONES
            </Link>
          </li>
          <li className="sidebar-item sidebar-item-logout">
            <Link
              to="/logout"
              className="sidebar-link link"
              onClick={() => setIsSidebarOpen(false)}
            >
              SALIR
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
