import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ManageProduct from './ManageProduct/ManageProduct';
import GridLoader from "react-spinners/GridLoader";
import { css } from "@emotion/react";

const spinnerCss = css`
  display: block;
  margin-bottom: 30px;
`;

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [deleteProduct, setDeleteProduct] = useState();
    let [loading] = useState(true);

    useEffect(()=>{
        fetch('https://floating-beach-19439.herokuapp.com/watches')
        .then(res => res.json())
        .then(result =>{
            setProducts(result)
        })
    },[deleteProduct])

    const handleDeleteProduct = (id) =>{
            const confirmDelete = window.confirm('Are you sure, you want to delete this Orders? Please Check it again')
            if(confirmDelete){
               fetch(`https://floating-beach-19439.herokuapp.com/watches/${id}`,{
                   method: "DELETE",
                   headers: {"content-type": "application/json"}
                 })
                  .then(res => res.json())
                  .then(result =>{
                      if(result.deletedCount > 0){
                          alert('deleted successfully')
                          setDeleteProduct(result)
                      }
                     
                  })
            }
           
           }
           
    return (
        <div>
          <div className="dashboard_div">
             <h1 className="text-white">MANAGE YOUR PRODUCT</h1>
          </div>
           <div>
             <h1 className="my-5">MANAGE PRODUCTS</h1>
               {products.length?<Row xs={1} md={2} lg={3} className="g-4 container mx-auto">
                   {
                    products.map( product => <ManageProduct 
                    key={product._id}
                    handleDeleteProduct = {handleDeleteProduct}
                    product={product}></ManageProduct>)
                   }
               </Row>
               :
                <div className="spinner_div_manage">
                    <GridLoader size={50} css={spinnerCss} loading={loading} color="#ac9061"/>
                </div>}
           </div>
        </div>
    );
};

export default ManageProducts;