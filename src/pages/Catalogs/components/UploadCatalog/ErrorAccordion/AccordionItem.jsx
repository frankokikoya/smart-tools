import React from 'react';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

export const AccordionItem = ({ id, title, lines = [1, 2, 3, 4], ...props }) => {
    return (
        <Accordion {...props}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`error${id}-content`}
                id={`error${id}-header`}
            >
                <Typography> {title} </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{ fontWeight: 'bold' }} > En las lineas: {lines.join(', ')} </Typography>
            </AccordionDetails>
        </Accordion>
    )
};

AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    lines: PropTypes.arrayOf(PropTypes.number),
};


export default AccordionItem;
