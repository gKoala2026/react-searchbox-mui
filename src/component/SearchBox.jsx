import React from 'react'

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

  
const SearchBox = () => {

    
    const options = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
    ];
    const BootstrapInput = styled(TextField)(({ theme }) => ({
        '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
          borderRadius: 40,
        },
    }));
    const FindButton = styled(Button)(({ theme }) => ({
        height: '50px',
        borderRadius: '40px'
    }));
    const CBox = styled(Box)(({ theme }) => ({
        width: '100px'
    }));
      
    return(
        <Box
            maxWidth='750px'
            minWidth='370px'
        >
            <Paper elevation={3}
                sx={{
                    borderRadius:'50px',
                    backgroundColor: 'rgb(128,128,128,0.4)'
                }}
            >
                <Stack padding="50px">
                    <Grid container spacing={3} alignItems='center' justifyContent={{xs:"flex-end", sm:'center'}} direction={{xs:'column', sm:'row'}}>
                        <Grid item xs={12} sm={9} >
                            <Autocomplete

                            options={options}
                            sx={{ 
                                minWidth: 250,
                                background: 'white',
                                borderRadius: '40px'
                            }}
                            renderInput={(params) => <BootstrapInput {...params} size='medium' label={<Typography fontStyle='italic' variant='h5' >Suburb...</Typography>} />}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <FindButton size="large"  variant="contained" startIcon={<SearchIcon  sx={{ fontSize: 40 }}  />}>
                                <Typography variant='h5'>Find</Typography>
                            </FindButton>
                        </Grid>
                    </Grid>
                    <Grid container alignItems='center' justifyContent='center'>
                        {/* <Stack direction='row'> */}
                            <CBox><FormControlLabel control={<Checkbox defaultChecked={false} />} label="option1" /></CBox>
                            <CBox><FormControlLabel control={<Checkbox defaultChecked={false} />} label="option1" /></CBox>
                            <CBox><FormControlLabel control={<Checkbox defaultChecked={false} />} label="option1" /></CBox>
                            <CBox><FormControlLabel control={<Checkbox defaultChecked={false} />} label="option1" /></CBox>
                            <CBox><FormControlLabel control={<Checkbox defaultChecked={false} />} label="option1" /></CBox>
                            <CBox><Link href="" ><Typography variant='h5'>+More</Typography></Link></CBox>
                        {/* </Stack> */}
                    </Grid>
                </Stack>
            </Paper>
        </Box>
    )
}

export default SearchBox