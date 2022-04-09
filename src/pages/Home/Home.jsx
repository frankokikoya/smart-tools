import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import LoginRight from "./components/LoginRight";

const Home = () => {
  const navigate = useNavigate();
  const { 0: session, 2: removeSession } = useAuth();

  const logout = async () => {
    await removeSession();
    navigate("/login");
  };

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
          //backgroundSize: "100% 100%"
        }}
      >
        <LoginRight />
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // border: "3px solid grey",
          }}
        >
          <Box
            sx={{
              flexWrap: "wrap",
              display: "flex",
              height: "15vh",
              flexDirection: "row-reverse",
              bgcolor: "background.paper",
              // border: "3px solid red",
            }}
          >
            <Box
              component="img"
              alt="logo-kikoya"
              src="imgs/logo-kikoya.svg"
              sx={{
                m: 2,
                // border: "3px solid purple",
                maxWidth: "60%",
                maxHeight: "60%",
              }}
            />
          </Box>
          <Box
            sx={{
              flexWrap: "wrap",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              height: "85vh",
              border: "3px solid green",
            }}
          >
            <Box
              component={Paper}
              sx={{
                height: "30%",
                width: "30%",
              }}
            ></Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
