import { createTheme } from '@mui/material/styles';

export const COLORS = {
	light: '#FFEECF',
	dark: '#2D2A32',
	accent:'#967d69',
	primary: '#023f78',
	secondary: '#f36868'

}
const theme = createTheme({
	palette: {
		primary: {
		  main: COLORS.primary,
		},
		secondary: {
		  main: COLORS.secondary,
		},
	  },
	  typography: {
		fontFamily: 'PT_Serif,serif',
	  },

  });
  
export default theme;