import React from 'react';
import { ButtonGroup, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Order = ({order}) => {
    const {name, itemsImg, bookingItems, Price} = order
    return (
        <Col>
        <Card as="div">
         <div className="img_div">
           <Card.Img variant="top" src={itemsImg} className="img"/>
         </div>
          <Card.Body>
            <Card.Title>{bookingItems}</Card.Title>
            <Card.Text>
             User Name: {name}
            </Card.Text>
            <Card.Text>$ {Price} Only</Card.Text>
            <Link to={`/purchase/${name}`}>
            <ButtonGroup className="buttonGrp">Buy Now</ButtonGroup>
            </Link>          
            </Card.Body>
        </Card>
      </Col>
    );
};

export default Order;