import React, { useState } from 'react';
import { createNewProductAPI } from '../api/productApi'


import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  submit: {
    margin: theme.spacing(10, 10, 30),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

const productData = {
  product_code: '',
  product_description: '',
  UOM: '',
  PFR: '',
  MOQ: '',
  safety_stock: '',
  supplier_name: '',
  lead_time: ''
}


export default function NewProduct() {
  const classes = useStyles();

  const [product, setProduct] = useState(productData);

  const [alert, setAlert] = useState(false);
  const [errors, setErrors] = useState([]);

  const onChange = (e) => {
    const newProduct = { ...product }
    newProduct[e.target.name] = e.target.value
    setProduct(newProduct);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    createNewProductAPI({
      userId: localStorage.getItem('userId'),
      product: product
    }).then((result) => {
      console.log('result', result)

      setProduct(productData);

      if (result.errors) {
        setAlert(true);
        setErrors(result.errors)
      }
    }).catch(e => {
      console.log('error', e)
    })
  }

  

  const closeAlert = () =>{
    setAlert(false)
}

  return (
    <Container component="main" maxWidth="xs" >
    {alert && <MuiAlert onClose={closeAlert} severity="error">{errors[0]}</MuiAlert>}
      <Typography variant="h6" gutterBottom>
        Product Details
      </Typography>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField onChange={onChange}
              required
              value={product.product_code}
              id="product_code"
              name="product_code"
              label="Product Code"
              fullWidth
            // autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField onChange={onChange}
              value={product.product_description}
              id="product_description"
              name="product_description"
              label="Product Description"
              fullWidth
            // autoComplete="shipping address-line1"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">UOM</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="UOM"
                value={product.UOM}
                onChange={onChange}
                label="UOM"
              >
                <MenuItem value="each">Each</MenuItem>
                <MenuItem value="bag">Bag</MenuItem>
                <MenuItem value="carton">Carton</MenuItem>
                <MenuItem value="length">Length</MenuItem>
                <MenuItem value="kg">Kg</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl} >
              <InputLabel id="demo-simple-select-outlined-label">PFR</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="PFR"
                value={product.PFR}
                label="PFR"
                onChange={onChange}
              >
                <MenuItem value="G">G</MenuItem>
                <MenuItem value="R">R</MenuItem>
                <MenuItem value="C">C</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField onChange={onChange}
              value={product.MOQ}
              id="MOQ"
              name="MOQ"
              label="MOQ"
              fullWidth
            // autoComplete="shipping address-line2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField onChange={onChange}
              value={product.safety_stock}
              id="safety_stock"
              name="safety_stock"
              label="Safety Stock"
              fullWidth
            // autoComplete="shipping address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField onChange={onChange}
              value={product.supplier_name}
              required
              id="supplier_name"
              name="supplier_name"
              label="Supplier Name"
              fullWidth
            // autoComplete="shipping postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField onChange={onChange}
              required
              value={product.lead_time}
              id="lead_time"
              name="lead_time"
              label="Lead Time"
              fullWidth
            // autoComplete="shipping country"
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            lassName={classes.submit}
          >
            Create New Product
        </Button>
        </Grid>
      </form>

    </Container>
  )
}