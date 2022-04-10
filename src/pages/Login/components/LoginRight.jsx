import React from "react";
import Box from "@mui/material/Box";

export const LoginRight = ({ children }) => {
  return (
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
          // border: "3px solid green",
        }}
      >
        <Box
          component="div"
          sx={{
            height: "65%",
            width: "70%",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
