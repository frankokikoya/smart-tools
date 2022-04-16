import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { NavBar } from "./NavBar";

const useStyles = {
  root: {
    height: "100vh",
    width: "100vw",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%"
  },
};

export const NavBarLayout = () => {
  const { root, content } = useStyles;

  return (
    <>
      <Grid container sx={{ ...root }}>
        <NavBar />
        <Grid item xs={12} sx={{ height: "90%" }}>
          <Box sx={{ ...content }}>
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
