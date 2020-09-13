import { useEffect, useState } from "react";
import React from 'react';
import {createNewProductAPI, getProductListAPI, updateProductAPI, deleteProductAPI} from '../api/productApi';

import MaterialTable from 'material-table';
import Container from '@material-ui/core/Container';
import MuiAlert from '@material-ui/lab/Alert';

const EditProductList = (props) =>{
    const [alert, setAlert] = useState(false);
    const [errors, setErrors] = useState([]);

    // const closeAlert = () =>{
    //     setAlert(false)
    // }

    return(
        <MaterialTable
        editable={{
            onRowAdd: (async (newData) => {
              console.log('new data', newData);
    
              const result = await createNewProductAPI(newData)
              console.log('reult new', result);
    
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  props.setState((prevState) => {
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
                    props.setState((prevState) => {
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
                  props.setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              })
            })
          }}
          />
    )
    
}

export default EditProductList;