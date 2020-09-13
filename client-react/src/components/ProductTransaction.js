import React, {useState, useEffect} from 'react';
import {getProductCodeAndDescAPI} from '../api/productApi'


import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 220,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));



export default function ProductTransactions() {

    const classes = useStyles();
    const [productCodes, setProductCodes] = useState([]);
    // const [loading, setLoading] = useState(true)

    const productCode = async () =>{
        const response = await getProductCodeAndDescAPI();
        console.log('productdetails', response)
        let productCodeArr = response.map((details) =>details.product_code)
        console.log('productCodeArr', productCodeArr)

        setProductCodes(productCodeArr)
    }

      const mapProductCode = () =>{
          productCodes.map((code) =>{
          return(
            <MenuItem value={productCodes}>{productCodes}</MenuItem>
          )
      })}

    useEffect(()=>{
        productCode();
    },[])


    // const handleChange = (event) => {
    //     setProductCodes(event.target.value);
    //   };
    

    return(

        <Container component="main" maxWidth="l" >
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Product Code</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={productCodes}
        //   onChange={handleChange}
          label="ProductCode"
        >
            {mapProductCode}
            {/* {mapProductCodes()} */}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </FormControl>
      </Container>
    )
}


   