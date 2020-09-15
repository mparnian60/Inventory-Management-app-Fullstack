import React, { useState, useEffect } from 'react';
import { getProductCodeAndDescAPI } from '../api/productApi'


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
  const[productDetails, setProductDetails] = useState([]);
  const[productSelected, setProductSelected] = useState('')
  const[productDesc, setProductDesc] = useState('')

  const getProductCode = () => {
    getProductCodeAndDescAPI()
      .then((response) => {
        console.log('productdetails', response)

        setProductDetails(response)
      })
  }

  useEffect(() => {
    getProductCode();
  }, [])


  const handleChange = (event) => {
      setProductSelected(event.target.value);
      console.log('event', event)
      setProductDesc(event.nativeEvent.target.dataset.desc)
      console.log('dataset', event.nativeEvent.target.dataset.code)
    };


  return (

    <Container component="main" maxWidth="l" >
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Product Code</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={productSelected}
          onChange={handleChange}
          label="ProductCode"
        >
          {productDetails.map((product) => {
            return (
              <MenuItem key={product.id} value={product.product_code} data-desc={product.product_description}>{product.product_code}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" value={productDesc} />
      </FormControl>
    </Container>
  )
}


