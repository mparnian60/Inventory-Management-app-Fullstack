import { useEffect, useState } from "react";
import React from 'react';
import {getProductListAPI} from '../api/productApi'

import MaterialTable from 'material-table';
import Container from '@material-ui/core/Container';

const ProductList = () => {

    const[productList, setProductList]= useState([])
    console.log('product list before use effect', productList);

    useEffect(()=>{
        async function getList(){
            await getProductListAPI()
            .then(data =>{
                console.log('data', data);
                setProductList(data)
            })
        }

        getList();
        
    },[])

    console.log('product list after use effect', productList);

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
    data: productList
  });

    return(
        <Container component="main" maxWidth="l" >
        <MaterialTable
        title="Product List"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
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
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
      </Container>
    )
}

export default ProductList;
