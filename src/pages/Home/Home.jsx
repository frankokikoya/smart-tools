import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";

export const Home = () => {
  const navigate = useNavigate();
  const { session, removeSession } = useAuth();

  const logout = () => {
    removeSession();
    navigate("/login");
  };

  return (
    <div>
      Welcome {session.user.name} you logged with {session.user.email}
      <br />
      <Button variant="outlined" startIcon={<DeleteIcon />} onClick={logout}>
        Delete session
      </Button>
    </div>
  );
};
