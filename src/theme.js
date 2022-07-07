import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
// import { primary, secondary } from "./helpers";

const theme = unstable_createMuiStrictModeTheme({
    typography: {
        fontFamily: ["Heebo", "sans-serif"]
    },
    palette: {
        primary: {
            // main: primary(),
            main: "#2C4154",
        },
        secondary: {
            // main: secondary(),
            main: "#fcbb13",
            light: "#ffb644",
            dark: "#c55600",
            grey: "#898A8E",
            gold: "#D49536",
            background: "#eeeeee",
            contrastText: "#000000",
        },
        error: {
            main: "#A21C2B",
        },
    },
});

export default theme;