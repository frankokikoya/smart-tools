import React, { useContext } from 'react';

import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import { useFetchAndLoad, useAsync } from '../../../../hooks';
import CatalogContext from '../../context/CatalogContext';
import { getAccessories } from '../../services/catalogs.service';
import UploadCatalog from '../UploadCatalog';
import AccessoryGrid from './AccessoryGrid';
import AccessoryHeader from './AccessoryHeader';
import { panelStyles } from './sxStyles';

const CatalogPanel = ({ isActive }) => {
    const { isEmpty, setIsEmpty } = useContext(CatalogContext);
    const { callEndpoint } = useFetchAndLoad();

    // CHECK ACCESSORIES
    const adapAccessories = ({ status }) => {
        // console.log({ status, data });
        status === 200 && setIsEmpty(2);

        status === 204 && setIsEmpty(1);

    };

    const catchError = (error) => {
        console.log(error);
        // if (error?.status === 403) dispatch(showError({ title: "Error", message: "Fobidden" }));
    };

    const getApiData = async () => await callEndpoint(getAccessories({ page: 0, size: 10 }));

    useAsync(getApiData, adapAccessories, catchError, () => { }, []);

    return (
        <>
            {
                isEmpty === 0 && isActive
                    ? <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', mt: 10 }}> <CircularProgress /> </Box>
                    : isEmpty === 2 && isActive
                        ? <Box sx={panelStyles.tabPanelBox}>
                            <AccessoryHeader />
                            <AccessoryGrid />
                        </Box>
                        : <UploadCatalog />
            }
        </>
    )
};

export default CatalogPanel;