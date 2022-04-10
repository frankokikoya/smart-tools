import React from "react";
import Grid from "@mui/material/Grid";
import { LoginLeft, LoginRight, LoginForm } from "./components";

// root@kikoya.io
// 12345678
// kikoya.io
export const Login = () => {

  return (
    <Grid container sx={{ height: "100vh", width: "100vw", margin: 0 }}>
      <Grid
        item
        xs={6}
        sx={{
          height: "100vh",
          background: "url(imgs/bg-login.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <LoginLeft />
      </Grid>
      <Grid item xs={6}>
        <LoginRight>
          <LoginForm />
        </LoginRight>
      </Grid>
    </Grid>
  );
};
