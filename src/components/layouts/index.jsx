/* eslint-disable react/prop-types */
"use client"
import { Box, Container } from "@mui/material";
import SideBar from "../SideBar";
import CssBaseline from "@mui/material/CssBaseline";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import theme from "@/theme/index";
export default function Layout({ children }) {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <Box>
        <SideBar />
        <Box sx={{ width: "83.333333%", position: "absolute", right: 0 }}>
          <Container>{children}</Container>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
