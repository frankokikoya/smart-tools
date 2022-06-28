import EditInputCell from '../components/PreloadCatalog/EditInputCell';
import StartRenderCell from '../components/PreloadCatalog/StartRenderCell';

export const catalogs = {
    MOV: "1000000012",
    EST: "1000000011",
    SUC: "1000000002"
};

const renderStartCell = (params) => {
    return <StartRenderCell {...params} />;
};

const renderEditInputCell = (params) => {
    return <EditInputCell {...params} />;
};

export const preloadColumns = [
    {
        field: "id",
        headerName: "ID",
        minWidth: 150,
        flex: 0,
        sortable: false
    },
    {
        field: "name",
        headerName: "Nombre",
        minWidth: 250,
        flex: 0.5,
        editable: true,
        sortable: false,
        renderCell: renderStartCell,
        renderEditCell: renderEditInputCell
    },
];

export const preloadRows = [
    { id: 2, name: "Tapetes" },
    { id: 1, name: "Gato Hidraulico" },
    { id: 3, name: "GPS" },
    { id: 4, name: "Stickers" },
    { id: 5, name: "Fantasmas" },
    { id: 6, name: "Signal de seguridad" },
    { id: 7, name: "Linterna" },
    { id: 8, name: "Extintor" },
    { id: 9, name: "Gato Hidraulico" },
    { id: 10, name: "Tapetes" },
];