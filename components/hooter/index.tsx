import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box, Grid, Typography } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

const footer = () => {

  return (
    
    <Box>

      <header>

        <nav>

          <h1 className='maintitle nounderline topspace bottomspace'>
            <a href='index.php' className=''>Akamine&lsquo;s Website</a>
          </h1>

          <Grid container spacing={5}>

            <Grid item xs={3}>
              <a href='index.php'>Home</a>
            </Grid>

            <Grid item xs={3}>
              <a href='profile.php'>Profile</a>
            </Grid>

            <Grid item xs={3}>
              <a href='development.php'>Development</a>
            </Grid>

            <Grid item xs={3}>
              <a href='skills.php'>Skills</a>
            </Grid>

          </Grid>

        </nav>

      </header>

      <hr  className='bottomspace' />

    </Box>

  );

}

export default footer;