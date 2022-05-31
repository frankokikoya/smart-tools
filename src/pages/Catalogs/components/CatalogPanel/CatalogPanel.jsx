import React from "react";
import { Box } from "@mui/material";
import { AccessoryHeader } from "./AccessoryHeader";
import { AccessoryGrid } from "./AccessoryGrid";
import { useFetchAndLoad, useArray, useAsync } from "../../../../hooks";
import { AccessoryAdapter } from "../../../../adapters/accessory.adapter";
import { getAccessories } from "../../services/catalogs.service";
import { UploadCatalog } from "../UploadCatalog/UploadCatalog";
import { panelStyles } from "./sxStyles";

export const CatalogPanel = () => {
    const { loading, callEndpoint } = useFetchAndLoad();
    const { array: accessories, set: setAccessories } = useArray([]);

    const adapAccessories = ({ data, status }) => {
        console.log({ status, data });
        if (status === 200) {
            setAccessories(data.content.map(accessory => AccessoryAdapter(accessory)));
        }
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
                accessories.length > 0
                    ? <Box sx={panelStyles.tabPanelBox}>
                        <AccessoryHeader />
                        <AccessoryGrid />
                    </Box>
                    : <UploadCatalog />
            }
        </>
    )
};