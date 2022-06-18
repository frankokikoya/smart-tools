export const columns = [
    {
        field: "id",
        headerName: "No.",
        minWidth: 150,
        flex: 0,
        editable: false,
        sortable: false
    },
    {
        field: "accesory",
        headerName: "Accesorio",
        minWidth: 250,
        flex: 0.5,
        editable: false,
        sortable: false
    },
];

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
        sortable: false
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

export const rows = [
    { id: 2, accesory: "Tapetes" },
    { id: 1, accesory: "Gato Hidraulico" },
    { id: 3, accesory: "GPS" },
    { id: 4, accesory: "Stickers" },
    { id: 5, accesory: "Fantasmas" },
    { id: 6, accesory: "Signal de seguridad" },
    { id: 7, accesory: "Linterna" },
    { id: 8, accesory: "Extintor" },
    { id: 9, accesory: "Gato Hidraulico" },
    { id: 10, accesory: "Tapetes" },
];

export const errorRows = [
    {
        message: "Campo accesorio obligatorio",
        lines: [
            17,
            20,
            21
        ]
    },
    {
        message: "Campo incorrecto",
        lines: [
            2,
            3,
            4
        ]
    }
]