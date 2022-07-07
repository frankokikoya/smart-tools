import React from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const Section = ({ title, children }) => {
    return (
        <Box
            sx={{
                mt: 2,
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column"
            }}>
            <Typography
                gutterBottom
                sx={{
                    px: 2,
                    color: "#898A8E",
                    fontWeight: "bold",
                    fontSize: "16px"
                }}>
                {title}
            </Typography>
            {children}
            <Divider style={{ width: '100%', marginTop: "50px" }} />
        </Box>
    )
}

export default Section;