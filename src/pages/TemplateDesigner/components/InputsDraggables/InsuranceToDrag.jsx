import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDrag } from 'react-dnd';

import { typeColumn } from '../../data/DrawerItems';

const InsuranceToDrag = ({ image = '', name = '', price = '', }) => {

    const [, drag] = useDrag(() => ({
        type: typeColumn.INSURANCE,
        item: () => {
            return {
                type: typeColumn.INSURANCE,
                image,
                name,
                price,
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }));

    return (
        <Box
            ref={drag}
            sx={{
                p: 2,
                border: '1px solid black',
                borderRadius: '5px',
                cursor: 'move',
                '&:hover': {
                    border: '2px solid #64b5f6'
                }
            }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                }}>
                <Box
                    component='img'
                    alt='insurance'
                    src={image}
                    sx={{
                        width: "95%",
                        height: "95%"
                    }} />
                <Typography
                    sx={{
                        mt: 1,
                        fontWeight: "bold",
                        fontSize: "10px",
                        color: '#2C4154',
                    }}
                    gutterBottom>
                    {name}
                </Typography>
                <Typography
                    sx={{
                        mt: 1,
                        fontWeight: "bold",
                        fontSize: "20px",
                        color: '#2C4154',
                    }}
                    gutterBottom>
                    {price}
                </Typography>
                <Typography
                    sx={{
                        mt: 1,
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: '#898A8E'
                    }}
                    gutterBottom>
                    Costo Anual
                </Typography>
            </Box>
        </Box>
    )
}

export default InsuranceToDrag;