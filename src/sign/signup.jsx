import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CardContent, Card } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './signup.css'
import axios from 'axios';

function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

export default function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [nextStep, setNextStep] = React.useState(0);
  
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const changePage = () => setNextStep(step=> ++step)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      first_name: data.get("firstName"),
      last_name: data.get("lastName"),
      email: data.get('email'),
      password: data.get('password'),
    }

    changePage()

    axios.post(`${apiUrl}/api/register`, user)
      .then(res => {
        if(res.data = "success"){
          alert("Register successed!")
        }else{
          alert(res.data);
        }
      })
      .catch(err => alert(err.response.data));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      {nextStep==0 ? (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              width:"350px",
              display: 'flex',
            }}
          >
            <Card raised>
              <CardContent sx={{alignItems: 'center',display: 'flex',flexDirection: 'column'}}>
                <img height="70" width="150" _ngcontent-webapp-c69="" alt="Freelancer logo" class="LogoImg" src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg"></img>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        autoComplete="current-password"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container justifyContent="flex-end">
                    <FormControlLabel
                        control={<Checkbox value="agree" color="primary" />}
                        label="I agree to the Freelancer User Agreement and Privacy Policy."
                      />
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Join Freelacner
                  </Button>
                  <Grid container textAlign={'center'}>
                    <Link href="/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>

      ):(<>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              width:"350px",
              display: 'flex',
            }}
          >
            <Card raised>
              <CardContent >
                <Grid >
                  <Button onClick={changePage}>
                    <ArrowBackIosIcon />
                  </Button>
                  <img className='img' height="70" width="150" _ngcontent-webapp-c69="" alt="Freelancer logo" class="LogoImg" src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg"></img>
                </Grid>
                <Typography component="h3" variant="subtitle1">
                  Choose Username
                </Typography><br />
                <Typography component="h5" variant="subtitle2">
                  Please note that a username cannot be changed once chosen.
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                      />
                    </Grid>
                  </Grid><br />
                  <Typography component="h5" variant="subtitle2">
                    Suggestions:
                  </Typography>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Next
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </>)}


      
    </ThemeProvider>
  );
}