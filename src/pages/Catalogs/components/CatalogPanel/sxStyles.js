export const headerStyles = {
    tableBox: { display: "flex"},
    tableRow: {
        '&:last-child td, &:last-child th': { border: 0 }
    },
    updateButton: {
        textTransform: "none", borderRadius: 10, width: "15%", height: "90%", alignSelf: "center", ml: "25%"
    },
    cellHeader: {
        fontWeight: "bold", p: 0
    },
    cellItem: {
        p: 0, pr: 5
    }
};

export const panelStyles = {
    tabPanelBox: {
        display: "flex", 
        flexDirection: "column",
        width: "100%",
        height: "70vh"
    }
};

export const gridStyles = {
    gridBox: { display: "flex", height: "100%", mt: "1%" },
    displayGrid: {
        '.MuiDataGrid-columnSeparator': {
            display: 'none',
        },
        '&.MuiDataGrid-root': {
            border: 'none',
        },
        '.MuiDataGrid-footerContainer': {
            border: 'none',
        },
        '.MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold',
        },
    }
};