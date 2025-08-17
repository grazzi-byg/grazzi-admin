import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../layouts/Layout";
import Page404 from "../pages/page-404/Page404";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import Sales from "../pages/sales/Sales";
import Inventory from "../pages/inventory/Inventory";
import Logout from "../pages/logout/Logout";
import ProtectedRoute from "./ProtectedRoute";
import FormProduct from "../components/forms/form-product/FormProduct";

export default function RoutesGrazzi() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path="logout" element={<Logout />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="sales" element={<Sales />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="inventory/create-product" element={<FormProduct strategy="CREATE" />} />
          </Route>
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
