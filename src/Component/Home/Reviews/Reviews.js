import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from './Review/Review';
import GridLoader from "react-spinners/GridLoader";
import { css } from "@emotion/react";

const spinnerCss = css`
  display: block;
  margin-bottom: 30px;
`;

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    let [loading] = useState(true);

    useEffect(()=>{
        fetch('https://floating-beach-19439.herokuapp.com/review')
        .then(res => res.json())
        .then(result =>{
            setReviews(result)
        })
    },[])
    return (
        <div className="container my-5">
         <div className="cards_title">
           <p><b>TOP REVIEWS</b></p>
           <h1>OUR <span>CUSTOMERS REVIEWS</span></h1>
         </div>

           {reviews.length?<Row xs={1} md={2} lg={3} className="g-4">
              {
                  reviews.map(review => <Review key={review._id} review={review}></Review>)
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

export default Reviews;