import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ManageProduct from './ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [deleteProduct, setDeleteProduct] = useState();

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
               <Row xs={1} md={2} lg={3} className="g-4 container mx-auto">
                   {
                    products.map( product => <ManageProduct 
                    key={product._id}
                    handleDeleteProduct = {handleDeleteProduct}
                    product={product}></ManageProduct>)
                   }
               </Row>
           </div>
        </div>
    );
};

export default ManageProducts;