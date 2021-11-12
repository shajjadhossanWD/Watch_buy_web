import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from './Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

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

           <Row xs={1} md={2} lg={3} className="g-4">
              {
                  reviews.map(review => <Review key={review._id} review={review}></Review>)
              }
           </Row>
        </div>
    );
};

export default Reviews;