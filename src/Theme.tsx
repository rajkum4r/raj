import { createTheme } from '@mui/material/styles';

const mainTheme = createTheme({
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       body: {
  //         backgroundColor: "#FAACA8",
  //         backgroundImage: `linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)`,
  //       },
  //     },
  //   },
  // },
    palette: {
      primary:{
        main:"#02a898"
      },
      secondary: {
        main: "#484a04",
      },
      info:{
        dark:"#2ca8a8",
        main:"#035757"
      },
    },
    
    
  });

  export default mainTheme;