import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PageNotFound from "../pages/PageNotFound";
import PrivateRoutes from "./PrivateRoutes";
import Product from "../pages/Product";
import List from "../pages/List";

const Rotas = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route element={<PrivateRoutes role="ROLE_ADMIN,ROLE_USER" />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/list-product" element={<List />} />
      </Route>
      <Route element={<PrivateRoutes role="ROLE_ADMIN" />}>
        <Route path="/product" element={<Product />} />
      </Route>

      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default Rotas;
