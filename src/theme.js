import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { deepOrange, orange, teal, cyan } from '@mui/material/colors'


// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
        // primary: {
        //   main: '#ff5252'
        // }
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
        // primary: {
        //   main: '#000'
        // }
      }
    }
  }
})


export default theme