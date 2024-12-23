import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../layouts/Layout";
import Page404 from "../pages/page-404/Page404";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import Sales from "../pages/sales/Sales";
import Products from "../pages/products/Products";
import CreateProduct from "../pages/products/create-product/CreateProduct";

export default function RoutesGrazzi() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sales" element={<Sales />} />
          <Route path="products" element={<Products />} />
          <Route path="products/create" element={<CreateProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
