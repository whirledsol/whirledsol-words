import React from 'react';
import { ThemeProvider} from '@mui/material/styles';
import theme from '../util/theme';
import Router from './Router';


export default function Root() {

  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  );
}

