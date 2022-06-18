import React, { createContext, useState } from 'react';

const CatalogContext = createContext();

export const CatalogProvider = ({ children }) => {
    const [uploadStep, setUploadStep] = useState(0);
    const [activeStep, setActiveStep] = useState(0);
    const [isEmpty, setIsEmpty] = useState(0);
    const [isUpdate, setIsUpdate] = useState(false);

    return (
        <CatalogContext.Provider value={{
            uploadStep,
            setUploadStep,
            activeStep,
            setActiveStep,
            isEmpty,
            setIsEmpty,
            isUpdate,
            setIsUpdate
        }}>
            {children}
        </CatalogContext.Provider>
    )
};

export default CatalogContext;