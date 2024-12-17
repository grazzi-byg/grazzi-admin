import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../layouts/Layout";
import Page404 from "../pages/page-404/Page404";
import Dashboard from "../pages/dashboard/Dashboard";

export default function RoutesGrazzi() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
