import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { AppBar, Toolbar, Box, Button, IconButton, Avatar, Menu, MenuItem, ListItemIcon, ListItemButton } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import { NavLinkCustom } from "./NavLinkCustom";
import KeyIcon from '@mui/icons-material/Key';
import { useAuth, useFetchAndLoad } from "../../hooks";
import { MenuItems } from "./MenuItems";
import { logout } from "../../services/public.service";

const useSx = {
  boxContent: {
    display: "flex",
    width: "100vw",
    p: 1,
    alignItems: "center",
    justifyContent: "space-between",
    // border: "1px solid white"
  },
  boxLogo: {
    width: "10%",
    height: "10%",
    // border: "1px solid white"
  },
  menuTab: {
    flexWrap: "wrap",
    display: "flex",
    width: "70%",
    alignItems: "center",
    // border: "1px solid white"
  },
  boxAvatar: {
    flexWrap: "wrap",
    display: "flex",
    // maxWidth: "15vw",
    alignItems: "center",
    // border: "1px solid white"
  },
  menuItem: {
    color: "primary.main",
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    '& .MuiListItemIcon-root': {
      color: "secondary.main",
    },
  },
};

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { callEndpoint } = useFetchAndLoad();

  const navigate = useNavigate();
  const { session, removeSession } = useAuth();
  const { boxContent, boxLogo, menuTab, boxAvatar, menuItem } = useSx;


  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = async () => {
    try {
      await callEndpoint(logout());
    } catch (error) {
      console.log("ERR LOGOUT ", error);
    } finally {
      removeSession();
      navigate("/");
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ ...boxContent }}>
          <Box component="img" alt="logo-kikoya" src="/imgs/logo-login.svg" sx={{ ...boxLogo }} />

          <Box sx={{ ...menuTab }}>
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
            <Button
              size="large"
              endIcon={<ArrowDropDownIcon />}
              sx={{ color: "white", textTransform: "none" }}
              onClick={handleClick}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              Bienvenido, @{session.user.name}
            </Button>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            PaperProps={{
              elevation: 0,
              sx: { ...menuItem }
            }}
          >
            <MenuItem>
              <ListItemButton>
                <ListItemIcon>
                  <KeyIcon fontSize="small" />
                </ListItemIcon>
                Cambiar contraseña
              </ListItemButton>
            </MenuItem>
            <MenuItem>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Salir
              </ListItemButton>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
