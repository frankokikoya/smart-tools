import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import RequireAuth from "./RequireAuth";
import { NavBarLayout } from "../NavBarLayout";
import { ErrorToken, ErrorSystem } from "../../pages/Errors";
import { Products } from "../../pages/Home/Products";
import {
  Login,
  Home,
  Admin,
  Missing,
  Unauthorized,
  Financier,
  Recovery,
  SuccessPassword,
  NewPassword,
  Catalogs,
  SuccessEmailSend
} from "../../pages";

const ROLES = {
  ADMIN: 1,
  FINANCIER: 2,
  USER: 3,
};

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* public routes */}
        <Route index element={<Login />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="generate-password" element={<NewPassword />} />
        <Route path="recovery-password" element={<Recovery />} />
        <Route path="success-password" element={<SuccessPassword />} />
        <Route path="success-email" element={<SuccessEmailSend />} />
        <Route path="error-token" element={<ErrorToken />} />
        <Route path="error-system" element={<ErrorSystem />} />
        {/* protected routes */}
        {/* only conected */}
        <Route element={<RequireAuth />}>
          <Route element={<NavBarLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="products" element={<div>Productos...</div>} />
            <Route path="catalogs" element={<Catalogs />} />
            <Route path="settings" element={<Products />} />
          </Route>
        </Route>
        {/* ADMIN */}
        <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>
        {/* FINANCIER */}
        <Route element={<RequireAuth allowedRoles={[ROLES.FINANCIER]} />}>
          <Route path="financier" element={<Financier />} />
        </Route>
        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};
