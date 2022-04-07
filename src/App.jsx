import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import "./index.sass";
import MainLayout from "./components/MainLayout";
import RequireAuth from "./components/RequireAuth";
// import { AuthProvider } from "./context/AuthProvider";
import { Login, Missing, Unauthorized, Home, Admin, Financier } from "./pages";

const ROLES = {
  ADMIN: 1,
  FINANCIER: 2,
  USER: 3,
};

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<div>Loading ...</div>}>
          <BrowserRouter>
            {/* <AuthProvider> */}
            <Routes>
              <Route path="/" element={<MainLayout />}>
                {/* public routes */}
                <Route path="login" element={<Login />} />
                <Route path="unauthorized" element={<Unauthorized />} />
                {/* protected routes */}
                {/* only conected */}
                <Route element={<RequireAuth />}>
                  <Route path="/" element={<Home />} />
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
            {/* </AuthProvider> */}
          </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
