import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const MenuItems = [
    {
        id: 1,
        label: "Cotizaciones", 
        path:"/home",
        haveNested: true, 
        icon:<CheckCircleOutlineIcon style={{ marginRight: 5 }} fontSize="small" /> 
    },
    {
        id: 2,
        label: "Productos/Planes", 
        path:"/products",
        haveNested: false,
        icon:<Inventory2OutlinedIcon style={{ marginRight: 5 }} fontSize="small" /> 
    },
    {
        id: 3,
        label: "Catálogos", 
        path:"/home",
        haveNested: true,
        icon:<ArticleOutlinedIcon style={{ marginRight: 5 }} fontSize="small" /> 
    },
    {
        id: 4,
        label: "Configuración", 
        path:"products",
        haveNested: false,
        icon:<SettingsOutlinedIcon style={{ marginRight: 5 }} fontSize="small" /> 
    },
];