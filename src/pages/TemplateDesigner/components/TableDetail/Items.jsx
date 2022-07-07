import React from 'react'

import Typography from '@mui/material/Typography'

const Header = ({ title }) => {
    return (
        <Typography
            gutterBottom
            sx={{
                mt: 2,
                mb: 2,
                color: "#2C4154",
                fontWeight: "bold",
                fontSize: "16px",
                width: '100%'
            }}>
            {title}
        </Typography>
    )
};


const Item = ({ width, text }) => {
    return (
        <Typography
            gutterBottom
            sx={{
                width,
                color: "#898A8E",
                fontSize: "14px",
                // border: '1px dashed grey'
            }}>{text}</Typography>
    )
};

export { Header, Item };