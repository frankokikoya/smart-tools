import { createTheme } from "@material-ui/core";
// import { primary, secondary } from "./helpers";

const theme = createTheme({
    palette: {
        primary: {
            // main: primary(),
            main: "#fcbb13",
        },
        secondary: {
            // main: secondary(),
            main: "#fcbb13",
            light: "#ffb644",
            dark: "#c55600",
            contrastText: "#000000"
        },
        error: {
            main: "#A21C2B",
        },
    },
});

export default theme;