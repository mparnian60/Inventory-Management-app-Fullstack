import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory} from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import NewProduct from './NewProduct';
import ProductList from './ProductList';
import Home from './Home';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ProductTransactions from './ProductTransaction';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    Btn:{
        color: 'white',
    },
    title: {
      flexGrow: 1,
    },
  }));

  const isLoggedIn = () =>{
    if(window.localStorage.getItem("token")){
      return true
    }else{
      return false
    }
  }

  const isAdmin = () =>{
    if(window.localStorage.getItem('role') === 'admin'){
        return true
      }else{
      return false
    }
  }


  export default function Nav() {
    const classes = useStyles();
    const[loggedIn, setLoggedIn] = useState(isLoggedIn)
    const[admin, setAdmin]= useState(isAdmin)

    console.log('admin', admin);

    const history = useHistory();

    console.log('history', history)

    const handleLogout = () =>{
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('userId');
      window.localStorage.removeItem('role');
      setLoggedIn(false);
      setAdmin(false);
      // history.push('/')
    }

    return (
      <Router>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Link to="/">
                            <Button className={classes.Btn} color="inherit">Home</Button>
                        </Link>
                        <Link to="/productlist">
                            <Button className={classes.Btn} color="inherit">Product List</Button>
                        </Link>
                        {admin && <Link to="/newproduct">
                            <Button className={classes.Btn} color="inherit">New Product</Button>
                        </Link>}
                        <Link to="/inventory">
                            <Button className={classes.Btn} color="inherit">Inventory</Button>
                        </Link>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    </Typography>
                    {!loggedIn && <Link to="/login">
                        <Button className={classes.Btn} color="inherit">Login</Button>
                    </Link>}
                    {loggedIn && admin && <Link to="/signup">
                        <Button className={classes.Btn} color="inherit">Sign Up</Button>
                    </Link>}
                    {loggedIn && <Link to="/logout">
                        <Button className={classes.Btn} color="inherit" onClick={handleLogout}>Logout</Button>
                    </Link>}
                    </Toolbar>
                </AppBar>
            </div>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/productlist">
              {loggedIn ? <ProductList admin={admin}/> : <Redirect to='/login' />}
            </Route>
            <Route path="/newproduct">
              {loggedIn ? <NewProduct /> : <Redirect to='/login' />}
            </Route>
            <Route path="/inventory">
              {loggedIn ? <ProductTransactions /> : <Redirect to='/login' />}
            </Route>
            <Route path="/login">
              <Login setLoggedIn={setLoggedIn} setAdmin={setAdmin}/>
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  

    
  




  


