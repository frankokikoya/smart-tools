import React from "react";
import { useNavigate } from "react-router-dom";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { AppBar, Toolbar, Box, Button, IconButton, Avatar } from "@mui/material";
import { NavLinkCustom } from "./NavLinkCustom";
import { useAuth } from "../../hooks";

const useSx = {
  boxContent: {
    display: "flex",
    width: "100vw",
    p: 1,
    justifyContent: "space-between",
  },
  menuItem: { my: 2, ml: 2, textTransform: "none" },
  boxAvatar: { flexWrap: "wrap", display: "flex", width: "15vw" },
};

export const NavBar = () => {
  const navigate = useNavigate();
  const { session, removeSession } = useAuth();
  const { boxContent, menuItem, boxAvatar } = useSx;

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
            <Box component={NavLinkCustom} to={"/home"} sx={{ my: 3, ml: 2 }} end>
              <CheckCircleOutlineIcon style={{ marginRight: 5 }} fontSize="small" />
              Cotizaciones
            </Box>
            <Box component={NavLinkCustom} to={"products"} sx={{ my: 3, ml: 2 }}>
              <Inventory2OutlinedIcon style={{ marginRight: 5 }} fontSize="small" />
              Productos/Planes
            </Box>
            <Button startIcon={<ArticleOutlinedIcon />} sx={{ ...menuItem, color: "white" }}>
              Catálogos
            </Button>
            <Button startIcon={<SettingsOutlinedIcon />} sx={{ ...menuItem, color: "white" }}>
              Configuración
            </Button>
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
