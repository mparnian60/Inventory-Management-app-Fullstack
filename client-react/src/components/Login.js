import React, { useState} from 'react';
import {Link} from "react-router-dom";
import { loginAPI, setToken } from '../api/userApi';
import jwt from 'jwt-decode';
import { useHistory } from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login(props) {
    const classes = useStyles();

    const history = useHistory()

    // console.log('login history', history)

    const[name, setName] = useState('')
    const[password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e)=>{
      e.preventDefault();

      loginAPI({
        name: name,
        password: password,
        role: role
      }).then((result) =>{
        let token = result.user.token;
        setToken(token); //this function set the token inside Autorization Bearer
        // console.log('token', token)

        const decoded = jwt(token)
        // console.log('decoded', decoded)

         //save token in local storage
         localStorage.setItem('token', token);
         localStorage.setItem('userId', decoded.id);
         localStorage.setItem('role', decoded.role);

         history.push('/');

         props.setLoggedIn(true);
         if(localStorage.getItem('role') === 'admin'){
          props.setAdmin(true);
         }
         


      }).catch((e)=> console.log('e',e))
    }


    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField onChange={(e)=>setName(e.currentTarget.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="email"
              autoFocus
            />
            <TextField onChange={(e)=>setPassword(e.currentTarget.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button 
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Don't have an account? <Link to={'/signup'}><Button>Signup</Button></Link>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
}