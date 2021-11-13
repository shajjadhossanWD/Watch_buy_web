import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from './Product/Product';
import GridLoader from "react-spinners/GridLoader";
import { css } from "@emotion/react";

const spinnerCss = css`
  display: block;
  margin-bottom: 30px;
`;
const Products = () => {
    const [products, setProducts] = useState([]);
    let [loading] = useState(true);

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
      {products.length?<Row xs={1} md={2} lg={3} className="g-4">
               {
                   products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
               }
            </Row>
            :
            <div className="spinner_div">
              <GridLoader size={50} css={spinnerCss} loading={loading} color="#ac9061"/>
            </div>
            }
        </div>
    );
};

export default Products;