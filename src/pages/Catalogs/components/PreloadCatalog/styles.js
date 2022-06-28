export const preloadStyles = {
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "70vh"
    },
    mainButton: {
        alignSelf: "flex-end",
        textTransform: "none",
        borderRadius: 10,
        width: "15%",
        height: "90%",
        marginRight: "5%"
    },
    accordion: { mt: 2, boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)' },
    grid: {
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
        '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
            outline: 'none',
        }
    }
};