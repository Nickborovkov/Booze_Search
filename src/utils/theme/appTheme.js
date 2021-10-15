import createTheme from "@mui/material/styles/createTheme";
import green from "@mui/material/colors/green";
import amber from "@mui/material/colors/amber";
import red from "@mui/material/colors/red";

const appTheme = createTheme({
    palette: {
        primary: {
            main: '#333333',
            light: 'tomato',
            dark: 'teal',
            contrastText: `#ffffff`
        },
        preloader: {
            main: amber["A400"],
        },
        input: {
            main: green["A400"],
        },
        link: {
            text: `#ffffff`
        },
        button: {
            main: red[700],
            contrastText: `#ffffff`
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});

export default appTheme
