import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const colorTheme = createTheme({
    palette: {
        primary: {
            main: '#008000'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400
        }
    }
})
