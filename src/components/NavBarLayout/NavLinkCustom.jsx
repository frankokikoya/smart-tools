import React from "react";
import { NavLink } from "react-router-dom";
import { createStyles, makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) =>
  createStyles({
    activeLink: {
      color: theme.palette.secondary.main,
    },
    inacitveLink: {
      color: "white",
    },
  }, {index: 1})
);

export const NavLinkCustom = React.forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <NavLink
      ref={ref}
      to={props.to}
      style={{ textDecoration: "none" }}
      className={({ isActive }) => `${props.className} ${isActive ? classes.activeLink : classes.inacitveLink}`}
      end={props.end ? true : false}
    >
      <Typography variant="body3" sx={{ alignItems: "center", display: "flex" }}>
        {props.children}
      </Typography>
    </NavLink>
  );
});
