import React from "react";
import Grid from "@mui/material/Grid";
import useStyles from "./Login.styles";
import { LoginLeft, LoginRight, LoginForm } from "./components";

// root@kikoya.io
// 12345678
// kikoya.io
export const Login = () => {
  const classes = useStyles();
  const { gridContainder, gridItem } = classes;
  return (
    <Grid container className={gridContainder}>
      <Grid item xs={6} className={gridItem}>
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
