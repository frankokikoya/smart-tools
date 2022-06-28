import React, { createContext, useState } from 'react';

const PreloadContext = createContext();

export const PreloadProvider = ({ children }) => {
    const [selectedCellParams, setSelectedCellParams] = useState({ id: null });
    const [actionCell, setActionCell] = useState({ action: "", row: {} });
    const [catalog, setCatalog] = useState("");

    return (
        <PreloadContext.Provider value={{
            selectedCellParams,
            setSelectedCellParams,
            actionCell,
            setActionCell,
            catalog,
            setCatalog
        }}>
            {children}
        </PreloadContext.Provider>
    )
};

export default PreloadContext;