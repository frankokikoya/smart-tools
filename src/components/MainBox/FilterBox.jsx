import React from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Box from "@mui/material/Box";

const useStyles = {
    itemContent: {
        flexWrap: "wrap",
        display: "flex",
        height: "10%",
        alignItems: "flex-start",
        pt: 1,
    },
};

const FilterBox = ({ children, initialValues = {}, onSubmit = () => ({}), validationSchema = Yup.object({}) }) => {
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

FilterBox.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    initialValues: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default FilterBox;