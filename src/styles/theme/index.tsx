import {createTheme} from "@mui/material";

export const Colors = {
    primary: "#DE1A78",
    secondary:"#F0A8EE",
    success: "#4CAF50",
    info: "#00a2ff",
    danger: "#FF5722",
    warning: "#FFC107",
    dark: "#0e1b20",
    light: "#aaa",
    muted: "#abafb3",
    border: "#DDDFE1",
    inverse: "#2F3D4A",
    shaft: "#333",

    ////GRAYS/////
    dim_grey: '#696969',
    dove_gray: "#d5d5d5",
    body_bg: "#f3f6f9",
    light_gray: "rgb(230,230,230)",

    ////SOLID COLOR///
    white: "#fff",
    black: "#000",
};

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        }
    },

    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true
            }
        }
    }
});

export default theme;