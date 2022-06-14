import React, { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/material";
import { useFetchAndLoad, useAsync } from "../../../../hooks";
import { getAccessories } from "../../services/catalogs.service";
import UploadCatalog from "../UploadCatalog";
import AccessoryHeader from "./AccessoryHeader";
import AccessoryGrid from "./AccessoryGrid";
import { panelStyles } from "./sxStyles";

const CatalogPanel = () => {
    const [step, setStep] = useState(0);
    const [isEmpty, setIsEmpty] = useState(0);
    const { callEndpoint } = useFetchAndLoad();

    const handleNext = () => {
        setStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      // const handleBack = () => {
      //    setStep((prevActiveStep) => prevActiveStep - 1);
      //  };
    
      /*const handleReset = () => {
        setStep(0);
      };*/
    
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
                isEmpty === 0
                    ? <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', mt: 10 }}> <CircularProgress /> </Box>
                    : isEmpty === 2
                        ? <Box sx={panelStyles.tabPanelBox}>
                            <AccessoryHeader />
                            <AccessoryGrid />
                        </Box>
                        : <UploadCatalog step={step} handleNext={handleNext} />
            }
        </>
    )
};

export default CatalogPanel;