import React, { useState } from 'react';

import FlagIcon from '@mui/icons-material/Flag';
import {
    Box,
    Divider,
    Tab,
    Tabs,
    Typography,
} from '@mui/material';

import ActiveIcon from '../../components/CustomIcons/ActiveIcon';
import PreloadIcon from '../../components/CustomIcons/PreloadIcon';
import MainBox from '../../components/MainBox';
import CatalogPanel from './components/CatalogPanel';
import PreloadCatalog from './components/PreloadCatalog';
import TabPanel from './components/TabPanel';
import { CatalogProvider } from './context/CatalogContext';

function tabProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `catalog-tabpanel-${index}`,
    };
}

const sxStyles = {
    tabItem: {
        textTransform: "none", fontWeight: "bold", color: "black"
    }
};

export const Catalogs = () => {
    const [tabValue, setTabValue] = useState(2);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{ mx: 10 }}>
            <MainBox>
                <MainBox.SubMenu>
                    <Box>
                        <Tabs
                            aria-label='catalog tabs'
                            value={tabValue}
                            onChange={handleChange}
                            textColor='secondary'
                            TabIndicatorProps={{
                                sx: {
                                    backgroundColor: "#bdbdbd",
                                },
                            }}
                        >
                            <Tab icon={<ActiveIcon fill={tabValue === 0 ? '#fcbb13' : '#2C4154'} />} iconPosition='start' label='Activos' {...tabProps(0)} sx={sxStyles.tabItem} />
                            <Tab icon={<FlagIcon />} iconPosition='start' label='Accesorios' {...tabProps(1)} sx={sxStyles.tabItem} />
                            <Tab icon={<PreloadIcon fill={tabValue === 2 ? '#fcbb13' : '#2C4154'} />} iconPosition='start' label='Precargados' {...tabProps(2)} sx={sxStyles.tabItem} />
                        </Tabs>
                    </Box>
                </MainBox.SubMenu>
                <MainBox.SearchBox>
                    <Typography component={Box} variant='h5' color='secondary' sx={{ fontWeight: "bold", ml: 3 }} gutterBottom>
                        {tabValue === 1
                            ? 'Catálogos'
                            : tabValue === 2
                                ? 'Catálogos Precargados'
                                : 'No title'}
                    </Typography>
                    <Divider style={{ width: '100%' }} />
                </MainBox.SearchBox>
                <MainBox.GridBox>
                    <TabPanel value={tabValue} index={0}>
                        Item One
                    </TabPanel>
                    <TabPanel value={tabValue} index={1}>
                        <CatalogProvider>
                            <CatalogPanel isActive={tabValue === 1} />
                        </CatalogProvider>
                    </TabPanel>
                    <TabPanel value={tabValue} index={2}>
                        <PreloadCatalog />
                    </TabPanel>
                </MainBox.GridBox>
            </MainBox>
        </Box>
    )
};