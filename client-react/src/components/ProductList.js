import { useEffect, useState } from "react";
import React from 'react';
import {createNewProductAPI, getProductListAPI, updateProductAPI, deleteProductAPI} from '../api/productApi';

import MaterialTable from 'material-table';
import Container from '@material-ui/core/Container';
import MuiAlert from '@material-ui/lab/Alert';


const ProductList = (props) => {

  const [alert, setAlert] = useState(false);
  const [errors, setErrors] = useState([]);


    useEffect(()=>{
            getProductListAPI()
            .then(result=>{
                  console.log('data', result);
                  /* object destructuring, creating a new object and add more into the object or overwrite current one*/
                  const newState = {
                    ...state, 
                    data:result
                  }
                  setState(newState)
            })
            console.log('test')
    },[])


    const [state, setState] = useState({
        columns: [
          { title: 'Product Code', field: 'product_code' },
          { title: 'Product Description', field: 'product_description' },
          { title: 'UOM', field: 'UOM' },
          { title: 'PFR', field: 'PFR' },
          { title: 'MOQ', field: 'MOQ', type: 'numeric' },
          { title: 'Safety Stock', field: 'safety_stock', type: 'numeric' },
          { title: 'Supplier Name', field: 'supplier_name' },
          { title: 'Lead Time', field: 'lead_time', type: 'numeric' },
        ],
    data: []
  });

  const closeAlert = () =>{
    setAlert(false)
}

    return(
      
        <Container component="main" maxWidth="l" >
          {alert && <MuiAlert onClose={closeAlert} severity="error">{errors[0]}</MuiAlert>}
          {props.admin ?
        <MaterialTable
        title="Product List"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: (async (newData) => {
            console.log('new data', newData);

            const result = await createNewProductAPI(newData)
            console.log('reult new', result);

            return new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            })
          }),
          onRowUpdate: async (newData, oldData) =>{
            console.log('new data', newData);
            console.log('old data', oldData);

            const result = await updateProductAPI(newData)
            console.log('reult updated', result);

            if (result.errors) {
              setAlert(true);
              setErrors(result.errors)
            }

             return new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            })
          },
          onRowDelete: ( async (oldData) =>{
            console.log('old data', oldData);

            const result = await deleteProductAPI(oldData)
            console.log('reult deleted', result);

            return new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            })
          })
        }}
      />
    : 
    <MaterialTable
        title="Product List"
        columns={state.columns}
        data={state.data}
        />
      }
      </Container>
    )
}

export default ProductList;
