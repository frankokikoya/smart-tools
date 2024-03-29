import React from 'react';

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const useStyles = {
    itemContent: {
        flexWrap: "wrap",
        display: "flex",
        height: "10%",
        alignItems: "flex-start",
        paddingRight: 5,
        pt: 1,
    },
};

const SearchBox = ({ children, ...props }) => {
    const { itemContent } = useStyles;
    return (
        <Box {...props} sx={{ ...itemContent }}>
            {children}
        </Box>
    );
};

SearchBox.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default SearchBox;