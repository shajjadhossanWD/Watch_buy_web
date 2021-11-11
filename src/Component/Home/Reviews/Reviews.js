import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from './Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(result =>{
            setReviews(result)
        })
    },[])
    return (
        <div className="container my-5">
           <p><b>TOP REVIEWS</b></p>
           <h1>OUR CUSTOMERS REVIEWS</h1>

           <Row xs={1} md={2} lg={3} className="g-4">
              {
                  reviews.map(review => <Review key={review._id} review={review}></Review>)
              }
           </Row>
        </div>
    );
};

export default Reviews;