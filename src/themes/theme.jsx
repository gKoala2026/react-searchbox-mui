
import { createTheme } from '@mui/material/styles';

import "@fontsource/roboto";

const theme = createTheme({
    palette:{
        common:{
            black:'#000',
            white:'#fff'
        },
        primary:{
            main:'rgb(7, 77, 240)'
        },
        background:{
            default:'#fff',
            // paper:'rgb(128,128,128,0.7)',
        },
    },
    typography:{
        fontFamily:'Roboto',
    },
});
export default theme