import React from "react";
import { useNavigate } from "react-router-dom";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { AppBar, Toolbar, Box, Button, IconButton, Avatar } from "@mui/material";
import { useAuth } from "../../hooks";

const useStyles = {
  boxContent: {
    display: "flex",
    width: "100vw",
    p: 1,
    justifyContent: "space-between",
  },
  menuItem: { my: 2, ml: 2, color: "white", textTransform: "none" },
  boxAvatar: { flexWrap: "wrap", display: "flex", width: "15vw" },
};

const NavBar = () => {
  const navigate = useNavigate();
  const { session, removeSession } = useAuth();
  const { boxContent, menuItem, boxAvatar } = useStyles;

  const logout = () => {
    removeSession();
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ ...boxContent }}>
          <Box component="img" alt="logo-kikoya" src="imgs/logo-login.svg" sx={{ width: "10%", height: "10%" }} />

          <Box sx={{ flexWrap: "wrap", display: "flex", width: "70%" }}>
            <Button startIcon={<CheckCircleOutlineIcon />} sx={{ ...menuItem }}>
              Cotizaciones
            </Button>
            <Button startIcon={<Inventory2OutlinedIcon />} sx={{ ...menuItem }}>
              Productos/Planes
            </Button>
            <Button startIcon={<ArticleOutlinedIcon />} sx={{ ...menuItem }}>
              Catálogos
            </Button>
            <Button startIcon={<SettingsOutlinedIcon />} sx={{ ...menuItem }}>
              Configuración
            </Button>
          </Box>

          <Box sx={{ ...boxAvatar }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="avatar-kikoya" src="imgs/avatar.svg" />
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

export { NavBar };
