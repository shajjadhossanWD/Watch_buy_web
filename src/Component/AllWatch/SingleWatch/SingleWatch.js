import React from 'react';
import { ButtonGroup, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleWatch.css';

const SingleWatch = ({watch}) => {
    const {name, img, short_des, price} = watch;
    return (
      <Col>
        <Card as="div" className="watch_card">
         <div className="img_div">
           <Card.Img variant="top" src={img} className="img"/>
         </div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {short_des}
            </Card.Text>
            <Card.Text>$ {price} Only</Card.Text>
            <Link to={`/purchase/${name}`}>
            <ButtonGroup className="buttonGrp">Buy Now</ButtonGroup>
            </Link>          
            </Card.Body>
        </Card>
      </Col>
    );
};

export default SingleWatch;