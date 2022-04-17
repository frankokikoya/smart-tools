import React from "react";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { NavBar } from "./NavBar";

const useStyles = {
  root: {
    height: "100vh",
    width: "100vw",
  },
};

export const NavBarLayout = () => {
  const { root } = useStyles;

  return (
    <Grid container sx={{ ...root }}>
      <NavBar />
      <Grid item xs={12} sx={{ height: "90%" }}>
        <Outlet />
      </Grid>
    </Grid>
  );
};
