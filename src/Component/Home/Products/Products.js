import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://floating-beach-19439.herokuapp.com/watches')
        .then(res => res.json())
        .then(result =>{
            setProducts(result)
        })
    },[])

    return (
        <div className="container my-5 ">
           <div className=" cards_title">
           <p><b>360° COLLECTION</b></p>
            <h1>OUR BEST<span> WATCH PRODUCTS</span></h1>
           </div>
            <Row xs={1} md={2} lg={3} className="g-4">
               {
                   products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
               }
            </Row>
        </div>
    );
};

export default Products;