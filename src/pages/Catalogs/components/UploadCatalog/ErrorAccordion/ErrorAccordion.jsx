import React from 'react';
import { Box, Typography } from '@mui/material';
import AccordionItem from './AccordionItem';

const ErrorAccordion = ({ errorRows = [] }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '100%',
                flexDirection: 'column'
            }} >
            <Typography sx={{ my: 2, fontWeight: 'bold' }}>
                Corrige los siguientes errores:
            </Typography>
            {
                errorRows.map((row, i) => (
                    <AccordionItem sx={{ mt: 2, boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)' }} key={i} id={i} title={row.message} lines={row.lines} />
                ))
            }
        </Box>
    )
};

export default ErrorAccordion;