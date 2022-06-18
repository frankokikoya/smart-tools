import React from 'react';

import { AccordionDetails, Box } from '@mui/material';

const Details = ({ children }) => {
    return (
        <AccordionDetails>
            <Box sx={{ display: "flex", height: "100%" }}>
                {children}
            </Box>
        </AccordionDetails>
    )
}

export default Details;