import React from 'react';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import DesktopIcon from '../../../../components/CustomIcons/DesktopIcon';
import MobileIcon from '../../../../components/CustomIcons/MobileIcon';
import TabletIcon from '../../../../components/CustomIcons/TabletIcon';

const AppBarDesigner = ({ selected, handleClick, handleAdd, handleSub }) => {
    return (
        <AppBar
            position='fixed'
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                backgroundColor: '#eceff1'
            }}>
            <Toolbar>
                <IconButton
                    size='small'
                    edge='start'
                    color='inherit'
                    sx={{ mr: 2 }}
                >
                    <ArrowBackIosIcon sx={{ color: 'primary.main' }} />
                </IconButton>
                <Typography
                    variant='h6'
                    component='div'
                    noWrap
                    sx={{ color: 'primary.main', fontWeight: 'bold' }}
                >
                    Diseño sin nombre
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexGrow: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Stack direction='row' spacing={1}>
                        <IconButton
                            aria-label='mobile'
                            selected={selected === 0}
                            onClick={() => handleClick(0)}
                            style={{ width: '40px', height: '40px' }}>
                            <MobileIcon isSelected={selected === 0} />
                        </IconButton>
                        <IconButton
                            aria-label='tablet'
                            selected={selected === 1}
                            onClick={() => handleClick(1)}
                            style={{ width: '40px', height: '40px' }}>
                            <TabletIcon isSelected={selected === 1} />
                        </IconButton>
                        <IconButton
                            aria-label='desktop'
                            selected={selected === 2}
                            onClick={() => handleClick(2)}
                            style={{ width: '40px', height: '40px' }}>
                            <DesktopIcon isSelected={selected === 2} />
                        </IconButton>
                    </Stack>
                </Box>
                <Button
                    color='primary'
                    variant='contained'
                    size='small'
                    onClick={handleSub}
                    sx={{ textTransform: "none", py: 1, mr: 2 }}
                >
                    <Typography component='span' color='common.white'>
                        Guardar cambios
                    </Typography>
                </Button>
                <Button
                    color='secondary'
                    variant='contained'
                    size='small'
                    onClick={handleAdd}
                    sx={{ textTransform: "none", py: 1 }}
                >
                    <Typography component='span' color='common.white'>
                        Publicar
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default AppBarDesigner;