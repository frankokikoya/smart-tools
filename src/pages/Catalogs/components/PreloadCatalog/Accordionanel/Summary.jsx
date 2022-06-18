import React from 'react';

import { AccordionSummary, Box, Typography } from '@mui/material';
import { GridExpandMoreIcon } from '@mui/x-data-grid';

const Summary = ({ id, title, children }) => {
    return (
        <AccordionSummary
            expandIcon={<GridExpandMoreIcon sx={{ fontSize: 50 }} />}
            aria-controls={`preload-${id}-content`}
            id={`preload-${id}-header`}
        >
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '100%',
                py: 2,
                justifyContent: 'space-between'
            }}>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}> {title} </Typography>
                {children}
            </Box>
        </AccordionSummary>
    )
};

export default Summary;