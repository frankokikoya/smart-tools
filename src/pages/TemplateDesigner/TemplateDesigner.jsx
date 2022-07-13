import React, { useState } from 'react';

import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AddPage from './components/AddPage';
import AppBarDesigner from './components/AppBarDesigner';
import DrawerLeft from './components/DrawerLeft';
import DrawerRightCOG from './components/DrawerRightCOG';
import DrawerRigthTemplate from './components/DrawerRightTemplate';
import ItemContainer from './components/ItemContainer';
import PageTitle from './components/PageTitle';
import ViewSection from './components/ViewSection';

const TemplateDesigner = () => {
    const [layoutSelected, setLayoutSelected] = useState(2);
    const [drawerLeftSelected, setDrawerLeftSelected] = useState(1);
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
                            <PageTitle />
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
                                    <ItemContainer />
                                </Paper>
                                <AddPage />
                            </Box>
                        </ViewSection>
                    ))
                }
            </Box>
            {drawerLeftSelected === 0
                ? <DrawerRightCOG />
                : <DrawerRigthTemplate />}
        </Grid>
    )
};

export default TemplateDesigner;