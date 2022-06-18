import React from 'react';

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const useStyles = {
    gridBoxContent: {
        flexWrap: "wrap",
        display: "flex",
        height: "82%",
    },
};

const GridBox = ({ children, ...props }) => {
    const { gridBoxContent } = useStyles;
    return (
        <Box {...props} sx={{ ...gridBoxContent }}>
            {children}
        </Box>
    );
};

GridBox.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default GridBox;