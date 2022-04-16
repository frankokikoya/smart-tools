import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { AppBar, Toolbar, Box, Button, IconButton, Avatar } from "@mui/material";
import { NavLinkCustom } from "./NavLinkCustom";
import { useAuth } from "../../hooks";
import { MenuItems } from "./MenuItems";

const useSx = {
  boxContent: {
    display: "flex",
    width: "100vw",
    p: 1,
    justifyContent: "space-between",
  },
  boxAvatar: { flexWrap: "wrap", display: "flex", width: "15vw" },
};

export const NavBar = () => {
  const navigate = useNavigate();
  const { session, removeSession } = useAuth();
  const { boxContent, boxAvatar } = useSx;

  const logout = () => {
    removeSession();
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ ...boxContent }}>
          <Box component="img" alt="logo-kikoya" src="/imgs/logo-login.svg" sx={{ width: "10%", height: "10%" }} />

          <Box sx={{ flexWrap: "wrap", display: "flex", width: "70%" }}>
            {MenuItems.map(({ id, label, path, icon, haveNested }) => {
              return (
                <Box key={`${id}-${label}`} component={NavLinkCustom} to={path} sx={{ my: 3, ml: 2 }} end={haveNested}>
                  {icon}
                  {label}
                </Box>
              );
            })}
          </Box>

          <Box sx={{ ...boxAvatar }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="avatar-kikoya" src="/imgs/avatar.svg" />
            </IconButton>
            <Button size="large" endIcon={<ArrowDropDownIcon />} sx={{ color: "white", textTransform: "none" }}>
              <Box sx={{ width: "100%" }}>Bienvenido, {session.user.name}</Box>
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
