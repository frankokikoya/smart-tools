import React, { useState } from 'react';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import AppBarDesigner from './components/AppBarDesigner';
import DrawerLeft from './components/DrawerLeft';
import DrawerRigthCOG from './components/DrawerRigthCOG';
import ViewSection from './components/ViewSection';

export const TemplateDesigner = () => {
    const [layoutSelected, setLayoutSelected] = useState(2);
    const [drawerLeftSelected, setDrawerLeftSelected] = useState(0);
    const [sections, setSections] = useState(1);

    const hanldeClickLayout = (layout) => setLayoutSelected(layout);
    const hanldeClickDrawerLeft = (iconNumber) => setDrawerLeftSelected(iconNumber);
    const AddSection = () => setSections((prev) => prev + 1);
    const SubSection = () => setSections((prev) => prev > 1 ? prev - 1 : 1);

    return (
        <Grid
            container
            sx={{
                width: '100vw',
                height: '100vh',
                overflow: 'scroll',
                backgroundColor: 'secondary.background'
            }}>
            <AppBarDesigner
                selected={layoutSelected}
                handleClick={hanldeClickLayout}
                handleAdd={AddSection}
                handleSub={SubSection}
            />
            <DrawerLeft selected={drawerLeftSelected} handleClick={hanldeClickDrawerLeft} />
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pl: 10,
                pr: 70,
                ...(sections === 1 ? { width: '100%' } : {})
            }}>
                {
                    [...Array(sections)].map((v, i) => (
                        <ViewSection key={`selector-${i}`}>
                            <Box
                                sx={{
                                    mb: 2,
                                    p: 1,
                                    width: '90%',
                                    border: '1px dashed #898A8E',
                                }}>
                                <Typography sx={{ color: 'secondary.grey' }}>
                                    Pág. 1
                                </Typography>
                            </Box>
                            <Box sx={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                            }}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                        width: '90%',
                                        height: '100%'
                                    }}>
                                    <Typography sx={{ color: 'secondary.gold' }}>¡Necesitas añadir columnas!</Typography>
                                    <AddCircleOutlineIcon sx={{ color: 'secondary.gold', fontSize: 35 }} />
                                </Paper>
                                <Box
                                    sx={{
                                        width: '10%',
                                        height: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        border: '1px dashed grey',
                                    }}>
                                    <AddCircleOutlineIcon sx={{ color: 'secondary.grey', fontSize: 35 }} />
                                </Box>
                            </Box>
                        </ViewSection>
                    ))
                }
            </Box>
            <DrawerRigthCOG />
        </Grid>
    )
};