import "@/app/globals.css";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: '400',
  subsets: ["latin"],
});
import CssBaseline from "@mui/material/CssBaseline";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import theme from "@/theme/index";
import { Box } from "@mui/material";
export default function MyApp({ Component, pageProps }) {
  return (
    <Box className={roboto.className}>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />;
      </CssVarsProvider>
    </Box>
  );
}
