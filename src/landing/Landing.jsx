import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import './landing.css';


export default function LandingPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{backgroundColor:'white'}}>
          <img height="70" width="150" _ngcontent-webapp-c69="" alt="Freelancer logo" class="LogoImg" src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg"></img>
          <Link className='navigate-left' >How it works</Link>
          <Link className='navigate-left'>Browse Jobs</Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome
          </Typography>
          <Link to="/login" className="navigate-right" >Login</Link>
          <Link to="/signup" className="navigate-right">Signup</Link>
          <Link to="/postProject" className="navigate-right btn btn-danger text-white">Post Project</Link>
        </Toolbar>
      </AppBar>
      <Typography variant='div'>
        <nav className='header' >
          <li>Find Jobs</li>
          <li>Hire Freelancers</li>
          <li>Get Ideas</li>
          <li>About</li>
          <li>Reasources</li>
        </nav>
      </Typography>
      <Grid container spacing={0} direction='column' alignItems='center' justifyContent='center'>
        <Typography variant='h3' >Welcome to my page!</Typography>
      </Grid>
    </Box>
  );
}