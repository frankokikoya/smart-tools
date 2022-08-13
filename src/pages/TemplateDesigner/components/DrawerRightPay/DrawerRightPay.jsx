import React from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

import DrawerRight from '../DrawerRight';

const DrawerRightPay = () => {
    return (
        <DrawerRight>
            <DrawerRight.Section title='ENGANCHE' >
                <DrawerRight.Content>
                    <Box sx={{
                        width: '29.4em',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <FormControl sx={{ width: '100%' }}>
                            <FormControlLabel
                                control={<Switch defaultChecked />}
                                label='Usar enganche del producto' />
                        </FormControl>
                    </Box>
                </DrawerRight.Content>
                <DrawerRight.Content>
                    <Box sx={{
                        width: '29.4em',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <FormControl sx={{ width: '45%' }}>
                            <Typography
                                gutterBottom
                                component='label'
                                htmlFor='pay-min'
                                sx={{ color: '#2C4154', fontWeight: 'bold' }}>
                                Mín.
                            </Typography>
                            <OutlinedInput
                                id='pay-min'
                                placeholder='10'
                                sx={{ pr: 0 }}
                                endAdornment={
                                    <InputAdornment
                                        sx={{
                                            width: '45%',
                                            height: '100%',
                                            maxHeight: "3.5rem",
                                            backgroundColor: '#D1D1D1',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                        position='end'>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>%</Typography>
                                    </InputAdornment>
                                } />
                        </FormControl>
                        <FormControl sx={{ width: '45%' }}>
                            <Typography
                                gutterBottom
                                component='label'
                                htmlFor='pay-max'
                                sx={{ color: '#2C4154', fontWeight: 'bold' }}>
                                Máx.
                            </Typography>
                            <OutlinedInput
                                id='pay-max'
                                placeholder='10'
                                sx={{ pr: 0 }}
                                endAdornment={
                                    <InputAdornment
                                        sx={{
                                            width: '45%',
                                            height: '100%',
                                            maxHeight: "3.5rem",
                                            backgroundColor: '#D1D1D1',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                        position='end'>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>%</Typography>
                                    </InputAdornment>
                                } />
                        </FormControl>
                    </Box>
                </DrawerRight.Content>
            </DrawerRight.Section>
        </DrawerRight>
    )
}

export default DrawerRightPay;