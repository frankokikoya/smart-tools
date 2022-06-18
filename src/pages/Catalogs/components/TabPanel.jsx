import React from 'react';

import { Box } from '@mui/material';
import PropTypes from 'prop-types';

const TabPanel = ({ children, value, index, ...props }) => {
    return (
        <Box
            role='tabpanel'
            hidden={value !== index}
            id={`catalog-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...props}
            sx={{ width: "100%" }}
        >
            <Box sx={{ p: 3 }}>
                {children}
            </Box>

        </Box>
    )
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


export default TabPanel;