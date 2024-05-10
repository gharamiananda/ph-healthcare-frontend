import { createTheme } from '@mui/material/styles';

 export  const theme = createTheme({
  palette: {
    primary: {
      main: "#1586FD",
    },
    secondary: {
      main: '#666f73',
    },
  },
  components:{
    MuiButton:{
      defaultProps:{
        variant:'contained',
      },
      styleOverrides:{
        root:{
          padding:'8px 2px',
        }
      }
    },
    MuiContainer:{
      defaultProps:{
        maxWidth:'lg',
      }
    },
   
  },
  typography:{
    body1: {
      color:'#3333'
    }
  }
});