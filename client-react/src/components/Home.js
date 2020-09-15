import React, {useState} from "react";
import { useDencrypt } from "use-dencrypt-effect";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const values = ["Simply Powerful", "Simply Affordable", "Simply Modern"];

const defaultOptions = {
    chars: [
      " "
    ],
    interval: 80
  };

const Home = () =>{
    const classes = useStyles();



   const { result, dencrypt } = useDencrypt(defaultOptions);

   React.useEffect(() => {
    let i = 0;
 
    const action = setInterval(() => {
      dencrypt(values[i]);
 
      i = i === values.length - 1 ? 0 : i + 1;
    }, 3000);
 
    return () => clearInterval(action);
    }, []);
    
      return (
        <React.Fragment>
            <div><h1 class="homeHeader">Inventory Mangement</h1></div>
            <div class="homeStyle">{result}</div>
        </React.Fragment>
      
      )

}

export default Home;

