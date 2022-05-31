import React, { useState } from "react";
import { MainBox } from "../../components/MainBox";
import { TabPanel } from "./components/TabPanel";
import VisibilityIcon from '@mui/icons-material/Visibility';
import FlagIcon from '@mui/icons-material/Flag';
import RestorePageIcon from '@mui/icons-material/RestorePage';
import { CatalogPanel } from "./components/CatalogPanel";
import {
    Box,
    Tab,
    Tabs,
    Typography,
} from "@mui/material";

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
    const [tabValue, setTabValue] = useState(1);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <MainBox>
            <MainBox.SubMenu>
                <Typography component={Box} variant="h5" color="secondary" sx={{ fontWeight: "bold", ml: 2 }} gutterBottom>
                    Catálogos
                </Typography>
            </MainBox.SubMenu>
            <MainBox.SearchBox>
                <Box sx={{ marginLeft: "3%" }}>
                    <Tabs
                        aria-label="catalog tabs"
                        value={tabValue}
                        onChange={handleChange}
                        textColor="secondary"
                        TabIndicatorProps={{
                            sx: {
                                backgroundColor: "#bdbdbd",
                            },
                        }}
                    >
                        <Tab icon={<VisibilityIcon />} iconPosition="start" label="Activos" {...tabProps(0)} sx={sxStyles.tabItem} />
                        <Tab icon={<FlagIcon />} iconPosition="start" label="Accesorios" {...tabProps(1)} sx={sxStyles.tabItem} />
                        <Tab icon={<RestorePageIcon />} iconPosition="start" label="Precargados" {...tabProps(2)} sx={sxStyles.tabItem} />
                    </Tabs>
                </Box>
            </MainBox.SearchBox>
            <MainBox.GridBox>
                <TabPanel value={tabValue} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    <CatalogPanel />
                </TabPanel>
                <TabPanel value={tabValue} index={2}>
                    Item Three
                </TabPanel>
            </MainBox.GridBox>
        </MainBox>
    )
};