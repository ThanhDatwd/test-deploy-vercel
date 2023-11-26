
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#ffff",
          contrastText: "#ffff",
        },
        secondary: {
          main: "#ffff",
          contrastText: "#ffff",
        },
        text:{
          primary:"black",
          secondary:'rgb(175 175 175)'
        }
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#ffff",
          contrastText: "#ffff",
        },
        secondary: {
          main: "#FCFCFC",
          contrastText: "#ffff",
        },
        text:{
          primary:"red",
          secondary:'green'
        }
        
      },
      
    },
  },
  typography: {
    fontFamily: "Quicksand, sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
      fontSize: "3.5rem",
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
