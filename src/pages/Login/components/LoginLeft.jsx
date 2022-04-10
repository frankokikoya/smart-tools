import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const LoginLeft = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        p: 1,
        // border: "3px solid black",
      }}
    >
      <Box
        // component={Paper}
        sx={{
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          height: "90%",
          // border: "3px solid green",
        }}
      >
        <Typography
          component={Box}
          variant="h2"
          color="common.white"
          sx={{
            width: "50%",
            fontWeight: "bold",
            // border: "1px solid black"
          }}
          gutterBottom
        >
          ¡Vamos tras bambalinas!
        </Typography>
        <Typography
          component={Box}
          variant="h6"
          color="common.white"
          sx={{
            width: "50%",
            fontWeight: "bold",
            fontSize: 30,
            // border: "1px solid black"
          }}
          gutterBottom
        >
          Inicia tu sesión en Kikoya para gestionar tu cotizador
        </Typography>
        <Typography
          component={Box}
          variant="h6"
          color="common.white"
          sx={{
            fontSize: 22,
            // border: "1px solid black"
          }}
          gutterBottom
        >
          Realiza otra cotización, aquí
        </Typography>
      </Box>
      <Box
        // component={Paper}
        sx={{
          height: "10%",
          // border: "3px solid blue",
        }}
      >
        <Typography
          variant="h6"
          color="common.white"
          component={Box}
          sx={{ m: 2 }}
          style={{ fontWeight: "bold", fontSize: 30 }}
          gutterBottom
        >
          Smooth Journeys. Smart Decisions.
        </Typography>
      </Box>
    </Box>
  );
};
