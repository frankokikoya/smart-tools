export const uploadStyles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
        mt: 5,
        ml: '15%',
        bgcolor: '#f5f5f5',
        borderRadius: 10,
        width: '70%',
        height: '80%',
    },
    buttonStyles: { textTransform: "none", borderRadius: 10, width: "20%", height: "90%" },
    buttonText: { fontWeight: "bold", fontSize: 14 },
    stepContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pt: 3,
    },
    fileContainer: {
        p: 4,
        mt: 3,
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        borderRadius: '5px',
        border: '1px solid',
        justifyContent: 'space-between',
    },
    textInfo: { display: 'flex', flexWrap: 'wrap', alignItems: 'center' },
    fileName: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '25rem',
        marginRight: '2px'
    },
    buttonFile: { fontWeight: "bold", fontSize: 14, color: "white" },
    errorContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tableContainer: {
        mt: 4, 
        display: 'flex', 
        flexWrap: 'wrap', 
        width: '100%', 
    },
    tableItem: {
        mt: 1,
        display: 'flex', 
        flexWrap: 'wrap', 
        width: '100%', 
        borderBottom: '1px solid #ccc', 
        justifyContent: 'space-between', 
    },
    stepperStyle: {
        height: '100%',
        maxWidth: '15%',
        '.Mui-completed .MuiStepIcon-root': {
            color: 'secondary.main'
        },
        '.Mui-disabled .MuiStepIcon-root': {
            color: '#e0e0e0'
        },
        '.MuiStep-root .Mui-disabled': {
            color: '#bdbdbd'
        },
        '.MuiStep-root .Mui-disabled .MuiStepLabel-label': {
            color: '#bdbdbd'
        },
        '.MuiStep-root .MuiStepLabel-label': {
            fontWeight: 'bold',
            color: 'primary.main'
        }
    }
};