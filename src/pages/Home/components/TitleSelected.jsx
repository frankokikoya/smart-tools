import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box, Typography } from "@mui/material";

const useStyles = {
  itemContent: {
    flexWrap: "wrap",
    display: "flex",
    height: "8%",
    alignContent: "center",
    p: 1,
    pt: 2,
  },
};

export const TitleSelected = ({ title = "" }) => {
  const { itemContent } = useStyles;

  return (
    <Box sx={{ ...itemContent }}>
      <Typography component={Box} variant="h5" color="secondary" sx={{ fontWeight: "bold", ml: 2 }} gutterBottom>
        <CheckCircleOutlineIcon /> {title}
      </Typography>
    </Box>
  );
};
