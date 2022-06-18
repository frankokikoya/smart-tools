import React from 'react';

import { Accordion } from '@mui/material';

export default function AccordionPanel({ children, ...props }) {
    return (
        <Accordion {...props}>
            {children}
        </Accordion>
    )
};