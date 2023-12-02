"use client"
import CssBaseline from '@mui/material/CssBaseline';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
// import NextAppDirEmotionCacheProvider from './EmotionCache';
import theme from './index';

export default function ThemeProvider( children ) {
  return (
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        {children}
      </CssVarsProvider>
  );
}