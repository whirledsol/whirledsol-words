import { createTheme } from '@mui/material/styles';

export const COLORS = {
	light: '#FFEECF',
	offlight: '#ffeecf',
	dark: '#100f12',
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
		fontSize:'12px',
		fontWeight:300
	  },

  });
  
export default theme;