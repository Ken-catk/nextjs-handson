import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { blue, orange, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: orange,
    secondary: purple,
  },
});

export default theme;
