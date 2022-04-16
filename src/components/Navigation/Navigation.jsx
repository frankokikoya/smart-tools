import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import RequireAuth from "./RequireAuth";
import { NavBarLayout } from "../NavBarLayout";
import { Login, Missing, Unauthorized, Home, Admin, Financier } from "../../pages";
import { Products } from "../../pages/Home/Products";

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
        {/* protected routes */}
        {/* only conected */}
        <Route element={<RequireAuth />}>
          <Route path="home" element={<NavBarLayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
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
