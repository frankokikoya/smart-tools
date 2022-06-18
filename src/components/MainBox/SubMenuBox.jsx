import React from 'react';

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const useStyles = {
    submenuContent: {
        flexWrap: "wrap",
        display: "flex",
        height: "8%",
        alignContent: "center",
        p: 1,
        pt: 2,
    },
};

const SubMenuBox = ({ children, ...props }) => {
    const { submenuContent } = useStyles;
    return (
        <Box {...props} sx={{ ...submenuContent }}>
            {children}
        </Box>
    );
};

SubMenuBox.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default SubMenuBox;