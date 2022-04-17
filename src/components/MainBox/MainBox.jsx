import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Box } from "@mui/material";

const useStyles = {
  mainContent: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  submenuContent: {
    flexWrap: "wrap",
    display: "flex",
    height: "8%",
    alignContent: "center",
    p: 1,
    pt: 2,
  },
  itemContent: {
    flexWrap: "wrap",
    display: "flex",
    height: "10%",
    alignItems: "flex-start",
    pt: 1,
    // border: "1px solid green"
  },
  gridBoxContent: {
    flexWrap: "wrap",
    display: "flex",
    height: "82%",
  },
};

export default function MainBox({ children, ...props }) {
  const { mainContent } = useStyles;
  return (
    <Box {...props} sx={{ ...mainContent }}>
      {children}
    </Box>
  );
}

MainBox.SubMenu = function SubMenu({ children, ...props }) {
  const { submenuContent } = useStyles;
  return (
    <Box {...props} sx={{ ...submenuContent }}>
      {children}
    </Box>
  );
};

MainBox.SearchBox = function SearchBox({ children, ...props }) {
  const { itemContent } = useStyles;
  return (
    <Box {...props} sx={{ ...itemContent, paddingRight: 5 }}>
      {children}
    </Box>
  );
};

MainBox.FilterBox = function FilterBox({ initialValues = {}, onSubmit = () => ({}), validationSchema = Yup.object({}), children }) {
  const { itemContent } = useStyles;

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {(formik) => (
        <Box component={Form} sx={{ ...itemContent }}>
          {children}
        </Box>
      )}
    </Formik>
  );
};

MainBox.GridBox = function GridBox({ children, ...props }) {
  const { gridBoxContent } = useStyles;
  return (
    <Box {...props} sx={{ ...gridBoxContent }}>
      {children}
    </Box>
  );
};
