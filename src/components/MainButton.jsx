import React from 'react';

import { LoadingButton } from '@mui/lab';
import { Typography } from '@mui/material';

const MainButton = ({ text, textColor, textSx, handleClick, ...props }) => {
    return (
        <LoadingButton
            onClick={handleClick}
            {...props}
        >
            <Typography component='span' color={textColor} sx={textSx}>
                {text}
            </Typography>
        </LoadingButton>
    )
}

export default MainButton;