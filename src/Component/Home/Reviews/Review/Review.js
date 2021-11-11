import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Review = ({review}) => {
    const {userName, img, description, ratings} = review;
    return (
      <Col>
        <Card as="div">
         <div className="img_div">
           <Card.Img variant="top" src={img} className="img"/>
         </div>
          <Card.Body>
            <Card.Title>{userName}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Rating
                initialRating={ratings}
                style={{color: 'orange'}}
                readonly
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
            />
          </Card.Body>
        </Card>
      </Col> 
    );
};

export default Review;