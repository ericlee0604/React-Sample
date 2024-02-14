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


export default function LandingPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome
          </Typography>
          <Link to="/login" style={{"textDecoration":'none', "color":"white","marginRight": "3%"}}>Login</Link>
          <Link to="/signup" style={{"textDecoration":'none', "color":"white","marginRight":"3%"}}>Signup</Link>
        </Toolbar>
      </AppBar>
      <Grid container spacing={0} direction='column' alignItems='center' justifyContent='center'>
        <h1>Welcome to my page!</h1>
      </Grid>
    </Box>
  );
}