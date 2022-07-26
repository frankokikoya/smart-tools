import React from 'react';

import Box from '@mui/material/Box';

const ColumnContainer = ({ innerRef, width = "100%", canDrop, isOver, children }) => {
    return (
        <Box
            ref={innerRef}
            sx={{
                display: "flex",
                m: "1px",
                width,
                border: canDrop && !isOver
                    ? '2px solid #64b5f6'
                    : canDrop && isOver
                        ? '2px solid gray'
                        : '2px solid #FFB23F'
            }}>
            {children}
        </Box>
    )
}

export default ColumnContainer;