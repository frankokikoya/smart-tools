import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Box } from "@mui/material";

const useStyles = {
  itemContent: {
    flexWrap: "wrap",
    display: "flex",
    height: "10%",
    alignItems: "flex-start",
    pt: 1,
    // border: "1px solid green"
  },
};

export const FilterBox = ({ initialValues={}, onSubmit=()=>({}), validationSchema=Yup.object({ }), children }) => {
  const { itemContent } = useStyles;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Box component={Form} sx={{ ...itemContent }}>
          {children}
        </Box>
      )}
    </Formik>
  );
};
